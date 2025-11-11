"use client"

import Hero3D from "@/components/hero-3d"
import Header from "@/components/header"
import SidebarNav from "@/components/sidebar-nav"
import StatisticsDashboard from "@/components/statistics-dashboard"
import EconomicStats from "@/components/economic-stats"
import ComparisonTool from "@/components/comparison-tool"
import TimelineSection from "@/components/timeline-section"
import HighlightsSection from "@/components/highlights-section"
import InternationalPosition from "@/components/international-position"
import MilitaryStrength from "@/components/military-strength"
import MediaSection from "@/components/media-section"
import QuizGame from "@/components/quiz-game"
import Conclusion from "@/components/conclusion"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero3D />
      <div className="flex">
        <SidebarNav />
        <main className="flex-1">
          <StatisticsDashboard />
          <EconomicStats />
          <ComparisonTool />
          <TimelineSection />
          <HighlightsSection />
          <InternationalPosition />
          <MilitaryStrength />
          <MediaSection />
          <QuizGame />
          <Conclusion />
          <Footer />
        </main>
      </div>
    </div>
  )
}
