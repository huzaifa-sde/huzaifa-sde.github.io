import { Card } from "@/components/ui/card"

import {technologies} from "../lib/data"

export default function TechStack() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card
          key={tech.category}
          className="p-6 border border-muted hover:border-primary/20 transition-all duration-300 hover:shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
              {tech.icon}
            </div>
            <h3 className="text-xl font-semibold">{tech.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

