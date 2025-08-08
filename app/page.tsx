import type { Metadata } from "next";
import SidePhoto from "../components/SidePhoto";

export const metadata: Metadata = {
  title: "Clean Water. Clear Answers. | Montevallo Water Facts",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl 2xl:max-w-none 2xl:grid 2xl:grid-cols-[240px_minmax(0,900px)_240px] 2xl:gap-8">
      {/* LEFT PHOTO — placeholders only at 2xl, won’t show on smaller screens */}
      <SidePhoto src={undefined} alt="Local water photo (left)" showPlaceholder />

      {/* MAIN CONTENT */}
      <div className="2xl:max-w-none">
        <h1 className="text-4xl font-bold mb-4">Clean Water. Clear Answers.</h1>

        <p className="text-xl mb-6">
          Montevallo families deserve drinking water that’s safe—and accountability when it isn’t.
          This page explains what “forever chemicals” (PFAS) are, what our local records show,
          why City Hall’s current approach isn’t enough, and what should happen next.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">What are PFAS, in plain English?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Industrial chemicals that don’t break down easily—once in water or our bodies, they linger.</li>
            <li>Linked in research to developmental, reproductive, liver, metabolic, and cancer risks.</li>
            <li>They move through water systems and can reach farms via sewage sludge (“biosolids”).</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Who’s most vulnerable?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Pregnancy & infants:</strong> exposure can begin before birth; PFAS can appear in breast milk.</li>
            <li><strong>Children & teens:</strong> developmental and metabolic concerns; growing bodies are more sensitive.</li>
            <li><strong>Adults:</strong> elevated risks reported for several cancers and thyroid issues.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">What our local records show</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>State water reports for Montevallo include PFAS detections.</li>
            <li>Sludge/biosolids can transfer PFAS to fields and into food pathways, harming families and farmers.</li>
            <li>Residents have not consistently received proactive notice before activities with public-health implications.</li>
          </ul>
          <p className="mt-3 opacity-80">
            Details come from documents prepared by Dr. Rod Macpherson and referenced public records.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">What City Hall hasn’t done</h2>
          <p>
            There is <strong>no dated, funded, public plan</strong> to remove PFAS from finished water, and no
            predictable, plain-English monthly updates. That’s the gap to close.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">What should happen now</h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Publish</strong> simple water summaries with links to the underlying state reports.</li>
            <li><strong>Test broadly</strong> for a wider range of PFAS and share every result online.</li>
            <li><strong>Fix sludge policy</strong> so we aren’t shifting harm to farms or food.</li>
            <li><strong>Adopt “right-to-know” notices</strong> before activities that affect public health.</li>
          </ol>
        </section>

        <p className="mt-10 text-sm opacity-80">
          Prepared by <strong>Dr. Rod Macpherson</strong>. Plain-language summary for Montevallo residents.
        </p>
      </div>

      {/* RIGHT PHOTO */}
      <SidePhoto src={undefined} alt="Local water photo (right)" showPlaceholder />
    </div>
  );
}
