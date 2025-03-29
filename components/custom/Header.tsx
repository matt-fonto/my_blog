import Image from "next/image";
import { Icon } from "./Icon";

export function Header() {
  return (
    <div className="relative w-full min-h-[50vh] overflow-hidden">
      {/* Background image */}
      <Image src="/bg.jpg" alt="" fill className="object-cover z-0" />

      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center gap-6 h-full min-h-[50vh] justify-center">
        <Icon className="text-white" />
        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground">
          Lorem ipsum
        </h1>
        <h2 className="text-2xl font-bold text-gray-300 max-w-xl">
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet.
        </h2>

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
      </div>
    </div>
  );
}
