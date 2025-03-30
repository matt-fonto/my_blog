import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  AUTHOR_NAME,
  BRAND_DESCRIPTION,
  BRAND_NAME,
  LOGO_BRIGHT,
} from "@/lib/config";
import { Typography } from "./Typography";

export function Footer() {
  return (
    <footer className="w-full border-t py-10 px-4 md:px-10 text-sm bg-background text-foreground">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Image src={LOGO_BRIGHT} alt={AUTHOR_NAME} width="40" height="40" />
            <Typography variant="h5" className="text-primary-foreground">
              {BRAND_NAME}
            </Typography>
          </div>

          <Typography variant="span" className="text-primary-foreground">
            {BRAND_DESCRIPTION}
          </Typography>

          <Typography variant="span" className="text-primary-foreground">
            © {new Date().getFullYear()} {BRAND_NAME}.
          </Typography>
        </div>

        {/* Middle: Links */}
        <div className="flex flex-col gap-2 font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/posts" className="hover:underline">
            Posts
          </Link>
          <Link href="/authors" className="hover:underline">
            Authors
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <form className="flex">
            <Input placeholder="Enter Your Email" className="rounded-r-none" />
            <Button className="rounded-l-none bg-secondary text-black">
              Subscribe
            </Button>
          </form>

          <div className="flex gap-4 items-center flex-wrap">
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
            <Link href="#" className="underline">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
