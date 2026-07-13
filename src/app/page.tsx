import {
  clubsAndAwards,
  education,
  experience,
  interests,
  languages,
  profile,
  skills,
} from "@/data/resume";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
      {children}
    </h2>
  );
}

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
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
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
        </section>

        <section id="about" className="mb-24 scroll-mt-24">
          <SectionHeading>About</SectionHeading>
        </section>

        <section id="experience" className="mb-24 scroll-mt-24">
          <SectionHeading>Experience</SectionHeading>
        </section>

        <section id="interests" className="mb-24 scroll-mt-24">
          <SectionHeading>Interests</SectionHeading>
        </section>

        <section id="resume" className="mb-14 scroll-mt-24">
          <SectionHeading>Resume</SectionHeading>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Experience
            </h3>
            <div className="mt-6 flex flex-col gap-10">
              {experience.map((job) => (
                <div key={`${job.org}-${job.period}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-base font-semibold text-zinc-900">
                      {job.org}
                    </h4>
                    <span className="text-sm text-zinc-500">
                      {job.period}
                    </span>
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
          </div>

          <div className="mt-14">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Education
            </h3>
            <div className="mt-6 flex flex-col gap-5">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                >
                  <div>
                    <h4 className="text-base font-semibold text-zinc-900">
                      {item.school}
                    </h4>
                    <p className="text-sm text-zinc-600">{item.detail}</p>
                  </div>
                  {item.period && (
                    <span className="text-sm text-zinc-500">
                      {item.period}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Skills & Interests
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">
                  Skills
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">
                  Languages
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  {languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">
                  Clubs & Awards
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  {clubsAndAwards.map((club) => (
                    <li key={club}>{club}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">
                  Hobbies & Interests
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                  {interests.map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-200 pt-6 text-sm text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </div>
  );
}
