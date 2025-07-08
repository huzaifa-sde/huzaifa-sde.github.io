import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link className="flex items-center space-x-2" href="/">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              HA
            </div>
            <span className="hidden font-bold sm:inline-block">
              Huzaifa Ali
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link href="#tech" className="transition-colors hover:text-primary">
              Tech Stack
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="outline"
            className="hidden sm:flex gap-2 items-center"
            asChild
          >
            <Link
              target="_blank"
              href="/assets/resume/Huzaifa_Ali_Resume.pdf"
              // download="Huzaifa_Ali_Resume.pdf"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path
                  d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-6z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 3v6h6M9 13h6M9 17h6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Resume
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
