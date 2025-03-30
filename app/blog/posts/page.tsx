import { getPosts } from "@/actions/getPosts";
import { BlogPostCard } from "@/components/custom/BlogPostCard";
import { Container } from "@/components/custom/Container";
import { Header } from "@/components/custom/Header";
import { Pagination } from "@/components/custom/Pagination";
import { Typography } from "@/components/custom/Typography";
import { BookOpen } from "lucide-react";

type BlogPostPageParams = {
  searchParams: {
    page?: string;
  };
};

export default async function BlogPostsPage({
  searchParams,
}: BlogPostPageParams) {
  const { page } = await searchParams;
  const posts = await getPosts(Number(page));

  return (
    <div>
      <Header
        isBlogPage
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
      />
      <h2>categories</h2>

      <Container>
        <div className="py-10">
          <Typography variant="h5" className="py-6">
            <BookOpen />
            Featured Posts
          </Typography>

          <div className="grid grid-cols-3 gap-2">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Container>

      <Pagination page={Number(page)} totalPages={3} />
    </div>
  );
}
