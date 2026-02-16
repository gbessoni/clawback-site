import { NextResponse } from "next/server";

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function ghRequest(url: string, token: string, init?: RequestInit) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}: ${text}`);
  }
  return text ? JSON.parse(text) : null;
}

export async function POST(req: Request) {
  try {
    // Auth
    const auth = req.headers.get("authorization") || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    if (!process.env.PUBLISH_TOKEN || token !== process.env.PUBLISH_TOKEN) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    // Input
    const page = await req.json();
    if (!page?.slug || typeof page.slug !== "string") {
      return NextResponse.json({ ok: false, error: "Missing slug" }, { status: 400 });
    }
    if (!/^[a-z0-9-]+$/.test(page.slug)) {
      return NextResponse.json(
        { ok: false, error: "Invalid slug (lowercase letters, numbers, dashes)" },
        { status: 400 }
      );
    }

    const ghToken = mustEnv("GITHUB_TOKEN");
    const owner = mustEnv("GITHUB_OWNER");
    const repo = mustEnv("GITHUB_REPO");
    const branch = process.env.GITHUB_BRANCH || "main";

    const filePath = `content/pages/${page.slug}.json`;
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

    // Check if file exists (get sha)
    let sha: string | undefined;
    try {
      const existing = await ghRequest(`${apiUrl}?ref=${branch}`, ghToken);
      sha = existing?.sha;
    } catch (e: any) {
      // If 404, it's new file; otherwise throw
      if (!String(e.message).includes("404")) throw e;
    }

    const content = Buffer.from(JSON.stringify(page, null, 2), "utf8").toString("base64");

    const body: any = {
      message: `${sha ? "Update" : "Create"} page: ${page.slug}`,
      content,
      branch,
    };
    if (sha) body.sha = sha;

    const commitResp = await ghRequest(apiUrl, ghToken, {
      method: "PUT",
      body: JSON.stringify(body),
    });

    return NextResponse.json({
      ok: true,
      slug: page.slug,
      path: filePath,
      commit: commitResp?.commit?.sha,
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}
