// import { Ajout_post } from '@/api/Ajout_post'
import About from "../Components/About";
import "./globals.css";
import AchievementSection from "../Components/AchievementSection";
import EmailSection from "../Components/EmailSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import ProjectsSection from "../Components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-5 py-4 mt-24">
        <HeroSection />
        <AchievementSection />
        <About />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
