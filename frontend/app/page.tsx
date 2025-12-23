"use client";

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import CuratedContent from "../components/CuratedContent";
import HighLevelRepurposing from "../components/HighLevelRepurposing";
import TrailersLongForm from "../components/TrailersLongForm";
import ProblemsWeSolve from "../components/ProblemsWesolve";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navigation />
      <HeroSection />
      <CuratedContent />
      <HighLevelRepurposing />
      <TrailersLongForm />
      <ProblemsWeSolve />
    </div>
  );
}
