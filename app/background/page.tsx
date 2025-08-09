import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Background | Montevallo Water Facts",
};

export default function BackgroundPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      {/* 3-col canvas on xl+: [gutter | centered content | gutter] */}
      <div className="xl:grid xl:grid-cols-[1fr_minmax(0,48rem)_1fr] xl:gap-8">

        {/* H1 sits in the same centered column as the article to align edges */}
        <h1 className="text-3xl font-bold mb-4 xl:col-start-2 mx-auto max-w-3xl">Background</h1>

        {/* MOBILE/TABLET portrait (stacks) */}
        <figure className="mb-6 xl:hidden">
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="/images/rod-with-dog.webp"  // change to .jpg if that's what you saved
              alt=""                             // decorative
              fill
              sizes="100vw"
              priority
              className="object-cover"
              aria-hidden="true"
            />
          </div>
        </figure>

        {/* CENTERED TEXT */}
        <article className="mx-auto max-w-3xl xl:col-start-2">
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
        </article>

        {/* RIGHT GUTTER IMAGE (desktop only) */}
        <figure className="hidden xl:block xl:col-start-3 justify-self-start">
          <div className="relative w-[300px] aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="/images/rod-with-dog.jpg"
              alt=""
              fill
              sizes="300px"
              className="object-cover"
              aria-hidden="true"
            />
          </div>
        </figure>
      </div>
    </div>
  );
}
