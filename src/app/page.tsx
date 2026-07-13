import {
  clubsAndAwards,
  education,
  experience,
  interests,
  languages,
  profile,
  skills,
  works,
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

        <section id="interests" className="mb-24 scroll-mt-24">
          <SectionHeading>Interests</SectionHeading>
        </section>

        <section id="works" className="mb-24 scroll-mt-24">
          <SectionHeading>Works</SectionHeading>
          <div className="mt-6 flex flex-col">
            {works.map((work, i) => (
              <div
                key={work.title}
                className={`py-6 ${i !== 0 ? "border-t border-zinc-200" : ""}`}
              >
                <h3 className="text-base font-semibold text-zinc-900">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {work.description}
                </p>
                <a
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-14 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionHeading>Resume</SectionHeading>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-zinc-50 transition-colors hover:bg-zinc-700"
            >
              Download
            </a>
          </div>

          <div id="experience" className="mt-8 scroll-mt-24">
            <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
              <div>
                <h3 className="border-b border-zinc-200 pb-3 text-sm font-semibold uppercase tracking-widest text-zinc-500">
                  Experience
                </h3>
                <div className="flex flex-col">
                  {experience.map((job, i) => (
                    <div
                      key={`${job.org}-${job.period}`}
                      className={`py-6 ${i !== 0 ? "border-t border-zinc-200" : ""}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                        <h4 className="text-base font-semibold text-zinc-900">
                          {job.org}
                        </h4>
                        <span className="shrink-0 rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
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

              <div>
                <h3 className="border-b border-zinc-200 pb-3 text-sm font-semibold uppercase tracking-widest text-zinc-500">
                  Education
                </h3>
                <div className="flex flex-col">
                  {education.map((item, i) => (
                    <div
                      key={item.school}
                      className={`py-6 ${i !== 0 ? "border-t border-zinc-200" : ""}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                        <h4 className="text-base font-semibold text-zinc-900">
                          {item.school}
                        </h4>
                        {item.period && (
                          <span className="shrink-0 rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                            {item.period}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-6 text-zinc-700">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
