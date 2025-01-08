"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'

export default function IdeaValidation() {
  const [idea, setIdea] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleValidation = async () => {
    setIsLoading(true)
    setFeedback(null)

    try {
      const response = await fetch("/api/validate-idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea }),
      })

      if (!response.ok) {
        throw new Error("Failed to validate idea")
      }

      const data = await response.json()
      setFeedback(data.feedback)
    } catch (error) {
      console.error("Error validating idea:", error)
      setFeedback("An error occurred while validating your idea. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Startup Idea Validation</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Describe Your Startup Idea</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Enter your startup idea here..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            rows={5}
            className="mb-4"
          />
          <Button onClick={handleValidation} disabled={isLoading || idea.trim().length === 0}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Validating...
              </>
            ) : (
              "Validate Idea"
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

