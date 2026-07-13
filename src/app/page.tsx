import Link from "next/link";
import { experience, profile } from "@/data/resume";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 font-sans sm:px-0">
      <main className="w-full max-w-3xl py-20">
        <section className="mb-24">
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg italic text-zinc-500">
            {profile.traits.join(" · ")}
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
              Get In Touch
            </a>
          </div>
        </section>

        <section id="about" className="mb-20 scroll-mt-24">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            About
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
            {profile.about}
          </p>
        </section>

        <section id="experience" className="mb-20 scroll-mt-24">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Experience
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            {experience.map((job) => (
              <div key={`${job.org}-${job.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-zinc-900">
                    {job.org}
                  </h3>
                  <span className="text-sm text-zinc-500">{job.period}</span>
                </div>
                <p className="text-sm text-zinc-600">
                  {job.role} · {job.location}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/resume"
            className="mt-6 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4"
          >
            View full resume
          </Link>
        </section>

        <footer className="border-t border-zinc-200 pt-6 text-sm text-zinc-400">
          Built with Next.js & Tailwind CSS
        </footer>
      </main>
    </div>
  );
}
