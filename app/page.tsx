import type { Metadata } from "next";
import SidePhoto from "../components/SidePhoto";

export const metadata: Metadata = {
  title: "Clean Water. Clear Answers. | Montevallo Water Facts",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl 2xl:max-w-none 2xl:grid 2xl:grid-cols-[240px_minmax(0,900px)_240px] 2xl:gap-8 px-4">
      {/* Left photo (placeholder until you add src) */}
      <SidePhoto src={undefined} alt="Local water photo, left side" showPlaceholder />

      {/* Main content */}
      <div className="2xl:max-w-none">
        <h1 className="text-4xl font-bold mb-4">Clean Water. Clear Answers.</h1>

        <p className="text-xl mb-6">
          PFAS, often called “forever chemicals,” appear in state water reports for Montevallo.
          This page explains what they are, who could be most affected, and practical steps
          the city can take to reduce exposure. It is written for neighbors, not specialists.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">PFAS in plain English</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Factory-made chemicals that linger in water, soil, and people.</li>
            <li>Linked in research to developmental, reproductive, liver, metabolic, and cancer risks.</li>
            <li>Can move through wastewater and reach farms through sewage sludge (“biosolids”).</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Who could be most affected</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Pregnancy and infants:</strong> exposure can begin before birth; PFAS can be present in breast milk.</li>
            <li><strong>Children and teens:</strong> growing bodies are more sensitive to lasting effects.</li>
            <li><strong>Adults:</strong> higher risks reported for several cancers and thyroid problems.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">What local records indicate</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>PFAS detections are listed in state water reports for Montevallo.</li>
            <li>Sludge practices can move PFAS onto fields and into food pathways, affecting families and farmers.</li>
            <li>Public notices have not always been timely or easy to understand.</li>
          </ul>
          <p className="mt-3 opacity-80">
            These notes summarize documents reviewed by Dr. Rod Macpherson and public records.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Current gap</h2>
          <p>
            There is no public, dated, and funded plan for PFAS treatment, and no simple monthly
            summary page that explains test results at a glance.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">A practical path forward</h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Publish a one-page monthly water summary with links to the state reports.</li>
            <li>Expand testing to a wider set of PFAS and post every result online.</li>
            <li>Set a treatment timeline and budget, and report progress each month.</li>
            <li>Manage sludge so PFAS are not shifted to fields or food.</li>
            <li>Give plain-language notice before activities that affect public health.</li>
          </ol>
        </section>

        <p className="mt-10 text-sm opacity-80">
          Prepared by Dr. Rod Macpherson. Plain-language summary for Montevallo residents.
        </p>
      </div>

      {/* Right photo (placeholder until you add src) */}
      <SidePhoto src={undefined} alt="Local water photo, right side" showPlaceholder />
    </div>
  );
}
