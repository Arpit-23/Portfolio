import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  return (
    <div className="bg-white text-zinc-950 min-h-screen">
      <Navbar />

      <main className="max-w-[1140px] mx-auto px-8 py-12">
        <HeroSection />
        <StatsSection />

        {/* Experience + Skills side-by-side */}
        <section className="grid grid-cols-3 mt-12 gap-8">
          <div className="col-span-2">
            <ExperienceSection />
          </div>
          <div>
            <SkillsSection />
          </div>
        </section>

        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
