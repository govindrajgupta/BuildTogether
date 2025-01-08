"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'


interface ValidationResponse {
  feedback: string
  status: 'success' | 'error'
}

export default function IdeaValidation() {
  const [idea, setIdea] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const validateInput = (input: string) => {
    if (input.trim().length < 10) {
      throw new Error("Please provide a more detailed description of your idea (minimum 10 characters).")
    }
    if (input.trim().length > 5000) {
      throw new Error("Idea description is too long (maximum 5000 characters).")
    }
  }

  const handleValidation = async () => {
    setIsLoading(true)
    setFeedback(null)

    try {
      validateInput(idea)

      const response = await fetch("/api/validate-idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea: idea.trim() }),
      })

      const data: ValidationResponse = await response.json()

      if (!response.ok) {
        throw new Error(data.feedback || "Failed to validate idea. Please try again.")
      }

      setFeedback(data.feedback)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred. Please try again."
      console.error("Error validating idea:", error)
      setFeedback(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Startup Idea Validation</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Describe Your Startup Idea</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Enter your startup idea here (minimum 10 characters)..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            rows={5}
            className="mb-4 resize-none"
            maxLength={5000}
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {idea.length}/5000 characters
            </span>
            <Button 
              onClick={handleValidation} 
              disabled={isLoading || idea.trim().length < 10}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Validating...
                </>
              ) : (
                "Validate Idea"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {feedback && (
        <Card>
          <CardHeader>
            <CardTitle>AI Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              <p className="whitespace-pre-wrap">{feedback}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}