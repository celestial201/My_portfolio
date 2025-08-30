"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/socials", label: "Socials" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
            Extra Kawaii
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Sulagna Chakrabarty</span>
            <span className="text-xs text-muted-foreground">aspiring fullstack developer</span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden gap-3 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
