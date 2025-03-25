import { getPosts } from "./actions/getPosts";
import { BlogPostCard } from "./components/BlogPostCard";
import { Header } from "./components/Header";

export default async function Home() {
  const posts = await getPosts();
  // const categories = ["frontend", "backend", "devops", "career", "os"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Featured */}
      <div>
        <h2>Featured posts</h2>

        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      <h2>All posts: organize per category?</h2>
    </div>
  );
}
