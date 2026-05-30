import { Circle, Mail, Download, Github, Linkedin } from "lucide-react";
import { Badge, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/index";
import { personalInfo } from "../../data/portfolio";

export default function HeroSection() {
  return (
    <section id="home" className="max-w-3xl">
      <Badge className="rounded-full bg-zinc-100 text-zinc-900 mb-4">
        <Circle className="size-2 fill-primary text-[#2b7fff] mr-1" />
        {personalInfo.tagline}
      </Badge>

      <h1 className="font-bold text-5xl tracking-tight leading-tight">
        Hi, I'm {personalInfo.name}
      </h1>

      <p className="font-semibold text-[#2b7fff] text-2xl leading-8 mt-2">
        {personalInfo.headline}
      </p>

      <p className="max-w-2xl leading-relaxed text-[#71717b] text-base mt-4">
        {personalInfo.bio}
      </p>

      <div className="flex mt-8 items-center gap-4">
        <a href={`mailto:${personalInfo.email}`}>
          <Button className="bg-[#2b7fff] text-blue-50">
            <Mail className="size-4 mr-2" />
            Get in touch
          </Button>
        </a>

        <a href={personalInfo.cvUrl} download>
          <Button variant="outline">
            <Download className="size-4 mr-2" />
            Download CV
          </Button>
        </a>

        <div className="flex ml-2 items-center gap-2">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            <Button className="text-[#71717b]" size="icon" variant="ghost" aria-label="GitHub">
              <Github className="size-5" />
            </Button>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <Button className="text-[#71717b]" size="icon" variant="ghost" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
