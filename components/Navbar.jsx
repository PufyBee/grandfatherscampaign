"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Introduction" },
  { href: "/section-2", label: "Russell Nix" },
  { href: "/background", label: "Life Experiences" },
  { href: "/history", label: "History" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-blue-800 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <ul className="flex flex-wrap gap-4 py-3">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className={`px-3 py-1.5 rounded-md ${
                    active ? "bg-white/15" : "hover:bg-white/10"
                  }`}
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
