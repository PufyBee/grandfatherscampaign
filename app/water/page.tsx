import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water — PFAS (verbatim) | Montevallo Water Facts",
};

export default function WaterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <h1 className="text-3xl font-bold mb-4">Water — PFAS</h1>

      {/* VERBATIM text from the user's PFAS document. */}
      <pre className="whitespace-pre-wrap text-[1.05rem] leading-7">
{`‘Forever Chemicals’: 15,000 of them are grouped as PFAS) 8/7/25

The word ‘forever’ is aptly used to describe these toxic and carcinogenic chemicals because they are held together by one of the strongest bonds known in chemistry and PFAS can remain in humans, animals, and the environment for decades. Neither the human body nor the environment can break PFAS down. These chemicals cannot be seen by the human eye, nor can they be smelled or tasted.  New Forever Chemicals labeled “GenX” are replacing older ones, and they are just as deadly as the legacy PFAS. 

A tiny amount of PFOA (perfluorooctanoic acid) or PFOS (another acid) can be deadly to humans. Little is known about the impact of a mixture of PFAS on humans.  Once PFAS get into humans, they are impossible to remove.  Virtually every American has PFAS in their blood. These harmful chemicals were introduced by the chemical industry in the 1930s and they can be found in thousands of consumer and industrial products today. 

                                                      The Unborn and Young Children 

The unborn absorb PFAS from their mothers’ blood. PFAS excreted through lactation leads to low infant birth weights. Since children drink more water, eat more food, and breathe more air per pound of body weight than adults, it increases their exposure to PFAS. They crawl on floors and stick things in their mouths which leads to more contact to PFAS in carpets, dust, toys, other playthings, and cleaning chemicals. 

                                                          Children and Young Adults

PFAS can cause developmental disorders, cardiovascular disease, metabolic disease, liver damage, and a variety of cancers. 

                                                                       Adult Women

PFAS harms reproductive health, fetal development, increases blood pressure, produces high cholesterol, suppresses the immune system, and causes cancers (breast, bladder, ovarian, liver, and so on). 

                                                                           Adult males  

PFAS can cause assorted ailments, diseases, and cancers (testicular, kidney, prostrate, thyroid, etc.).  

According to one expert, there probably isn’t a tissue or an organ system in the human body where PFAS harmful effects haven’t been reported.`}
      </pre>

      <p className="mt-8 text-sm opacity-80">
        Prepared by Dr. Rod Macpherson. Shown verbatim from his PFAS document.
      </p>
    </div>
  );
}
