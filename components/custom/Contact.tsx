import { Mail } from "lucide-react";
import { Typography } from "./Typography";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section className="py-16 flex items-center flex-col w-full">
      <Typography variant="h5" className="mb-4">
        <Mail className="mr-2" />
        Contact
      </Typography>

      <form className="max-w-xl w-full space-y-4 flex flex-col">
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" rows={5} required />
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}
