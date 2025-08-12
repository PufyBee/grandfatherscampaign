import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";


export const metadata: Metadata = {
  title: "Montevallo Water Facts",
  description: "Paid political advertisement by Dr. Rod Macpherson",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="py-8">{children}</main>
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm opacity-80">
            PAID POLITICAL ADVERTISEMENT BY DR. ROD MACHPERSON, 665 OVERLAND RD.
            MONTEVALLO, AL 35115
          </div>
        </footer>
      </body>
    </html>
  );
}
