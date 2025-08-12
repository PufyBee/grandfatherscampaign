import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introduction | Montevallo Water Facts",
};

const HERO_SRC = "/images/vote-rod-mayor.png"; // update if your hero filename differs

export default function Page() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-4">
      {/* HERO: just the image */}
      <div className="relative mx-auto max-w-4xl aspect-[5/3] mb-8">
        <Image
          src={HERO_SRC}
          alt=""
          fill
          sizes="(min-width:1280px) 896px, 90vw"
          priority
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      {/* On-page nav */}
      <nav className="mb-8">
        <ul className="flex flex-wrap gap-3 text-sm">
          <li><a href="#s1" className="underline hover:no-underline">Montevallo’s Dangerous Drinking Water</a></li>
          <li><a href="#s2" className="underline hover:no-underline">Mayor Nix: False & Misleading Statements (2019–2025)</a></li>
          <li><a href="#s3" className="underline hover:no-underline">Dr. MacPherson’s Qualifications</a></li>
          <li><a href="#s4" className="underline hover:no-underline">Questions for Residents</a></li>
        </ul>
      </nav>

      {/* SECTION 1 */}
      <section id="s1" className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Montevallo’s Dangerous Drinking Water</h2>
        <p className="mb-4">Mayor Nix has long ignored Montevallo’s dangerous drinking water.</p>
        <p className="mb-4">
          Mayor Russell “Rusty” Nix swore to an Oath of Office to be HONEST, and with that oath, the mayor has
          the moral and legal responsibility to protect the personal health, safety, and well-being of the
          residents of Montevallo and the public at large.
        </p>
        <p className="mb-4">
          Since the 1980s, nationwide publicity has focused on the dangerous chemicals found in drinking water.
          Over the four-and-a-half years Mr. Nix has been Montevallo’s Mayor, he has not taken any steps to
          remove the toxic (poisonous) and carcinogenic (cause cancer) chemicals called Forever Chemicals from
          Montevallo’s drinking water. Equally important, Mayor Nix has not even informed the residents of these
          dangerous chemicals in our drinking water. Furthermore, there are laws that compel mayors to be honest
          with the public. The Right to Know Laws, Public Notice Laws, Freedom of Information Laws, and certain
          Alabama Laws all have a bearing on the mayor’s duty to inform the public of a known danger.
        </p>
        <p className="mb-4">
          Other mayors throughout the nation, and in Alabama, are taking actions to remove the “Forever
          Chemicals” from their drinking water. Unlike the other mayors, why has Mayor Nix continued to ignore
          these dangerous chemicals in the drinking water?
        </p>
        <p className="mb-4">
          Movies like <em>Erin Brockovich</em>, <em>Dark Waters</em>, TV documentaries, and TV news programs have informed us about the
          dangers from Forever Chemicals (collectively grouped as PFAS). Information about these toxic and
          carcinogenic chemicals has been routinely published in newspapers and magazines. Daily information on
          Forever Chemicals shows up on the news feed to my computer nearly every day.
        </p>
        <p className="mb-4">
          Mayor Nix has told us that he served on Montevallo’s Water Board. During Mayor Nix’s term in office,
          Montevallo’s Water Board was testing for 29 PFAS in our drinking water. During 2023, 2024, and 2025,
          Montevallo’s water-quality test reports showed that many of the 29 PFAS were present in our drinking
          water. These water-quality tests can be seen on the website for the Alabama Department of Environmental
          Management’s e-file.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Who is harmed by PFAS?</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium">Unborn and Young Children</h4>
            <p>
              The unborn absorb PFAS from their mother’s blood. PFAS excreted through lactation leads to lower
              infant birth weights. Since children drink more water, eat more food, and breathe more air per
              pound of body weight than adults, it increases their exposure to PFAS. They crawl on floors and
              stick things in their mouths which leads to more contact with PFAS in carpets, dust, toys, other
              playthings, and cleaning chemicals.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Children and Young Adults</h4>
            <p>PFAS are connected to developmental disorders, cardiovascular diseases, metabolic illnesses, and various cancers.</p>
          </div>
          <div>
            <h4 className="font-medium">Women</h4>
            <p>
              PFAS can cause reproductive damage, delayed fetal growth, increased blood pressure, high cholesterol, suppress the immune
              system, thyroid disease, preeclampsia, and introduce cancers (breast, ovarian, liver, bladder, and so on).
            </p>
          </div>
          <div>
            <h4 className="font-medium">Men</h4>
            <p>PFAS can cause assorted ailments, stomach problems, assorted diseases, and cancers (testicular, kidney, prostrate, thyroid, etc.).</p>
          </div>
        </div>

        <p className="mt-4">
          According to one expert, there probably isn’t a single tissue or an organ system in the human body
          where PFAS destructive impacts haven’t been reported. Less than a drop from one of the PFAS can cause
          harm to humans, animals, and the environment.
        </p>

        <div className="mt-6">
          <Link href="/water" className="inline-block rounded-md bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800">
            Learn more about PFAS in our water
          </Link>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="s2" className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Mayor Nix: False & Misleading Statements (2019–2025)</h2>
        <p className="mb-4">
          The full record includes his 2019 campaign promises and actions in office from 2020–2025 — PFAS notice
          and treatment that did not occur, investigations not pursued, zoning and flooding issues, and more.
        </p>
        <Link href="/section-2" className="inline-block rounded-md bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800">
          Read Section 2
        </Link>
      </section>

      {/* SECTION 3 */}
      <section id="s3" className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Dr. MacPherson’s Qualifications</h2>
        <p className="mb-4">
          Military service, university studies, corporate management, the university world, small business,
          state government, and consulting experience — in his own words.
        </p>
        <Link href="/background" className="inline-block rounded-md bg-gray-100 px-5 py-3 font-medium hover:bg-gray-200">
          Read the full background
        </Link>
      </section>

      {/* SECTION 4 */}
      <section id="s4" className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Questions for Residents</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Were you or your neighbors ever told during Mayor Nix’s term in office that Montevallo’s drinking water was contaminated with toxic and carcinogenic chemicals?</li>
          <li>Did Mayor Nix have an obligation to inform you of the upcoming demolition of the Historic Victory Building (a Hazardous Waste site) and the gasoline station next to the old Alabama Power building?</li>
          <li>If a legal precedent was established with the Cobblestone contract, do you feel the town’s taxpayers were obligated to higher taxes in the future without their knowledge?</li>
          <li>Should apartment owners and land developers be permitted to pursue building plans that worsen flooding and damage the stormwater system, or violate zoning while homeowners must comply?</li>
        </ul>
      </section>

      {/* Back to top (no onClick in Server Component) */}
      <div className="mt-8 mb-6">
        <a href="#top" className="text-sm underline hover:no-underline">Back to top</a>
      </div>
    </div>
  );
}
