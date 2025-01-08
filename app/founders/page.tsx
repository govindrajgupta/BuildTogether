import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// This would typically come from a database
const founders = [
  {
    id: 1,
    name: "Alice Green",
    startup: "EcoTrack",
    description: "A mobile app that helps users track and reduce their carbon footprint.",
    skills: ["Product Management", "UX Design", "Environmental Science"],
    lookingFor: ["Full-stack Developer", "Mobile Developer", "Data Scientist"],
  },
  {
    id: 2,
    name: "Bob Johnson",
    startup: "MindfulAI",
    description: "An AI-powered meditation and mindfulness platform.",
    skills: ["Machine Learning", "Psychology", "Business Development"],
    lookingFor: ["Frontend Developer", "UX/UI Designer", "Marketing Specialist"],
  },
  // Add more founders here
]

export default function FoundersList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Visionary Founders</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {founders.map((founder) => (
          <Card key={founder.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{founder.name}</CardTitle>
              <CardDescription>{founder.startup}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{founder.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Skills:</h3>
                {founder.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Looking for:</h3>
                {founder.lookingFor.map((role) => (
                  <Badge key={role} className="mr-2 mb-2">
                    {role}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/founders/${founder.id}`}>View Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

