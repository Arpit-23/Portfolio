import { Briefcase, Rocket, BookOpen, Code2 } from "lucide-react";
import { Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/index";
import { experiences } from "../../data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  BookOpen,
  Code2,
};

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="flex mb-6 items-center gap-2">
        <Briefcase className="size-5 text-[#2b7fff]" />
        <h2 className="font-bold text-2xl tracking-tight">Work Experience</h2>
      </div>

      {experiences.map((exp) => (
        <Card key={exp.company} className="p-6 gap-4">
          <CardHeader className="p-0 gap-1">
            <div className="flex justify-between items-center">
              <CardTitle className="font-semibold text-lg">
                Software Developer
              </CardTitle>
              <Badge className="rounded-full bg-[#2b7fff]/10 text-[#2b7fff]">
                {exp.overallPeriod}
              </Badge>
            </div>
            <CardDescription className="text-[#71717b] text-sm">
              {exp.company}, {exp.location}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex p-0 flex-col gap-4">
            {exp.roles.map((role) => {
              const Icon = iconMap[role.icon] ?? Briefcase;
              return (
                <div key={role.title} className="flex gap-3">
                  <div className="size-8 shrink-0 rounded-full bg-zinc-100 text-zinc-900 flex mt-1 justify-center items-center">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {role.title}
                      <span className="font-normal text-[#71717b]">
                        {" "}· {role.period}
                      </span>
                    </p>
                    <p className="leading-relaxed text-[#71717b] text-sm mt-1">
                      {role.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
