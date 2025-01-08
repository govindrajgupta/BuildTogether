import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function DeveloperSignup() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push("/developers/signup/success")
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Developer Sign Up</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Jane Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="jane@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="github">GitHub Profile</Label>
          <Input id="github" placeholder="https://github.com/janedoe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp Number</Label>
          <Input id="whatsapp" placeholder="+1234567890" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="compensation">Compensation Expectations</Label>
          <Textarea id="compensation" placeholder="Equity, salary, etc..." required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="terms">Partnership Terms</Label>
          <Textarea id="terms" placeholder="Your preferred partnership terms..." required />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
    </div>
  )
}

