"use client";

import { ChevronDown, FileText, Mail } from "lucide-react";
import { profile } from "@/data/resume";
import Typewriter from "@/components/Typewriter";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/travel/travel-13.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            {profile.name.split(" ")[0]} {profile.name.split(" ").at(-1)}
          </span>
        </h1>

        <p className="mt-6 h-8 text-xl font-semibold text-white sm:text-2xl">
          Building <Typewriter
            words={[
              "AI products",
              "quant trading models",
              "legal-tech startups",
              "investment theses",
            ]}
          />
        </p>

        <p className="mt-3 text-base text-gray-100">
          University of Toronto • Interplay
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="transform rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-2xl transition-colors duration-200 hover:-translate-y-1 hover:bg-purple-700"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border-2 border-white bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-purple-600"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5 text-white">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-3 transition-colors duration-200 hover:bg-white/20 hover:text-purple-300"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full p-3 transition-colors duration-200 hover:bg-white/20 hover:text-purple-300"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            aria-label="Download resume"
            className="rounded-full p-3 transition-colors duration-200 hover:bg-white/20 hover:text-purple-300"
          >
            <FileText className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 z-10 text-white/70 transition-colors hover:text-white"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
