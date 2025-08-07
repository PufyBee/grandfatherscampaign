export default function IssuesPage() {
  const cards = [
    {
      title: "Forever Chemicals (PFAS)",
      blurb: "What they are, why they persist, and how we protect Montevallo.",
      href: "/issues/forever-chemicals",
    },
    {
      title: "City Records & Accountability",
      blurb: "Promises vs. outcomes, notices, contracts, and zoning actions.",
      href: "/records/nix-2019-and-admin",
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Issues</h1>
      <ul className="grid gap-6 sm:grid-cols-2">
        {cards.map(c => (
          <li key={c.href} className="border rounded-xl p-6 hover:shadow">
            <h2 className="text-2xl font-semibold mb-2">{c.title}</h2>
            <p className="mb-4">{c.blurb}</p>
            <a className="underline" href={c.href}>Read more</a>
          </li>
        ))}
      </ul>
    </>
  );
}
