"use client"

import { usePathname } from "next/navigation"
import type React from "react"

export default function RouteWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAbout = pathname?.startsWith("/about")
  return <div className={isAbout ? "about-page" : undefined}>{children}</div>
}
