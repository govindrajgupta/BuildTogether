import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DeveloperSignupSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <svg
          className="w-24 h-24 text-green-500 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </motion.div>
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Sign Up Successful!
      </motion.h1>
      <motion.p
        className="text-xl mb-8 text-center max-w-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Welcome to the community! You're now ready to explore exciting startup opportunities and connect with visionary founders.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button asChild>
          <Link href="/startups">Explore Startups</Link>
        </Button>
      </motion.div>
    </div>
  )
}

