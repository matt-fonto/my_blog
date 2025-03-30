"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Input } from "../ui/input";

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
    <form onSubmit={handleSearch} className="w-full max-w-md">
      <Input
        type="search"
        name="query"
        placeholder="search blog posts..."
        className="bg-background/60 backdrop-blur border border-border text-foreground"
      />
    </form>
  );
}
