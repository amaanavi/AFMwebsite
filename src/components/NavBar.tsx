"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/resume";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: `mailto:${profile.email}`, label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-zinc-50">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 sm:px-0">
        <Link href="/" className="text-sm font-medium text-zinc-900">
          {profile.name}
        </Link>
        <div className="flex items-center gap-6 text-sm text-zinc-600">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  active
                    ? "text-zinc-900 underline underline-offset-4"
                    : "transition-colors hover:text-zinc-900"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
