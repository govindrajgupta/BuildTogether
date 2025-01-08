import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database
const developers = [
  {
    id: 1,
    name: "Jane Doe",
    skills: ["React", "Node.js", "Python"],
    github: "https://github.com/janedoe",
    compensation: "Equity + competitive salary",
  },
  {
    id: 2,
    name: "John Smith",
    skills: ["Flutter", "Firebase", "Machine Learning"],
    github: "https://github.com/johnsmith",
    compensation: "Significant equity stake",
  },
  // Add more developers here
]

export default function DeveloperList() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Available Developers</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {developers.map((dev) => (
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
              <Button>Contact Developer</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

