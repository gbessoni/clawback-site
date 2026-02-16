"use client";

export default function PageClient({ page }: { page: any }) {
  return (
    <main className="min-h-screen p-10">
      {page.sections?.map((section: any, idx: number) => {
        if (section.type === "hero") {
          return (
            <section key={idx} className="py-20 text-center">
              <h1 className="text-5xl font-bold mb-4">{section.headline}</h1>
              <p className="text-xl text-gray-600 mb-6">{section.subheadline}</p>
              <a
                href={section.cta?.href ?? "#"}
                className="inline-block px-6 py-3 bg-black text-white rounded-lg"
              >
                {section.cta?.label ?? "Learn more"}
              </a>
            </section>
          );
        }
        return null;
      })}
    </main>
  );
}
