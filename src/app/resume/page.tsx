import {
  clubsAndAwards,
  education,
  experience,
  interests,
  languages,
  profile,
  skills,
} from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Alexander Maanavi",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-16 font-sans sm:px-10">
      <main className="w-full max-w-3xl">
        <header className="mb-16">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
            {profile.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg leading-7 text-zinc-600">
            {profile.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
            <span>{profile.location}</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-zinc-700 underline underline-offset-2 hover:text-zinc-900"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 underline underline-offset-2 hover:text-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-14">
          <SectionHeading>Experience</SectionHeading>
          <div className="mt-6 flex flex-col gap-10">
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
        </section>

        <section className="mb-14">
          <SectionHeading>Education</SectionHeading>
          <div className="mt-6 flex flex-col gap-5">
            {education.map((item) => (
              <div
                key={item.school}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
              >
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {item.school}
                  </h3>
                  <p className="text-sm text-zinc-600">{item.detail}</p>
                </div>
                {item.period && (
                  <span className="text-sm text-zinc-500">{item.period}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading>Skills & Interests</SectionHeading>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Skills</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                {skills.join(", ")}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                Languages
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                {languages.join(", ")}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                Clubs & Awards
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                {clubsAndAwards.join(", ")}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                Hobbies & Interests
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                {interests.join(", ")}
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-zinc-200 pt-6 text-sm text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </div>
  );
}
