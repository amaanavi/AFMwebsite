import { profile, travelPhotos } from "@/data/resume";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Hero from "@/components/Hero";
import InteractiveChessBoard from "@/components/InteractiveChessBoard";
import NavBar from "@/components/NavBar";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsSection from "@/components/SkillsSection";
import TravelGallery from "@/components/TravelGallery";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />

      <AboutSection />

      <section id="projects" className="bg-white py-16 sm:px-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Featured Projects
            </h2>
          </div>
          <ProjectsGrid />
        </div>
      </section>

      <SkillsSection />

      <section className="bg-gray-50 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Play a Game
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Replay five historic master games — click, drag, or use arrow keys.
            </p>
          </div>
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
            <InteractiveChessBoard />
          </div>
        </div>
      </section>

      <ExperienceTimeline />

      <section id="travel" className="bg-white py-16 sm:px-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Travel
            </h2>
          </div>
          <TravelGallery photos={travelPhotos} />
        </div>
      </section>

      <ContactSection />

      <footer className="border-t border-zinc-200 bg-white py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
