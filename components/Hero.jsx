import React from 'react';

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}) {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-6">{subtitle}</p>
        {ctaText && (
          <a
            href={ctaLink}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
}
