"use client";

import { useState } from "react";
import { travelPhotos, works } from "@/data/resume";
import InteractiveChessBoard from "@/components/InteractiveChessBoard";

const tabs = ["Travel", "Works", "Hobbies"] as const;
type Tab = (typeof tabs)[number];

export default function InterestsTabs() {
  const [active, setActive] = useState<Tab>("Travel");

  return (
    <div className="mt-8">
      <div className="flex gap-6 border-b border-zinc-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`-mb-px border-b-2 pb-3 text-sm font-medium transition-colors ${
              active === tab
                ? "border-white text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {active === "Travel" && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {travelPhotos.map((photo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="aspect-square w-full rounded-lg object-cover"
              />
            ))}
          </div>
        )}

        {active === "Works" && (
          <div className="flex flex-col">
            {works.map((work, i) => (
              <div
                key={work.title}
                className={`py-6 ${i !== 0 ? "border-t border-zinc-800" : ""}`}
              >
                <h3 className="text-base font-semibold text-zinc-50">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {work.description}
                </p>
                <a
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-zinc-50 underline underline-offset-4"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        )}

        {active === "Hobbies" && <InteractiveChessBoard />}
      </div>
    </div>
  );
}
