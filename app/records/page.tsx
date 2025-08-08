import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Records (2019–2025) | Montevallo Water Facts",
};

export default function RecordsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <h1 className="text-3xl font-bold mb-3">Records & Timeline (2019–2025)</h1>
      <p className="mb-6">
        What was promised, what appears in public documents, and how it affects water, notice,
        sludge, zoning, and flooding. Straightforward and neighbor-friendly.
      </p>

      <section className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">Promises and outcomes</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Public communication:</strong> residents were told to expect regular, easy-to-understand updates.
            In practice, notices have often been technical and irregular.
          </li>
          <li>
            <strong>Fiscal planning:</strong> deeper review was discussed; budget documents do not
            yet list a funded PFAS treatment timeline.
          </li>
          <li>
            <strong>Notices that come before risk:</strong> records reflect instances where notice arrived late or was hard to follow.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Short timeline</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>PFAS detections appear in state water reports for Montevallo.</li>
          <li>Sludge handling raises concerns about movement of PFAS onto fields and into food pathways.</li>
          <li>Construction and demolition decisions show gaps in proactive, plain-language notice.</li>
          <li>Zoning and runoff issues relate to flooding worries downstream.</li>
        </ul>
        <p className="mt-3 opacity-80">
          These points summarize documents reviewed by Dr. Rod Macpherson and public records. They are summaries, not legal findings.
        </p>
      </section>

      <section className="mt-8 p-4 border rounded-xl bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">The key question</h3>
        <p>
          Where is the public, dated, and funded plan for PFAS treatment, along with a monthly summary page
          that reports progress in plain language?
        </p>
      </section>

      <p className="mt-8 text-sm opacity-80">
        Prepared by Dr. Rod Macpherson. Sources available on request.
      </p>
    </div>
  );
}
