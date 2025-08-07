// components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12">
      <p className="mt-2 text-sm">
        Contact:{" "}
        <a
          href="mailto:rod.macpherson@example.com"
          className="text-blue-600 hover:underline"
        >
          rod.macpherson@example.com
        </a>
      </p>
      <p className="mt-2 text-sm">
        © {new Date().getFullYear()} Rod Macpherson for Clean Water
      </p>
    </footer>
  );
}
