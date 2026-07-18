import {
  clubsAndAwards,
  education,
  experience,
  interests,
  languages,
  profile,
  skills,
  travelPhotos,
  works,
} from "@/data/resume";
import InteractiveChessBoard from "@/components/InteractiveChessBoard";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
      {children}
    </p>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-white px-6 font-sans sm:px-10">
      <main className="w-full max-w-5xl py-20">
        <section className="mb-28 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-2xl font-semibold text-white">
            {initials(profile.name)}
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Hi, I&apos;m {profile.name.split(" ")[0]} 👋
            </h1>
            <p className="mt-3 max-w-xl text-lg leading-7 text-zinc-600">
              {profile.tagline}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                Say hello
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
              >
                LinkedIn
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mb-24 scroll-mt-24">
          <SectionLabel>About</SectionLabel>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700">
            {profile.about}
          </p>
        </section>

        <section id="work" className="mb-24 scroll-mt-24">
          <SectionLabel>Selected Work</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {works.map((work) => (
              <a
                key={work.title}
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-zinc-900"
              >
                <h3 className="text-base font-semibold text-zinc-900">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {work.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4">
                  Read full report →
                </span>
              </a>
            ))}
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="text-base font-semibold text-zinc-900">
                Play a Master Game
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                A random famous chess game loads below — step through the
                moves yourself, or move the pieces however you like.
              </p>
              <a
                href="#travel"
                className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4"
              >
                Jump to board →
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-24 scroll-mt-24">
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-6 flex flex-col">
            {experience.map((job, i) => (
              <div
                key={`${job.org}-${job.period}`}
                className={`py-6 ${i !== 0 ? "border-t border-zinc-200" : ""}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-zinc-900">
                    {job.org}
                  </h3>
                  <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-500">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-500">
                  {job.role} · {job.location}
                </p>
                {job.bullets.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-zinc-700">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Education
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                {education.map((item) => (
                  <div key={item.school}>
                    <p className="text-sm font-semibold text-zinc-900">
                      {item.school}
                    </p>
                    <p className="text-sm text-zinc-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                My Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Languages
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                {languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Clubs & Awards
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                {clubsAndAwards.map((club) => (
                  <li key={club}>{club}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Interests
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                {interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="travel" className="mb-24 scroll-mt-24">
          <SectionLabel>Travel</SectionLabel>
          <div className="mt-6 columns-2 gap-4 sm:columns-4">
            {travelPhotos.map((photo) => (
              <div key={photo.src} className="relative mb-4 break-inside-avoid">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full rounded-2xl"
                />
                {photo.location && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 rounded-t-2xl bg-gradient-to-b from-black/50 to-transparent p-3">
                    <p className="text-xs font-medium text-white/70">
                      {photo.location}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14">
            <SectionLabel>Hobbies</SectionLabel>
            <div className="mt-6 rounded-2xl border border-zinc-200 p-6">
              <InteractiveChessBoard />
            </div>
          </div>
        </section>

        <section id="resume" className="mb-14 scroll-mt-24">
          <div className="rounded-2xl border border-zinc-200 p-8 text-center">
            <h2 className="text-xl font-semibold text-zinc-900">
              Want the full picture?
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Download my resume for the complete rundown.
            </p>
            <a
              href={profile.resumeUrl}
              download
              className="mt-5 inline-block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Download Resume
            </a>
          </div>
        </section>

        <footer className="border-t border-zinc-200 pt-6 text-sm text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </div>
  );
}
