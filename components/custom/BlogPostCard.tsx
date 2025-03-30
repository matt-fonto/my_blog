import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "../../types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import image from "@/public/template_img.jpg";
import { Typography } from "./Typography";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="w-full max-w-sm border-none shadow-sm p-0 bg-primary-foreground flex flex-col items-center">
      <div className="relative h-48 w-full rounded-t-md overflow-hidden">
        <Image src={image} alt={post.title} fill className="object-cover" />
        <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground hover:bg-secondary">
          Tag
        </Badge>
      </div>

      <CardContent className="flex flex-col gap-2 mb-6 justify-between  h-[50%]">
        <Link href={`blog/post/${String(post.id)}`}>
          <Typography variant="h4">{post.title}</Typography>
        </Link>
        <Typography variant="span">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus voluptatum. Quisquam, voluptatibus voluptatum. Quisquam,
          voluptatibus voluptatum.
        </Typography>

        <div className="flex items-center justify-between mt-2">
          <Typography variant="span">
            <Clock size={18} />4 min.
          </Typography>

          <Typography variant="span" className="text-card">
            <Calendar size={18} />
            Dec. 23, 2025
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
