import { Zap } from "lucide-react";
import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/index";
import { skills } from "../../data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="flex mb-6 items-center gap-2">
        <Zap className="size-5 text-[#2b7fff]" />
        <h2 className="font-bold text-2xl tracking-tight">Skills</h2>
      </div>

      <Card className="p-6 gap-6">
        {skills.map(({ category, items }) => (
          <CardContent key={category} className="flex p-0 flex-col gap-2">
            <p className="font-semibold text-sm">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge key={skill} className="rounded-full" variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        ))}
      </Card>
    </section>
  );
}
