export const metadata = { title: "Records & Timeline (2019–2025)" };

export default function RecordsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-3">Records & Timeline (2019–2025)</h1>
      <p className="mb-6">
        This section summarizes the documents provided by Dr. Rod Macpherson: campaign statements,
        financial oversight questions, notices around demolition and construction, PFAS mentions in
        reports, sludge pathways, zoning and flooding concerns.
      </p>

      <ul className="list-disc ml-6 space-y-1">
        <li><a className="underline" href="/docs/Nix-2019-Campaign-and-2020-2025-Administration.pdf">Campaign vs. Administration (PDF)</a></li>
        <li><a className="underline" href="/docs/Background-Experiences-Mayor-2020-2025.pdf">Background & Events (PDF)</a></li>
      </ul>

      <div className="mt-6 rounded-xl border px-4 py-3">
        <h2 className="text-xl font-semibold mb-2">Why hasn’t City Hall removed PFAS?</h2>
        <p className="mb-2">
          That’s the central question these records raise. The documents point to detections in reports and
          decisions with public-notice implications. Our position: residents deserve a clear plan with dates,
          costs, and monthly progress updates—plus independent testing and a transparent sludge policy.
        </p>
      </div>
    </main>
  );
}
