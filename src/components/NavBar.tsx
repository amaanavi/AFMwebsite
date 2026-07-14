import { profile } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#interests", label: "Interests" },
  { href: "#resume", label: "Resume" },
];

export default function NavBar() {
  return (
    <header className="border-b border-zinc-800 bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <a href="#" className="text-sm font-medium text-zinc-50">
          {profile.name}
        </a>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
