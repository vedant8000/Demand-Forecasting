import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { ProblemStatement } from "@/components/problem-statement"
import { SolutionOverview } from "@/components/solution-overview"
import { LiveDashboard } from "@/components/live-dashboard"
import { Results } from "@/components/results"
import { TechnicalDetails } from "@/components/technical-details"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Stats />
      <Features />
      <ProblemStatement />
      <SolutionOverview />
      <LiveDashboard />
      <Results />
      <TechnicalDetails />
    </div>
  )
}
