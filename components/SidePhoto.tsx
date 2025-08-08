"use client";

import Image from "next/image";
import { useState } from "react";

export default function SidePhoto({
  src,
  alt,
  height = 420,
  showPlaceholder = true,
}: {
  src?: string;
  alt: string;
  height?: number;
  showPlaceholder?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  // If we have no real image and we don't want placeholders, render nothing
  if ((!src || failed) && !showPlaceholder) return null;

  // Only render at 2xl and up so the center text isn't cramped
  return (
    <aside className="hidden 2xl:block sticky top-20 self-start">
      {src && !failed ? (
        <Image
          src={src}
          alt={alt}
          width={240}
          height={height}
          priority
          className="rounded-xl object-cover w-[240px] h-auto"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="w-[240px] rounded-xl border-2 border-dashed text-gray-500 grid place-content-center"
          style={{ height }}
          aria-label="Photo placeholder"
        >
          <span className="px-3 text-center">Photo coming soon</span>
        </div>
      )}
    </aside>
  );
}
