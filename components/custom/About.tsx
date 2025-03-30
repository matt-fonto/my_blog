import { Code } from "lucide-react";
import { Typography } from "./Typography";
import { SKILLS } from "@/lib/config";

export function About() {
  return (
    <section className="py-12">
      <Typography variant="h5" className="py-6">
        <Code />
        Skills
      </Typography>

      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.title}>
            <Typography variant="h5" className="py-2">
              {group.title}
            </Typography>

            <ul className="flex flex-wrap gap-2 text-sm">
              {group.skills.map((skill) => (
                <li
                  key={skill.title}
                  className="px-2 py-1 rounded bg-secondary-foreground text-accent-foreground"
                >
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
