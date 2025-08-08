"use client";

import Image from "next/image";
import { useState } from "react";

export default function SidePhoto({
  src,
  alt,
  height = 420,
}: {
  src?: string;
  alt: string;
  height?: number;
}) {
  const [failed, setFailed] = useState(false);

  // Show placeholder if no src or the image fails to load
  if (!src || failed) {
    return (
      <aside className="hidden lg:block sticky top-20 self-start">
        <div
          className="w-[280px] rounded-xl border-2 border-dashed text-gray-500 grid place-content-center"
          style={{ height }}
          aria-label="Photo placeholder"
        >
          <span className="px-3 text-center">Photo coming soon</span>
        </div>
      </aside>
    );
  }

  return (
    <aside className="hidden lg:block sticky top-20 self-start">
      <Image
        src={src}
        alt={alt}
        width={280}
        height={height}
        priority
        className="rounded-xl object-cover w-[280px] h-auto"
        onError={() => setFailed(true)}
      />
    </aside>
  );
}
