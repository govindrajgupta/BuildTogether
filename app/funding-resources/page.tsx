import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const fundingResources = [
  {
    id: 1,
    name: "TechStars Accelerator",
    type: "Accelerator",
    description: "A 3-month program providing funding, mentorship, and network connections.",
    fundingAmount: "$120,000",
    equity: "6%",
    applicationDeadline: "March 1, 2024",
  },
  {
    id: 2,
    name: "Sequoia Capital",
    type: "Venture Capital",
    description: "Early and growth-stage investments in technology companies.",
    fundingAmount: "$1M - $100M",
    equity: "Varies",
    applicationDeadline: "Rolling",
  },
  {
    id: 3,
    name: "Kickstarter",
    type: "Crowdfunding",
    description: "Platform for creative projects to raise funds from the public.",
    fundingAmount: "Varies",
    equity: "0%",
    applicationDeadline: "N/A",
  },
  // Add more funding resources
]

export default function FundingResources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Funding Resources</h1>
      <p className="text-xl mb-8">Explore various funding options for your startup.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fundingResources.map((resource) => (
          <Card key={resource.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{resource.name}</CardTitle>
              <CardDescription>
                <Badge>{resource.type}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{resource.description}</p>
              <div className="space-y-2">
                <p><strong>Funding Amount:</strong> {resource.fundingAmount}</p>
                <p><strong>Equity:</strong> {resource.equity}</p>
                <p><strong>Application Deadline:</strong> {resource.applicationDeadline}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/funding-resources/${resource.id}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

