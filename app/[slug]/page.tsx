import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import PageClient from "../_components/PageClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/pages", `${slug}.json`);
  if (!fs.existsSync(filePath)) notFound();

  const raw = fs.readFileSync(filePath, "utf-8");
  const page = JSON.parse(raw);

  return <PageClient page={page} />;
}
