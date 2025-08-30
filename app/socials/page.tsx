import type React from "react"
import { socials } from "@/lib/links"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Instagram, Globe, Youtube, BookText, Braces, Mail } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  website: Globe,
  youtube: Youtube,
  devto: BookText,
  leetcode: Braces,
  email: Mail,
}

export const metadata = {
  title: "Socials • Sulagna Chakrabarty",
}

export default function SocialsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-6">
      <section className="mb-8">
        <h1 className="text-balance text-2xl font-semibold md:text-3xl">Connect with me</h1>
        <p className="mt-2 max-w-prose text-sm text-muted-foreground">
          Follow along on my coding journey. Tap any card to open in a new tab.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {socials.map((s) => {
          const Icon = iconMap[s.id] ?? Globe
          const isPlaceholder = s.href.includes("your-")
          const isInternal = s.href.startsWith("/")
          return (
            <Card key={s.id} className="group transition-shadow hover:shadow-md">
              {isInternal ? (
                <a href={s.href} className="block focus:outline-none">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-base">{s.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4 pt-0">
                    <p className="truncate text-sm text-muted-foreground">{s.href}</p>
                    {isPlaceholder ? (
                      <p className="mt-2 text-xs text-foreground">
                        Tip: Send me your actual {s.label} URL to replace this placeholder.
                      </p>
                    ) : null}
                  </CardContent>
                </a>
              ) : (
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-base">{s.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4 pt-0">
                    <p className="truncate text-sm text-muted-foreground">{s.href}</p>
                    {isPlaceholder ? (
                      <p className="mt-2 text-xs text-foreground">
                        Tip: Send me your actual {s.label} URL to replace this placeholder.
                      </p>
                    ) : null}
                  </CardContent>
                </a>
              )}
            </Card>
          )
        })}
      </div>
    </main>
  )
}
