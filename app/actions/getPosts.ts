"use server";

import { BlogPost } from "../types";

export async function getPosts(): Promise<BlogPost[]> {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();

  return posts;
}
