import Image from "next/image";
import Link from "next/link";
import { Typography } from "./Typography";
import { AUTHOR_NAME, BRAND_NAME, LOGO_BRIGHT } from "@/lib/config";

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
          <Image src={LOGO_BRIGHT} alt={AUTHOR_NAME} width="40" height="40" />
          <Typography variant="h4" className="text-primary-foreground">
            {BRAND_NAME}
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
