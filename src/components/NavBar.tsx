import { profile } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#interests", label: "Interests" },
  { href: "#works", label: "Works" },
  { href: "#resume", label: "Resume" },
];

export default function NavBar() {
  return (
    <header className="border-b border-zinc-200 bg-zinc-50">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 sm:px-0">
        <a href="#" className="text-sm font-medium text-zinc-900">
          {profile.name}
        </a>
        <div className="flex items-center gap-6 text-sm text-zinc-600">
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
      </nav>
    </header>
  );
}
