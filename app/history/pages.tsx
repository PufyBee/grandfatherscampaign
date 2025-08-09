import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History — Mayor Nix (download) | Montevallo Water Facts",
};

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <h1 className="text-3xl font-bold mb-4">History — Mayor Nix (Download)</h1>
      <p className="mb-6">
        The full history is available as a document prepared by Dr. Rod Macpherson. You can download it below.
      </p>

      <a
        href="/docs/nix-2019-campaign-and-2020-2025.docx"
        download
        className="inline-block rounded-md bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800"
      >
        Download: Nix 2019 Campaign and 2020–2025 Administration (.docx)
      </a>

      <p className="mt-8 text-sm opacity-80">
        Document is provided verbatim. Long-form content is offered as a download by request.
      </p>
    </div>
  );
}
