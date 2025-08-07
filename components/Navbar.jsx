"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/issues", label: "Issues" },
  { href: "/records", label: "Records" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-blue-800 text-white">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold tracking-wide">
            Dr. Macpherson
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-md px-2 py-1 hover:underline ${isActive(href) ? "bg-blue-700" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {open && (
          <ul className="space-y-1 pb-3 lg:hidden">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 ${
                    isActive(href) ? "bg-blue-700" : "hover:bg-blue-700/60"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div className="h-px bg-blue-700" />
    </header>
  );
}
