"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <ul className="flex space-x-4 container mx-auto">
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/issues"><a>Issues</a></Link>
        </li>
        <li>
          <Link href="/contact"><a>Contact</a></Link>
        </li>
      </ul>
    </nav>
  )
}
