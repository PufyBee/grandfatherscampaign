import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Introduction website | Montevallo Water Facts",
};

const HERO_SRC = "/images/vote-rod-mayor.jpg";

export default function Page() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-4">
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

      <h2 className="text-2xl font-semibold mb-2">
        This website contains information concerning Montevallo’s dangerous drinking water.
      </h2>
      <p className="mb-6">Mayor Nix has long ignored Montevallo’s dangerous drinking water.</p>

      <div className="space-y-2 mb-6">
        <p>Mayor Nix’s False and Misleading statements (2019-2025)</p>
        <p>Dr. Roderick MacPherson’s professional qualification to be mayor.</p>
        <p>(4) General questions for Montevallo’s residents</p>
      </div>

      <p className="mb-4 leading-7">
        Mayor Russell “Rusty” Nix swore to an Oath of Office to be HONEST, and with that oath, the mayor has
        the moral and legal responsibility to protect the personal health, safety, and well-being of the residents
        of Montevallo and the public at large.
      </p>

      <p className="mb-4 leading-7">
        Since the 1980s, nationwide publicity has focused on the dangerous chemicals found in drinking water.
        Over the four-and-1/2 years Mr. Nix has been Montevallo’s Mayor, he has not taken any steps to remove
        the toxic (poisonous) and carcinogenic (cause cancer) called Forever Chemicals from Montevallo’s drinking
        water. Equally important, Mayor Nix has not even informed the residents of these dangerous chemicals in our
        drinking water. Furthermore, there are laws that compel mayors to be honest with the public. The Right to
        Know Laws, Public Notice Laws, Freedom of Information Laws, and certain Alabama Laws all have a bearing on
        the mayor’s duty to inform the public of a known danger.
      </p>

      <p className="mb-4 leading-7">
        Other mayors throughout the nation, and in Alabama, are taking actions to remove the ‘Forever Chemicals’
        from their drinking water. Unlike the other mayors, why has Mayor Nix continued to ignore these dangerous
        chemicals in the drinking water?
      </p>

      <p className="mb-6 leading-7">
        Movies like Erin Brockovich, Dark Waters, TV documentaries, and TV news programs have informed us about the
        dangers from Forever Chemicals (collectively grouped as PFAS). Information about these toxic and carcinogenic
        chemicals has been routinely published in newspapers and magazines. Daily information on Forever Chemicals shows
        up on the news feed to my computer nearly every day.
      </p>

      <p className="mb-6 leading-7">
        Mayor Nix has told us that he served on Montevallo’s Water Board. During Mayor Nix’s term in office, Montevallo’s
        Water Board was testing for 29 PFAS in our drinking water. During 2023, 2024, and 2025, Montevallo’s water quality
        test reports showed that many of the 29 PFAS were present in our drinking water. These water quality tests can be
        seen on the website for the Alabama Department of Environmental Management’s e-file.
      </p>

      <p className="mb-4 leading-7">
        Humans can be injured in a variety of ways by Forever Chemicals. The following list provides a small sample of the
        assorted harms that can be meted out to those drinking water tainted with Forever Chemicals.
      </p>

      <h3 className="font-semibold">Unborn and Young Children:</h3>
      <p className="mb-4 leading-7">
        The unborn absorb PFAS from their mother’s blood. PFAS excreted through lactation leads to lower birth weights.
        Since children drink more water, eat more food, and breathe more air per pound of body weight than adults, it
        increases their exposure to PFAS. They crawl on floors and stick things in their mouths which leads to more
        contact with PFAS in carpets, dust, toys, other playthings, and cleaning chemicals.
      </p>

      <h3 className="font-semibold">Children and Young Adults:</h3>
      <p className="mb-4 leading-7">
        PFAS are connected to developmental disorders, cardiovascular diseases, metabolic illnesses, and various cancers.
      </p>

      <h3 className="font-semibold">Women:</h3>
      <p className="mb-4 leading-7">
        PFAS can cause reproductive damage, delayed fetal growth, increased blood pressure, high cholesterol, suppress the
        immune system, thyroid disease, preeclampsia, and introduce cancers (breast, ovarian, liver, bladder, and so on).
      </p>

      <h3 className="font-semibold">Men:</h3>
      <p className="mb-4 leading-7">
        PFAS can cause assorted ailments, stomach problems, assorted diseases, and cancers (testicular, kidney, prostrate,
        thyroid, etc.)
      </p>

      <p className="mb-4 leading-7">
        According to one expert, there probably isn’t a single tissue or an organ system in the human body where PFAS
        destructive impacts haven’t been reported. Less than a drop from one of the PFAS can cause harm to humans, animals,
        and the environment.
      </p>
    </div>
  );
}
