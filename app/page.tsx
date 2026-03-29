import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { ServicesCards } from "@/components/ServicesCards";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      <HeroCarousel />
      <AboutSection />
      <ServicesCards />
       <WhyChooseUs />
         {/*<MissionVisionValues />
        <StatsSection />
        <BrochureDownload />
        <ServiceTypes /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
