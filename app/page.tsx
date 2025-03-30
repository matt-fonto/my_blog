import { getPosts } from "@/actions/getPosts";
import { BlogPostCard } from "../components/custom/BlogPostCard";
import { Header } from "../components/custom/Header";
import { Typography } from "@/components/custom/Typography";
import { BookOpen } from "lucide-react";
import { Container } from "@/components/custom/Container";
import { About } from "@/components/custom/About";
import { Contact } from "@/components/custom/Contact";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col bg-primary-foreground">
      <Header
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
      />

      <Container>
        <div className="py-12">
          <Typography variant="h5" className="py-6">
            <BookOpen />
            Featured Posts
          </Typography>

          <div className="grid grid-cols-3 gap-2">
            {posts.slice(0, 3).map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <Separator className="bg-secondary-foreground" />
        <About />
        <Separator className="bg-secondary-foreground" />
        <Contact />
      </Container>
    </div>
  );
}
