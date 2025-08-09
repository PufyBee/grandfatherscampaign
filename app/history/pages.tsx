import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History — Full Document Download | Montevallo Water Facts",
};

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <h1 className="text-3xl font-bold mb-4">History — Mayor Nix</h1>
      <p className="mb-6">
        This page provides the full, unedited 13-page document prepared by Dr. Rod Macpherson.
      </p>

      <a
        href="/docs/nix-2019-campaign-and-2020-2025.docx"
        download
        className="inline-block rounded-md bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800"
      >
        Download the full history (.docx)
      </a>

      <p className="mt-4 text-sm opacity-80">
        Don’t see the download? Make sure the file exists at <code>/public/docs/nix-2019-campaign-and-2020-2025.docx</code>.
      </p>

      <p className="mt-8 text-sm opacity-80">
        Prepared by Dr. Rod Macpherson. Provided verbatim.
      </p>
    </div>
  );
}
