"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const mentors = [
  {
    id: 1,
    name: "Sarah Thompson",
    expertise: ["Product Management", "Scaling Startups", "Fundraising"],
    experience: "Former VP of Product at TechGiant, Angel Investor",
  },
  {
    id: 2,
    name: "Michael Chen",
    expertise: ["Software Architecture", "AI/ML", "Tech Strategy"],
    experience: "CTO of AI Innovations, 20+ years in tech leadership",
  },
  // Add more mentors
]

export default function MentorshipProgram() {
  const [selectedMentor, setSelectedMentor] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mentorship Program</h1>
      <p className="text-xl mb-8">Connect with experienced mentors to guide you on your startup journey.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <Card key={mentor.id}>
            <CardHeader>
              <CardTitle>{mentor.name}</CardTitle>
              <CardDescription>{mentor.experience}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Expertise:</h3>
              {mentor.expertise.map((skill) => (
                <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                  {skill}
                </Badge>
              ))}
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full" onClick={() => setSelectedMentor(mentor)}>Request Mentorship</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Mentorship from {selectedMentor?.name}</DialogTitle>
                    <DialogDescription>
                      Explain why you'd like to connect with this mentor and what you hope to learn.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="message">Your message</Label>
                      <Textarea
                        id="message"
                        placeholder="I'm working on a startup that... I'd love your guidance on..."
                      />
                    </div>
                    <Button className="w-full">Send Request</Button>
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

