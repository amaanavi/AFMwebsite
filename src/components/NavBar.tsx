import { profile } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#travel", label: "Travel" },
  { href: "#resume", label: "Resume" },
];

export default function NavBar() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#" className="text-sm font-semibold text-zinc-900">
          {profile.name}
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-sm text-zinc-500 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-zinc-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="h-5 w-5"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-zinc-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3v5.8h-4V9Z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
