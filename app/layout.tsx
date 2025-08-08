import "../styles/globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montevallo Water Facts",
  description: "Plain-language PFAS information for Montevallo residents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="bg-blue-800 text-white">
          <div className="mx-auto max-w-3xl px-4">
            <Navbar />
          </div>
        </header>

        {/* wide, centered canvas so Home can breathe; inner pages will add their own max-width */}
        <main className="mx-auto max-w-screen-2xl px-4 py-10">{children}</main>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-3xl px-4 py-6 text-sm opacity-80">
            Prepared by <strong>Dr. Rod Macpherson</strong>. This site summarizes public records and observations in clear, accessible language.
          </div>
        </footer>
      </body>
    </html>
  );
}
