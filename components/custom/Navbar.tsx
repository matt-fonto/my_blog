import Image from "next/image";
import Link from "next/link";
import { Typography } from "./Typography";

const links = [
  { href: "/blog/posts", title: "Blog" },
  { href: "/about", title: "About" },
  { href: "/contact", title: "Contact" },
];

export function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_clear.svg"
            alt="Mateus Fontoura"
            width="40"
            height="40"
          />
          <Typography variant="h4" className="text-primary-foreground">
            Strappazzon
          </Typography>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-primary-foreground">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
