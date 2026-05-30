import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="text-[#71717b] text-sm border-t border-zinc-200 flex mt-12 pt-6 pb-8 justify-between items-center">
      <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
      <div className="flex items-center gap-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="size-4 hover:text-zinc-900 transition-colors" />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="size-4 hover:text-zinc-900 transition-colors" />
        </a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <Mail className="size-4 hover:text-zinc-900 transition-colors" />
        </a>
      </div>
    </footer>
  );
}
