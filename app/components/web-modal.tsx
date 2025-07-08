"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ProjectImage {
  url: string
  title: string
  description: string
  category: string
}

interface ProjectModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  projectTitle: string
  images: ProjectImage[]
}

export default function WebModal({ open, onOpenChange, projectTitle, images }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Build dynamic categories from provided images
  const categories = Array.from(new Set(images.map((img) => img.category)))
  const allCategories = [{ id: "all", label: "All" }, ...categories.map((cat) => ({ id: cat, label: cat[0].toUpperCase() + cat.slice(1) }))]

  const filteredImages =
    selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl md:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{projectTitle}</DialogTitle>
          {/* <div className="flex gap-2 overflow-x-auto py-2 px-1 -mx-1">
            {allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setCurrentImageIndex(0)
                }}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div> */}
        </DialogHeader>
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="relative mx-auto w-full">
            <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={filteredImages[currentImageIndex]?.url || "/placeholder.svg"}
                  alt={filteredImages[currentImageIndex]?.title || "Project Image"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={previousImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center mt-6">
            <h3 className="font-semibold text-lg">{filteredImages[currentImageIndex]?.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{filteredImages[currentImageIndex]?.description}</p>
            <div className="flex justify-center gap-1.5 mt-4">
              {filteredImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View ${filteredImages[index]?.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
