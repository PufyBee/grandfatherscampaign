export const metadata = { title: "Forever Chemicals (PFAS) — Montevallo" };

function Attribution() {
  return <p className="mt-10 text-sm opacity-75">Prepared by <strong>Dr. Rod Macpherson</strong>.</p>;
}

export default function PFASPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-3">Forever Chemicals (PFAS)</h1>
      <p className="mb-4">
        PFAS build up in water, soil, and our bodies. Research links exposure to developmental,
        reproductive, metabolic, and cancer risks. They don’t go away on their own—and families
        shouldn’t wait years for basic transparency.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Who’s most vulnerable</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Pregnancy & infants:</strong> PFAS can cross the placenta and be present in breast milk.</li>
        <li><strong>Children & teens:</strong> developmental, metabolic, liver, and cardiovascular concerns.</li>
        <li><strong>Women:</strong> reproductive health and several cancers are of elevated concern.</li>
        <li><strong>Men:</strong> raised risks reported for testicular, kidney, and thyroid cancers.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Montevallo: the gap</h2>
      <p className="mb-3">
        State water reports and local records indicate PFAS detections and policy decisions
        that affect exposure. Yet City Hall has not published a dated, funded plan to remove PFAS
        from finished water or to notify residents proactively. That’s the problem to fix.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">What we’ll do</h2>
      <ol className="list-decimal ml-6 space-y-1">
        <li>Publish plain-English water summaries with links to the source reports.</li>
        <li>Order broader PFAS testing (beyond the minimum panel) and post every result.</li>
        <li>Adopt sludge (biosolids) handling that doesn’t shift harm to farms/food.</li>
        <li>Implement a “right-to-know” policy: advance notice before risky activities.</li>
      </ol>

      <div className="mt-8 rounded-xl border p-4">
        <h3 className="font-semibold mb-1">Sources & documents</h3>
        <ul className="list-disc ml-6">
          <li><a className="underline" href="/records">Records & Timeline (2019–2025)</a></li>
          <li><a className="underline" href="/docs/Forever-Chemicals.pdf">Full PFAS write-up (PDF)</a></li>
        </ul>
      </div>

      <Attribution />
    </main>
  );
}
