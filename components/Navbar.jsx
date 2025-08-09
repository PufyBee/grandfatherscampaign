"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex h-12 items-center gap-6">
      <Link href="/" className={`py-2 ${pathname === "/" ? "font-semibold underline" : "hover:underline"}`}>Home</Link>
      <Link href="/background" className={`py-2 ${pathname.startsWith("/background") ? "font-semibold underline" : "hover:underline"}`}>Background</Link>
      <Link href="/water" className={`py-2 ${pathname.startsWith("/water") ? "font-semibold underline" : "hover:underline"}`}>Water</Link>

      {/* Direct download (no route needed) */}
      <a href="/docs/nix-2019-campaign-and-2020-2025.docx" download className="py-2 hover:underline">
        History
      </a>
    </nav>
  );
}
