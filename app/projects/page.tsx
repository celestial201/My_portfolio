import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { socials } from "@/lib/links"

export const metadata = {
  title: "Projects • Sulagna Chakrabarty",
}

const projects = [
  {
    title: "Cute Number Game",
    summary:
      "A playful number guessing game with a cute, minimal UI. Built to practice JavaScript logic and UI polish.",
    href: "https://github.com/celestial201/cute-number-game",
  },
  {
    title: "Glassmorphism",
    summary: "Glassmorphism UI experiments showcasing frosted glass cards and overlays using modern CSS.",
    href: "https://github.com/celestial201/Glassmorphism",
  },
]

export default function ProjectsPage() {
  const github = socials.find((s) => s.id === "github")
  const isGithubPlaceholder = !github || github.href.includes("your-")

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-6">
      <header className="mb-6">
        <h1 className="text-balance text-2xl font-semibold md:text-3xl">Projects</h1>
        <p className="mt-2 max-w-prose text-sm text-muted-foreground">
          I&apos;ll add detailed case studies and interactive demos here soon.
        </p>
      </header>

      <Card className="mb-6 transition-shadow hover:shadow-md">
        <Link
          href={github?.href ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none"
          aria-disabled={!github}
        >
          <CardHeader>
            <CardTitle className="text-lg">Visit my GitHub profile</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {github ? (
              <>
                <p className="truncate">{github.href}</p>
                {isGithubPlaceholder ? (
                  <p className="mt-2 text-xs text-foreground">
                    Tip: Send me your actual GitHub URL to replace this placeholder.
                  </p>
                ) : null}
              </>
            ) : (
              <p>Send me your GitHub URL and I&apos;ll add it here.</p>
            )}
          </CardContent>
        </Link>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} className="transition-shadow hover:shadow-md">
            <Link href={p.href} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{p.summary}</CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </main>
  )
}
