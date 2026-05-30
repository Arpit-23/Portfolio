import { Code, ExternalLink, Github } from "lucide-react";
import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/index";
import { projects } from "../../data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-12">
      <div className="flex mb-6 items-center gap-2">
        <Code className="size-5 text-[#2b7fff]" />
        <h2 className="font-bold text-2xl tracking-tight">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="p-0 gap-0 overflow-hidden">
            <div className="w-full h-44 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <CardHeader className="p-0 gap-1">
                <div className="flex justify-between items-center">
                  <CardTitle className="font-semibold text-lg">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="size-4 text-[#71717b] hover:text-zinc-900 transition-colors" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-4 text-[#2b7fff]" />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="text-[#71717b] text-sm">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-3 p-0">
                <p className="leading-relaxed text-[#71717b] text-sm">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="mt-4 p-0 gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="rounded-full" variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
