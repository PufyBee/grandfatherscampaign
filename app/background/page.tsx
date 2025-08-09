import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Background | Montevallo Water Facts",
};

export default function BackgroundPage() {
  return (
    // wider only for this page so the text isn't squeezed next to the photo
    <div className="mx-auto max-w-5xl px-4">
      <h1 className="text-3xl font-bold mb-4">Background</h1>

      {/* Desktop: two columns (text + slim portrait). Mobile: stacks. */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 items-start">
        {/* LEFT: verbatim text */}
        <div>
          <p className="mb-6 leading-7">Life Experiences of Dr. Roderick “Rod” MacPherson</p>
          <p className="mb-6 leading-7">My wife and I have lived in Montevallo for 40+ years.</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">MILITARY SERVICE</h2>
          <p className="mb-6 leading-7">
            After the FBI issued a security clearance to me, I joined an isolated battalion in Europe
            armed with 280 mm mobile cannons and nuclear warheads.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">UNIVERSITY STUDIES</h2>
          <p className="mb-6 leading-7">
            At the undergraduate level, I majored in management, and in graduate school (for my MBA &amp; DBA degrees),
            I concentrated on marketing, management, economics, finance, &amp; quantitative methods.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">CORPORATE WORLD</h2>
          <p className="mb-4 leading-7">
            I had various managerial roles at S.S. Kresge (parent company of K-Mart). In my six (6) years with the company,
            I advanced in management each year and became the distribution center manager and company mediator in my late twenties.
          </p>
          <p className="mb-6 leading-7">
            The VP of marketing at the General Instrument Corporation (electronics division) taught me the importance of using
            scientific market research studies to better understand the needs of customers, investigate competitors, and to monitor
            economic conditions in the U.S. and abroad (our manufacturing plants were in West Virginia, Nova Scotia, and South Korea).
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">UNIVERSITY WORLD</h2>
          <p className="mb-6 leading-7">
            After teaching at Mississippi State University, I joined the faculty in the College of Business (COB) at the University
            of Montevallo (UM). With my management and financial background in corporations, the Dean of the COB asked me to help the
            President of UM understand the importance of sound financial practices. I also served on an executive committee as one of
            three advisors to the dean of the COB.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">SMALL BUSINESS</h2>
          <p className="mb-6 leading-7">
            While in graduate school, I was a partner in two small firms (a concrete paving company and one that sold motorcycles
            and muscle cars).
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">STATE GOVERNMENT</h2>
          <p className="mb-6 leading-7">
            As a statistician for the state of Arizona, I helped submit monthly financial charges to the U.S. government for welfare
            services we rendered to the public.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">BUSNESS CONSULTANT</h2>
          <p className="mb-4 leading-7">
            In college, I was taught by professors who served as consultants to corporations, and I worked with consultants at S.S. Kresge.
            I was also privately employed as a consultant. On my last consulting assignment in Alabama, I trained nearly 100 managers to
            better utilize their critical thinking skills.
          </p>
          <p className="mb-6 leading-7">
            At UM, I took small groups of seniors into local businesses to show them exactly how consultants can help business owners improve
            their companies. The students and I analyzed the business operations of local companies and made recommendations to the owners for
            improvement. This collaborative approach was the best real-world experience that I could offer to students who were about to enter
            the business world.
          </p>
        </div>

        {/* RIGHT: portrait — slim column; sticky so it stays in view while reading */}
        <figure className="mt-6 lg:mt-1">
          <div className="relative w-full lg:w-[300px] aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="/images/rod-with-dog.jpg"  // 
              alt=""                              // decorative; keeps page clean for screen readers
              fill
              sizes="(min-width:1024px) 300px, 100vw"
              priority
              className="object-cover"
              aria-hidden="true"
            />
          </div>
          {/* Remove this caption if you want zero text */}
          {/* <figcaption className="text-sm mt-2 opacity-80">Rod Macpherson with his dog Mooc.</figcaption> */}
        </figure>
      </div>
    </div>
  );
}
