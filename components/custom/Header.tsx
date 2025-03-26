// import Image from "next/image";
import { Icon } from "./Icon";

export function Header() {
  return (
    <div className="flex flex-col items-center text-center gap-6 min-h-[50vh] justify-center bg-primary">
      {/* <Image
        src="/logo.svg" // replace with your image path
        alt="Mateus Fontoura"
        width="40"
        height="40"
        fill="white"
        className=""
      /> */}

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
          className="flex-1 px-4 py-2 rounded-l-md border border-accent focus:outline-none text-gray-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-accent text-primary-foreground font-medium rounded-r-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
