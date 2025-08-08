import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water & PFAS | Montevallo Water Facts",
};

export default function WaterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <h1 className="text-3xl font-bold mb-3">Water & PFAS</h1>
      <p className="mb-6">
        A two-minute guide for families and neighbors. Clear, brief, and useful.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Basics</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>PFAS are durable chemicals; they do not break down easily.</li>
        <li>They can cycle through wastewater and sludge into the broader environment.</li>
        <li>Removing PFAS from finished drinking water requires targeted treatment.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">How removal works</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Common approaches include granular activated carbon, ion exchange, or membrane systems.
        </li>
        <li>
          Effectiveness depends on proper sizing, contact time, maintenance, and disposal of spent media.
        </li>
        <li>
          Utilities that publish schedules and results make it easier for residents to follow progress.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Everyday takeaways</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Pregnancy, infants, and children warrant special attention.</li>
        <li>Adults may face higher risks reported for several cancers and thyroid issues.</li>
        <li>Clear public notice and plain summaries help everyone make good decisions.</li>
      </ul>

      <p className="mt-8 text-sm opacity-80">
        Prepared by Dr. Rod Macpherson. This page condenses public health guidance in everyday language.
      </p>
    </div>
  );
}
