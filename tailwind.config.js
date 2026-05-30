/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/main.tsx",
    "./src/components/layout/Navbar.tsx",
    "./src/components/layout/Footer.tsx",
    "./src/components/sections/HeroSection.tsx",
    "./src/components/sections/StatsSection.tsx",
    "./src/components/sections/ExperienceSection.tsx",
    "./src/components/sections/SkillsSection.tsx",
    "./src/components/sections/ProjectsSection.tsx",
    "./src/components/sections/ContactSection.tsx",
    "./src/components/ui/index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2b7fff",
      },
    },
  },
  plugins: [],
}