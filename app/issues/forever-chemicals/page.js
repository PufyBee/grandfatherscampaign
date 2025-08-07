export const metadata = { title: "Forever Chemicals (PFAS) — Montevallo" };

function Callout({ children }) {
  return <div className="rounded-xl border-l-4 pl-4 py-3 my-6">{children}</div>;
}

export default function PFASPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-3">Forever Chemicals (PFAS)</h1>
      <p className="text-lg mb-6">
        PFAS are industrial chemicals that don’t break down easily and can remain in water, soil,
        and our bodies for years. This page summarizes the risks and our plan to protect families in Montevallo.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What to know</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>They persist for decades and are hard to remove once in our bodies or water.</li>
        <li>Health impacts vary by age and sex; children are especially vulnerable.</li>
        <li>Recent state water reports indicate PFAS detections in Montevallo’s drinking water.</li>
      </ul>

      <Callout>
        <strong>Our commitment:</strong> full transparency, independent testing, rapid public notices,
        and a remediation plan that prioritizes families, farmers, and small businesses.
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Action plan</h2>
      <ol className="list-decimal ml-6 space-y-2">
        <li>Publish plain-language water summaries with links to underlying state reports.</li>
        <li>Commission additional testing for a broader set of PFAS beyond the minimal panel.</li>
        <li>Work with farmers and utilities on sludge handling that doesn’t shift harm elsewhere.</li>
        <li>Adopt a “right-to-know” standard: proactive alerts before risky activities.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Sources & reading</h2>
      <ul className="list-disc ml-6">
        <li>State water quality reports (ADEM e-files)</li>
        <li>Public health literature summaries</li>
      </ul>
    </>
  );
}
