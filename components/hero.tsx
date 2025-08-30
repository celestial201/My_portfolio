import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="w-full" aria-label="Intro section for Sulagna Chakrabarty">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-20 border-white leading-3">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text column */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-xs font-medium text-sky-900">
              <span className="sr-only">Mode:</span>
              Extra Kawaii Mode • Rabbit Mascot
            </div>

            {/* Heading */}
            <h1 className="text-pretty text-3xl font-semibold leading-tight text-sky-700 md:text-4xl">
              {"Hi, I’m "}
              <span className="text-sky-800">Sulagna Chakrabarty</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-prose text-pretty text-base leading-relaxed text-gray-700">
              Aspiring fullstack developer crafting playful, polished web experiences. I blend kawaii charm with
              professional quality—clean code, thoughtful UX, and accessible interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Button className="bg-sky-600 text-white hover:bg-sky-700" aria-label="View projects" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Small reassurance line */}
            <p className="text-sm text-gray-600">Available for internships, freelance, and collaborative projects.</p>
          </div>

          {/* Mascot column */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4 shadow-sm">
                {/* Swapped animated MascotRabbit for static image */}
                <Image
                  src="/kawaii-rabbit-mascot-with-pastel-peach-scarf.png"
                  alt="Kawaii rabbit mascot with pastel peach scarf"
                  width={224}
                  height={224}
                  className="h-56 w-56"
                  loading="eager"
                  decoding="async"
                />
              </div>
              {/* caption */}
              <p className="mt-3 text-center text-xs text-gray-600">
                Your guide: the Rabbit — curious, quick, and friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
