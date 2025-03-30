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
  const page = Number(searchParams.page);
  const posts = await getPosts(page);

  return (
    <div>
      <h2>blog</h2>
      <h2>breadcrumb</h2>

      <Header
        isBlogPage
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
      />
      <h2>search bar</h2>
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

      <Pagination page={page} totalPages={3} />
    </div>
  );
}
