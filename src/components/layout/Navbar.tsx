import { Home, User, Briefcase, Code, Zap, Mail } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

const navLinks = [
  { label: "Home",       href: "#home",       icon: Home },
  { label: "About",      href: "#about",      icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects",   href: "#projects",   icon: Code },
  { label: "Skills",     href: "#skills",     icon: Zap },
  { label: "Contact",    href: "#contact",    icon: Mail },
];

export default function Navbar() {
  return (
    <header className="sticky z-20 bg-white border-b border-zinc-200 top-0 w-full">
      <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative size-10 bg-[linear-gradient(135deg,oklch(0.623_0.214_259.815),oklch(0.546_0.214_259.815))] shadow-md ring-1 ring-primary/30 rounded-xl flex justify-center items-center">
            <span className="font-bold text-blue-50 text-sm tracking-tight">
              {personalInfo.initials}
            </span>
            <span className="size-3 ring-2 ring-background rounded-full bg-[#2b7fff] absolute -right-0.5 -bottom-0.5" />
          </div>
          <div className="leading-none flex flex-col">
            <span className="font-semibold text-base tracking-tight">
              {personalInfo.name}
            </span>
            <span className="font-medium uppercase text-[#71717b] text-[11px] tracking-wider">
              {personalInfo.title}
            </span>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="font-medium rounded-lg text-[#71717b] text-sm flex px-3 py-2 items-center gap-2 hover:text-zinc-900 transition-colors"
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
