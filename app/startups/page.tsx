import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// This would typically come from a database
const startups = [
  {
    id: 1,
    name: "EcoTrack",
    description: "A mobile app that helps users track and reduce their carbon footprint.",
    founder: "Alice Green",
  },
  {
    id: 2,
    name: "MindfulAI",
    description: "An AI-powered meditation and mindfulness platform.",
    founder: "Bob Johnson",
  },
  // Add more startup ideas here
]

export default function StartupList() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Startup Ideas</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {startups.map((startup) => (
          <Card key={startup.id}>
            <CardHeader>
              <CardTitle>{startup.name}</CardTitle>
              <CardDescription>Founded by {startup.founder}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{startup.description}</p>
            </CardContent>
            <CardFooter>
              <Button>Apply as Co-Founder</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

