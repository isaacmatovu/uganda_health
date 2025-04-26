import CallToAction from "@/components/HomePage/CallToAction/CallToAction";
import FeaturesSection from "@/components/HomePage/FeaturesSection/FeaturesSection";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import VideoDemoSection from "@/components/HomePage/VideoDemoSection/VideoDemoSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <VideoDemoSection />
        <CallToAction />
      </main>
    </div>
  );
}
