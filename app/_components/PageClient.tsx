"use client";

export default function PageClient({ page }: { page: any }) {
  return (
    <main className="min-h-screen">
      {page.sections?.map((section: any, idx: number) => {
        if (section.type === "hero") {
          return (
            <section
              key={idx}
              className="border-b border-gray-200 bg-gray-50"
            >
              <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="mb-16">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4">
                    Clawback / Sales Intel
                  </p>
                  <h1 className="text-5xl font-bold mb-5 leading-tight">
                    {section.headline}
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                    {section.subheadline}
                  </p>
                  <div className="flex items-center gap-6">
                    <a
                      href={section.cta?.href ?? "#"}
                      className="inline-block px-8 py-3.5 bg-black text-white text-base font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      {section.cta?.label ?? "Learn more"}
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-600 hover:text-black transition-colors"
                    >
                      See example
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Talk tracks</h3>
                    <p className="text-sm text-gray-600">Personalized messaging based on recent activity</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Objection handling</h3>
                    <p className="text-sm text-gray-600">Anticipate pushback and prepare responses</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Next steps</h3>
                    <p className="text-sm text-gray-600">Clear action items to move deals forward</p>
                  </div>
                </div>
              </div>
            </section>
          );
        }
        return null;
      })}
    </main>
  );
}
