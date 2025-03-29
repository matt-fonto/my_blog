import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "../../types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import image from "@/public/template_img.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "./Typography";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="w-full max-w-sm border-none shadow-sm p-0 bg-primary-foreground">
      <div className="relative h-48 w-full rounded-t-md overflow-hidden">
        <Image src={image} alt={post.title} fill className="object-cover" />
        <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground hover:bg-secondary">
          Tag
        </Badge>
      </div>

      <CardContent className="flex flex-col gap-2 mb-6">
        <Typography variant="span">Dec. 23, 2025</Typography>

        <Typography variant="h4">{post.title}</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus voluptatum. Quisquam, voluptatibus voluptatum. Quisquam,
          voluptatibus voluptatum.
        </Typography>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={image.src ?? ""} />
              <AvatarFallback>Mateus</AvatarFallback>
            </Avatar>

            <Typography variant="span" className="text-primary font-bold">
              Author name
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
