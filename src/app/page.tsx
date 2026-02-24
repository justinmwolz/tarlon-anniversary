import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PhotoGrid from "@/components/PhotoGrid";
import Highlights from "@/components/Highlights";
import TeammateLove from "@/components/TeammateLove";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <PhotoGrid />
      <Highlights />
      <TeammateLove />
      <Footer />
    </main>
  );
}
