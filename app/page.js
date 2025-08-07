export const metadata = { title: "Clean Water. Clear Answers." };

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-3">Clean Water. Clear Answers.</h1>
      <p className="text-lg mb-6">
        Montevallo families deserve drinking water that’s safe—and accountability when it isn’t.
        This site documents what “forever chemicals” (PFAS) mean for our town and what City Hall
        has—and hasn’t—done. Then it lays out the fixes.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <a href="/issues/forever-chemicals" className="rounded-xl border p-4 hover:shadow">
          <h2 className="text-xl font-semibold">PFAS: What & Why It Matters</h2>
          <p>Who’s most at risk, proof from records, and a plan that actually removes PFAS.</p>
        </a>
        <a href="/records" className="rounded-xl border p-4 hover:shadow">
          <h2 className="text-xl font-semibold">Records & Timeline</h2>
          <p>Promises vs. outcomes (2019–2025), notices missed, sludge decisions, and more.</p>
        </a>
      </div>

      {/* Optional newsletter (set enabled to true to show) */}
      {/* <Newsletter enabled /> */}
    </main>
  );
}
