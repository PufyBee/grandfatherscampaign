export const metadata = { title: "Records & Timeline (2019–2025)" };

function Attribution() {
  return <p className="mt-10 text-sm opacity-75">Prepared by <strong>Dr. Rod Macpherson</strong>.</p>;
}

export default function RecordsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-3">Records & Timeline (2019–2025)</h1>
      <p className="mb-6">
        A documented comparison of campaign promises and what followed: PFAS mentions in reports,
        demolition/notice practices, sludge decisions, zoning, runoff/flooding, and more.
      </p>

      <div className="rounded-xl border px-4 py-3 mb-6">
        <h2 className="text-xl font-semibold mb-2">Core accountability question</h2>
        <p>
          Why hasn’t City Hall delivered a dated, funded plan to remove PFAS from finished water,
          when other Alabama systems have already moved to treatment or pilots?
        </p>
      </div>

      <ul className="list-disc ml-6 space-y-1">
        <li><a className="underline" href="/docs/Nix-2019-Campaign-and-2020-2025-Administration.pdf">Campaign vs. Administration (PDF)</a></li>
        <li><a className="underline" href="/docs/Background-Experiences-Mayor-2020-2025.pdf">Background & Events (PDF)</a></li>
      </ul>

      <Attribution />
    </main>
  );
}
