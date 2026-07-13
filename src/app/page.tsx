import Link from "next/link";
import { highlights, profile } from "@/data/resume";

export default function Home() {
  return (
    <div className="relative flex flex-1 justify-center overflow-hidden bg-zinc-50 px-6 font-sans sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.14),_transparent_65%)]"
      />

      <main className="flex w-full max-w-3xl flex-col py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
          {profile.location}
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-xl text-xl leading-8 text-zinc-600">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/resume"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700"
          >
            View Resume
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
          >
            Email Me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/[0.02]"
            >
              <h2 className="text-base font-semibold text-zinc-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-24 border-t border-zinc-200 pt-6 text-sm text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </div>
  );
}
