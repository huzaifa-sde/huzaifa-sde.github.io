"use client";

import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Phone,
  Check,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import EducationTree from "./components/education-tree";
import ExperienceTimeline from "./components/experience-timeline";
import WhatsAppModal from "./components/whatsapp-modal";
import { useState } from "react";
import CertificationSection from "./components/certification-section";
import WebModal from "./components/web-modal";
import MobileModal from "./components/mobile-modal";
import { Navbar } from "./components/navbar";
import {
  educationItems,
  experienceItems,
  projects,
  certifications,
} from "./lib/data";
import HeroSection from "./components/hero-section";

type Project = {
  title: string;
  description: string;
  images:
    | string[]
    | Array<{
        url: string;
        title: string;
        description: string;
        category: string;
      }>;
  link: string;
  tags: string[];
  showModal?: boolean;
  isMobileApp?: boolean;
};
export default function Page() {
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const openModal = (project: Project) => {
    if (project.showModal) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="education" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-12 text-center">
              Education
            </h2>
            <EducationTree items={educationItems} />
          </div>
        </section>

        <section id="experience" className="py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Career
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Professional Experience
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                My journey as a developer, showcasing roles and responsibilities
                in various organizations.
              </p>
            </div>
            <ExperienceTimeline items={experienceItems} />
          </div>
        </section>

        <CertificationSection items={certifications} />

        <section id="projects" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                A collection of my recent work showcasing my skills and
                expertise in web development.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onOpenModal={() => openModal(project)}
                />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  window.open("https://github.com/huzaifalidev", "_blank");
                }}
              >
                View All Projects
              </Button>
            </div>
          </div>
        </section>
        {selectedProject &&
          selectedProject.showModal &&
          !selectedProject.isMobileApp && (
            <WebModal
              open={isModalOpen}
              onOpenChange={setIsModalOpen}
              projectTitle={selectedProject.title}
              images={
                Array.isArray(selectedProject.images) &&
                selectedProject.images.length > 0
                  ? typeof selectedProject.images[0] === "string"
                    ? (selectedProject.images as string[]).map(
                        (url, index) => ({
                          url,
                          title: `Image ${index + 1}`,
                          description: `${selectedProject.title} screenshot`,
                          category: "general",
                        })
                      )
                    : (selectedProject.images as Array<{
                        url: string;
                        title: string;
                        description: string;
                        category: string;
                      }>)
                  : []
              }
            />
          )}

        {selectedProject &&
          selectedProject.showModal &&
          selectedProject.isMobileApp && (
            <MobileModal
              open={isModalOpen}
              onOpenChange={setIsModalOpen}
              project={selectedProject}
            />
          )}

        <section id="tech" className="py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Skills
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Tech Stack
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Technologies and tools I use to bring products to life.
              </p>
            </div>
            <TechStack />
          </div>
        </section>

        <section
          id="contact"
          className="py-20 md:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-background z-0"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <div className="flex flex-col items-center justify-center text-center mb-12">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                  Have a project in mind or just want to say hello? Feel free to
                  reach out.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/20">
        <div className="container py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Link className="flex items-center space-x-2" href="/">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  H
                </div>
                <span className="font-bold">Huzaifa Ali </span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                Full stack developer specializing in building exceptional
                digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Pages</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#about"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#projects"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Social</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://github.com/huzaifalidev"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://linkedin.com/in/huzaifa-ali-09aa38247"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com/Aleekhan_48"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => setWhatsappModalOpen(true)}
                      className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      WhatsApp
                    </button>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2025 Huzaifa Ali. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="https://github.com/huzaifalidev"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/huzaifa-ali-09aa38247"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/Aleekhan_48"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <button
                onClick={() => setWhatsappModalOpen(true)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppModal
        open={whatsappModalOpen}
        onOpenChange={setWhatsappModalOpen}
        phoneNumber="923043923901"
      />
    </div>
  );
}
