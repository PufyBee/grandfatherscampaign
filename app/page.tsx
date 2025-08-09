import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dr. Rod Macpherson for Mayor | Montevallo Water Facts",
};

const HERO_SRC = "/images/vote-rod-mayor.jpg"; // update if you used .webp/.jpg

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* HERO: just the image, centered, no background */}
      <div className="relative mx-auto max-w-4xl aspect-[5/3] mb-8">
        <Image
          src={HERO_SRC}
          alt=""                 // decorative
          fill
          sizes="(min-width:1280px) 896px, 90vw"
          priority
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight mb-6">
        Vote Dr. Rod Macpherson for Mayor
      </h1>

      {/* Water plan */}
      <section className="space-y-3 mb-8">
        <h2 className="text-2xl font-semibold">Water plan</h2>
        <p>
          When elected mayor, I will urge Montevallo’s Water Board to request that their commercial
          suppliers of drinking water reduce the toxic and carcinogenic Forever Chemicals in their
          water. If that isn’t possible, I will recommend that the Montevallo Water Board purchase
          a Reverse Osmosis system to reduce the dangerous chemicals in Montevallo’s drinking water.
        </p>
      </section>

      {/* Evidence */}
      <section className="space-y-3 mb-8">
        <h2 className="text-2xl font-semibold">Evidence</h2>
        <p>
          Evidence of the Forever Chemicals (grouped as PFAS) in Montevallo’s drinking water can be
          located in the annual water quality reports for Montevallo located on the Alabama
          Department of Environmental Management’s website in their e-file. This evidence shows that
          toxic and carcinogenic chemicals, called Forever Chemicals (PFAS), were located in
          Montevallo’s drinking water for 2025, 2024, and 2023.
        </p>
      </section>

      {/* Why it matters */}
      <section className="space-y-3 mb-10">
        <h2 className="text-2xl font-semibold">Why it matters</h2>
        <p>
          Most Americans absorb Forever Chemicals through their drinking water or ingest them from
          foods cooked in water. These Forever Chemicals endanger human life, our animals, and the
          environment.
        </p>
      </section>

      {/* Other goals */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Other goals, when elected mayor</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Reduce crime in Montevallo by investing more money in the police department.</li>
          <li>Invite UM to share its vast talent pool to help improve our schools.</li>
          <li>Stop wasting the taxpayers’ money on ill-conceived projects.</li>
          <li>Restore openness and honesty to City Hall.</li>
          <li>Reject defective building plans that cause flooding.</li>
          <li>
            Investigate the mismanagement of the Mahler Farm property and the questionable
            demolition of the Historic Victory Building.
          </li>
        </ol>
      </section>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-3 mb-4">
        <Link href="/water" className="inline-block rounded-md bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800">
          Learn about PFAS in our water
        </Link>
        <Link href="/history" className="inline-block rounded-md bg-gray-100 px-5 py-3 font-medium hover:bg-gray-200">
          Download the full history
        </Link>
        <Link href="/background" className="inline-block rounded-md bg-gray-100 px-5 py-3 font-medium hover:bg-gray-200">
          Read Dr. Macpherson’s background
        </Link>
      </div>
    </div>
  );
}
