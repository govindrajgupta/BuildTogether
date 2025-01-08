import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { MainNav } from '@/components/main-nav'
import { ModeToggle } from '@/components/mode-toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BuildTogether',
  description: 'Connect founders with technical co-founders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground">
            <header className="container mx-auto py-4 px-4">
              <div className="flex justify-between items-center">
                <MainNav />
                <ModeToggle />
              </div>
            </header>
            <main className="container mx-auto py-8 px-4">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

