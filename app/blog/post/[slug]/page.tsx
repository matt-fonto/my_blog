import { getPost } from "@/actions/getPosts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Typography } from "@/components/custom/Typography";
import { BRAND_NAME } from "@/lib/config";
import { AuthorCard } from "@/components/custom/AuthorCard";

type PostPageParams = {
  params: { slug: string };
};

export default async function PostPage({ params }: PostPageParams) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post?.id) {
    return notFound();
  }

  return (
    <article className="max-w-6xl mx-auto py-16 px-4 space-y-6 min-h-screen flex flex-col">
      <nav className="text-sm font-semibold text-primary mb-2 py-4 flex gap-2">
        <Link href="/" className="hover:underline">
          {BRAND_NAME}
        </Link>
        {" / "}
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        {" / "}

        <Typography variant="span" className="text-primary">
          {post.title}
        </Typography>
      </nav>

      <Typography variant="h1" className="text-balance">
        {post.title}
      </Typography>

      <Typography variant="h3" className="text-xl text-muted-foreground">
        Lorem Ipsum dolor sit amet
      </Typography>

      <AuthorCard />
    </article>
  );
}
