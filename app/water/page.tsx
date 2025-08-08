import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water & PFAS | Montevallo Water Facts",
};

export default function WaterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <h1 className="text-3xl font-bold mb-3">Water & PFAS</h1>
      <p className="mb-6">
        A focused explainer you can read in two minutes. No jargon. Just what
        matters for families here.
      </p>

      <h2 className="text-2xl font-semibold mb-2">PFAS basics</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>PFAS = “forever chemicals.” They persist in water, soil, and our bodies.</li>
        <li>
          They travel through wastewater and can re-enter the environment via
          sludge (“biosolids”).
        </li>
        <li>
          Removing PFAS from finished drinking water requires specific treatment
          (e.g., granular activated carbon or membranes).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Health picture (short version)</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Pregnancy/infants and children are most vulnerable to lasting effects.</li>
        <li>Adults face elevated risks reported for several cancers and thyroid problems.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">What a real plan looks like</h2>
      <ol className="list-decimal ml-6 space-y-2">
        <li>Dates and dollars for treatment — not vague intentions.</li>
        <li>Monthly public dashboards with all PFAS results, explained plainly.</li>
        <li>Independent testing and verification posted online.</li>
        <li>Sludge policy that prevents PFAS cycling back into food and water.</li>
      </ol>

      <p className="mt-8 text-sm opacity-80">
        Prepared by <strong>Dr. Rod Macpherson</strong>. This page summarizes
        public health concerns in accessible language.
      </p>
    </div>
  );
}
