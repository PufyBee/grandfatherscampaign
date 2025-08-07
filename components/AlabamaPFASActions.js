// app/components/AlabamaPFASActions.js
export default function AlabamaPFASActions() {
  const rows = [
    {
      system: "West Morgan–East Lawrence WSA (Decatur area)",
      action: "Installed GAC in 2016; later settlements to fund filtration upgrades.",
      source: "https://adem.alabama.gov/water/and-polyfluoroalkyl-substances-pfas-drinking-water",
    },
    {
      system: "City of Irondale",
      action: "Purchasing carbon contactors; PFAS removal via GAC project in state plan.",
      source: "https://adem.alabama.gov/sites/default/files/2025-07/2024%20DWSRF%20BIL%20EC%20Intended%20Use%20Plan.pdf",
    },
    {
      system: "City of Florence",
      action: "PFAS treatment pilot testing in state plan.",
      source: "https://adem.alabama.gov/sites/default/files/2025-07/2024%20DWSRF%20BIL%20EC%20Intended%20Use%20Plan.pdf",
    },
    {
      system: "Guin Water Treatment Facility",
      action: "Full-scale GAC installation; PFAS non-detect for 14+ months (engineering report).",
      source: "https://krebseng.com/wp-content/uploads/2023/12/PFAS-Flyer.pdf",
    },
    {
      system: "Birmingham Water Works",
      action: "Monthly PFAS sampling program; committed to meeting EPA PFAS rule.",
      source: "https://www.bwwb.org/node/430",
    },
  ];
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-2">Examples: Alabama systems taking PFAS action</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left border">System/City</th>
              <th className="p-2 text-left border">What they did</th>
              <th className="p-2 text-left border">Source</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.system} className="align-top">
                <td className="p-2 border">{r.system}</td>
                <td className="p-2 border">{r.action}</td>
                <td className="p-2 border">
                  <a className="underline break-words" href={r.source} target="_blank" rel="noreferrer">Link</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs opacity-75 mt-2">
        Note: actions are by utilities/cities; phrased conservatively to match the cited sources.
      </p>
    </div>
  );
}
