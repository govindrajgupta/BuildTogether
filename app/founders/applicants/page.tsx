"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// This would typically come from a database
const applicants = [
  {
    id: 1,
    name: "Jane Doe",
    skills: ["React", "Node.js", "Python"],
    github: "https://github.com/janedoe",
    compensation: "Equity + competitive salary",
    whatsapp: "+1234567890",
  },
  {
    id: 2,
    name: "John Smith",
    skills: ["Flutter", "Firebase", "Machine Learning"],
    github: "https://github.com/johnsmith",
    compensation: "Significant equity stake",
    whatsapp: "+0987654321",
  },
]

export default function ApplicantsList() {
  const [revealedWhatsApp, setRevealedWhatsApp] = useState<{ [key: number]: boolean }>({})

  const handleReveal = (id: number) => {
    setRevealedWhatsApp(prev => ({ ...prev, [id]: true }))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Applicants for Your Startup</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {applicants.map((dev) => (
          <Card key={dev.id}>
            <CardHeader>
              <CardTitle>{dev.name}</CardTitle>
              <CardDescription>
                <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  GitHub Profile
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                {dev.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
              <p><strong>Compensation:</strong> {dev.compensation}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>View Application</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{dev.name}'s Application</DialogTitle>
                    <DialogDescription>Review the developer's application and decide if you want to reveal their contact information.</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <h3 className="font-semibold mb-2">Skills:</h3>
                    <div className="mb-4">
                      {dev.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-semibold mb-2">Compensation Expectations:</h3>
                    <p className="mb-4">{dev.compensation}</p>
                    <h3 className="font-semibold mb-2">WhatsApp Number:</h3>
                    {revealedWhatsApp[dev.id] ? (
                      <p>{dev.whatsapp}</p>
                    ) : (
                      <Button onClick={() => handleReveal(dev.id)}>Reveal WhatsApp Number</Button>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

