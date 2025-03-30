import Image from "next/image";
import { SearchInput } from "./SearchInput";
import { Typography } from "./Typography";
import { AUTHOR_NAME, LOGO_BRIGHT } from "@/lib/config";

export function Header({
  isBlogPage = false,
  title,
  description,
}: {
  isBlogPage?: boolean;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative w-full min-h-[50vh] overflow-hidden">
      <Image src="/bg.jpg" alt="" fill className="object-cover z-0" />

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="relative z-20 flex flex-col items-center gap-6 h-full min-h-[50vh] justify-center">
        <Image src={LOGO_BRIGHT} alt={AUTHOR_NAME} width="40" height="40" />

        <div className="flex flex-col items-center text-center max-w-2xl gap-4 py-6">
          <Typography variant="h1" className="text-primary-foreground">
            {title}
          </Typography>

          <Typography variant="h3" className="text-primary-foreground">
            {description}
          </Typography>
        </div>

        {isBlogPage ? (
          <SearchInput />
        ) : (
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-md border border-primary focus:outline-none text-gray-300 bg-background/50 backdrop-blur"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
