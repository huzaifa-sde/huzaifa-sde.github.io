"use client"

import { CheckCircle, Github, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProfileImage from "./profile-image"
import { useState } from "react"

export default function HeroSection() {
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 z-0"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero Text */}
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              <CheckCircle className="inline-block h-5 w-5 mr-2 text-green-500" />
              Available for freelance work
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none">
              <span className="block">Hi, I'm Huzaifali</span>
              <span className="block mt-2 text-primary">Software Engineer</span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl">
              Building digital experiences with modern technologies. Focused
              on creating elegant solutions to complex problems with a passion
              for clean code and user-centered design.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => {
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection)
                    projectsSection.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link href="https://github.com/huzaifalidev" target="_blank">
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/huzaifa-ali-09aa38247" target="_blank">
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/Aleekhan_48" target="_blank">
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:huzaifalikhan48@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10"
                onClick={() => setWhatsappModalOpen(true)}
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <ProfileImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HuzaifaDp.jpg-Q2HbmbTIASKMMO8X86orUJseFD8Wxn.jpeg"
            alt="Huzaifali"
            width={400}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}
