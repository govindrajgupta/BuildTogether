"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'

export default function PitchPractice() {
  const [pitch, setPitch] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePitchAnalysis = async () => {
    setIsLoading(true)
    setFeedback(null)

    try {
      const response = await fetch("/api/analyze-pitch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pitch }),
      })

      if (!response.ok) {
        throw new Error("Failed to analyze pitch")
      }

      const data = await response.json()
      setFeedback(data.feedback)
    } catch (error) {
      console.error("Error analyzing pitch:", error)
      setFeedback("An error occurred while analyzing your pitch. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Startup Pitch Practice</h1>
      <p className="text-xl mb-8">Refine your pitch with AI-powered feedback.</p>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Elevator Pitch</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Enter your startup's elevator pitch here..."
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            rows={5}
            className="mb-4"
          />
          <Button onClick={handlePitchAnalysis} disabled={isLoading || pitch.trim().length === 0}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Pitch"
            )}
          </Button>
        </CardContent>
      </Card>

      {feedback && (
        <Card>
          <CardHeader>
            <CardTitle>AI Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert">
              <p>{feedback}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

