import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History (Full Document Download) | Montevallo Water Facts",
};

export default function HistoryPage() {
  const docPath = "/docs/nix-2019-campaign-and-2020-2025.docx";
  return (
    <div className="mx-auto max-w-3xl px-4">
      <h1 className="text-3xl font-bold mb-4">History: Mayor Nix</h1>
      <p className="mb-6">
        Download the complete 13-page document prepared by Dr. Rod Macpherson. The file is provided unedited for your review and printing.
      </p>

      <a
        href={docPath}
        download
        className="inline-block rounded-md bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800"
      >
        Download the full history (.docx)
      </a>
    </div>
  );
}
