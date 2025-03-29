"use server";

import { DEFAULT_NUM_POSTS_PER_PAGE } from "@/lib/config";
import { BlogPost } from "../types";

export async function getPosts(
  page = 1,
  limit = DEFAULT_NUM_POSTS_PER_PAGE
): Promise<BlogPost[]> {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const posts = await result.json();

  return posts;
}
