"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/background", label: "Background" },
  { href: "/water", label: "Water" },
  { href: "/history", label: "History" }, 
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex h-12 items-center gap-6">
      {links.map(({ href, label }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className={`py-2 ${active ? "font-semibold underline" : "hover:underline"}`}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
