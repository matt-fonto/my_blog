"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  const router = useRouter();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const query = new FormData(e.currentTarget).get("q");

    if (typeof query === "string") {
      router.push(`/blog/posts?query=${encodeURIComponent(query)}`);
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md flex">
      <input
        type="search"
        name="query"
        placeholder="Search blog posts..."
        className="flex-1 px-4 py-2 rounded-l-md border border-primary focus:outline-none text-gray-300 bg-background/50 backdrop-blur"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-r-md"
      >
        <Search />
      </button>
    </form>
  );
}
