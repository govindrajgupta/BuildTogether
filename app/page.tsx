import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import { ArrowRight, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] relative">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-6 text-center">Founder-Developer Connect</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Connect passionate founders with skilled technical co-founders. 
        Build your dream team and bring your startup ideas to life.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <Button asChild size="lg">
          <Link href="/founders/signup">I'm a Founder</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/developers/signup">I'm a Developer</Link>
        </Button>
      </div>
      <div className="bg-muted p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Zap className="mr-2" /> New: AI-Powered Idea Validation
        </h2>
        <p className="mb-4">
          Get instant feedback on your startup idea from our advanced AI advisor. Refine your concept before pitching to potential co-founders.
        </p>
        <Button asChild>
          <Link href="/idea-validation">
            Try Idea Validation <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

