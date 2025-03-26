import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "../types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import image from "../public/template_img.jpg";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="w-full max-w-sm">
      <div className="relative h-48 w-full rounded-t-md overflow-hidden">
        <Image src={image} alt={post.title} fill className="object-cover" />
        <Badge className="absolute top-2 left-2 bg-yellow-400 text-black hover:bg-yellow-400">
          Tag
        </Badge>
      </div>

      <CardContent className="p-4 flex flex-col gap-2">
        <p className="text-xs text-muted-foreground">
          to add date
          {/* {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })} */}
        </p>

        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          Lorem ipsum
        </p>

        <div className="flex items-center justify-between mt-2 bg-primary">
          <div className="flex items-center gap-2">
            <Image
              src={image}
              alt="author"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-sm font-medium">Author name</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
