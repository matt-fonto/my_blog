import { getPosts } from "@/actions/getPosts";
import { BlogPostCard } from "../components/custom/BlogPostCard";
import { Header } from "../components/custom/Header";
import { Navbar } from "@/components/custom/Navbar";

export default async function Home() {
  const posts = await getPosts();
  // const categories = ["frontend", "backend", "devops", "career", "os"];

  return (
    <div className="min-h-screen flex flex-col bg-primary-foreground">
      <Navbar />

      <Header />

      <div className="max-w-6xl mx-auto">
        {/* Featured */}
        <div>
          <h2>Featured posts</h2>

          <div className="grid grid-cols-3 gap-2">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <h2>All posts: organize per category?</h2>
      </div>
    </div>
  );
}
