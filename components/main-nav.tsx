import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/founders"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Founders
      </Link>
      <Link
        href="/developers"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Developers
      </Link>
      <Link
        href="/startups"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Startups
      </Link>
      <Link
        href="/founders/applicants"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Applicants
      </Link>
      <Link
        href="/messages"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Messages
      </Link>
      <Link
        href="/milestones"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Milestones
      </Link>
      <Link
        href="/idea-validation"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Idea Validation
      </Link>
      <Link
        href="/mentorship"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Mentorship
      </Link>
      <Link
        href="/pitch-practice"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Pitch Practice
      </Link>
      <Link
        href="/funding-resources"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Funding
      </Link>
    </nav>
  )
}

