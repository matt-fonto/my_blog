import Image from "next/image";
import Link from "next/link";
import { Typography } from "./Typography";

export function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Mateus Fontoura" width="40" height="40" />
          <Typography variant="h4" className="text-primary-foreground">
            Strappazzon
          </Typography>
        </div>

        <nav className="flex items-center gap-6 text-sm text-primary-foreground">
          <Link
            href="/about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
