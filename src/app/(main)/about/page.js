import { FeatureCards } from "@/components/About/FeatureCards/FeatureCards";
import { HeroBanner } from "@/components/About/Hero/Hero";
import { ImpactStats } from "@/components/About/impactStats/impactStats";
import { Partners } from "@/components/About/partners/partners";
import { Team } from "@/components/About/Team/team";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <FeatureCards />
      <ImpactStats />
      <Partners />
      <Team />
    </main>
  );
}
