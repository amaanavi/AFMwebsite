"use client";

import { useEffect, useState } from "react";

type Photo = { src: string; alt: string; location?: string };

export default function TravelGallery({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") {
        setSelected((i) => (i === null ? i : (i + 1) % photos.length));
      }
      if (e.key === "ArrowLeft") {
        setSelected((i) =>
          i === null ? i : (i - 1 + photos.length) % photos.length,
        );
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, photos.length]);

  const current = selected === null ? null : photos[selected];

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setSelected(i)}
            className="relative mb-4 block w-full cursor-zoom-in break-inside-avoid"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={photo.alt} className="w-full rounded-2xl" />
            {photo.location && (
              <div className="pointer-events-none absolute inset-x-0 top-0 rounded-t-2xl bg-gradient-to-b from-black/50 to-transparent p-3">
                <p className="text-xs font-medium text-white/70">
                  {photo.location}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full border border-white/30 p-2 text-white/80 transition-colors hover:border-white hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((i) =>
                i === null ? i : (i - 1 + photos.length) % photos.length,
              );
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 p-2 text-white/80 transition-colors hover:border-white hover:text-white sm:left-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((i) => (i === null ? i : (i + 1) % photos.length));
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 p-2 text-white/80 transition-colors hover:border-white hover:text-white sm:right-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div
            className="flex max-h-full max-w-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
            {current.location && (
              <p className="mt-4 text-sm font-medium text-white/80">
                {current.location}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
