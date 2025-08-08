import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Records (2019–2025) | Montevallo Water Facts",
};

export default function RecordsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <h1 className="text-3xl font-bold mb-3">Records & Timeline (2019–2025)</h1>
      <p className="mb-6">
        A clear, sourced summary of campaign statements and subsequent actions
        affecting water, notice, sludge, zoning, and flooding. Written for
        residents, not lawyers.
      </p>

      <section className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">Promises vs. outcomes</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Transparency:</strong> Promised frequent, understandable
            updates. Outcome: sporadic, technical notices many residents miss.
          </li>
          <li>
            <strong>Fiscal accountability:</strong> Disputes over scope/cost of
            deeper audits; no public PFAS treatment budget with dates.
          </li>
          <li>
            <strong>Public safety notices:</strong> Residents not consistently
            informed before activities with health implications (e.g., demolition).
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Selected timeline</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>PFAS detections appear in state water reports for Montevallo.</li>
          <li>
            Sludge/biosolids handling raises food-pathway concerns for families
            and farmers.
          </li>
          <li>
            Construction/demolition decisions highlight gaps in proactive public
            notice.
          </li>
          <li>
            Zoning/runoff issues contribute to flooding concerns for residents
            downstream.
          </li>
        </ul>
        <p className="mt-3 opacity-80">
          This timeline condenses details from longer write-ups by Dr. Rod
          Macpherson and public records.
        </p>
      </section>

      <section className="mt-8 p-4 border rounded-xl bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">The accountability question</h3>
        <p>
          Why hasn’t City Hall published a dated, funded plan to remove PFAS from
          finished water — while other Alabama systems have already moved toward
          treatment or pilots?
        </p>
      </section>

      <p className="mt-8 text-sm opacity-80">
        Prepared by <strong>Dr. Rod Macpherson</strong>. Sources available on request.
      </p>
    </div>
  );
}
