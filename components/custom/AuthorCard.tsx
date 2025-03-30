import { AUTHOR_NAME } from "@/lib/config";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Typography } from "./Typography";
import image from "@/public/template_img.jpg";

export function AuthorCard() {
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={image.src ?? ""} />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>

        <Typography variant="span" className="text-primary font-bold">
          {AUTHOR_NAME}
        </Typography>
      </div>
    </div>
  );
}
