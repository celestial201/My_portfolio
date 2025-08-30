export type Social = {
  id: "github" | "linkedin" | "twitter" | "instagram" | "website" | "youtube" | "devto" | "leetcode"
  label: string
  href: string
}

export const socials: Social[] = [
  { id: "github", label: "GitHub", href: "https://github.com/celestial201" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sulagna-chakrabarty-6ab748342/" },
]
