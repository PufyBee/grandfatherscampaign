import "../styles/globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montevallo Water Facts",
  description: "Plain-language information for Montevallo residents.",
};

const DISCLAIMER =
  "PAID POLITICAL ADVERTISEMENT BY DR. ROD MACPHERSON, 665 OVERLAND RD. MONTEVALLO, AL 35115";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="bg-blue-800 text-white">
          <div className="mx-auto max-w-3xl px-4">
            <Navbar />
          </div>
        </header>

        <main className="mx-auto max-w-screen-2xl px-4 py-10">{children}</main>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-3xl px-4 py-6 text-xs tracking-wide opacity-80">
            {DISCLAIMER}
          </div>
        </footer>
      </body>
    </html>
  );
}
