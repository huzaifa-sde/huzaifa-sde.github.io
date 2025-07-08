"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useTheme } from "next-themes"
interface ProjectImage {
  url: string;
  title: string;
  description: string;
  category: string;
}

interface ProjectData {
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
  link?: string;
  tags?: string[];
  showModal?: boolean;
  isMobileApp?: boolean;
}

interface MobileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectData;
}

export default function MobileModal({
  open,
  onOpenChange,
  project,
}: MobileModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" ? true : false;
  const projectImages: ProjectImage[] = useMemo(() => {
    if (!project.images || project.images.length === 0) return [];

    if (typeof project.images[0] === "string") {
      // Handle string array
      return (project.images as string[]).map((url, index) => ({
        url,
        title: `Image ${index + 1}`,
        description: `${project.title} screenshot`,
        category: "general",
      }));
    } else {
      // Handle ProjectImage array
      return project.images as ProjectImage[];
    }
  }, [project.images, project.title]);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(projectImages.map((img) => img.category))
    );
    return [
      { id: "all", label: "All" },
      ...unique.map((cat) => ({ id: cat, label: cat })),
    ];
  }, [projectImages]);

  const filteredImages =
    selectedCategory === "all"
      ? projectImages
      : projectImages.filter((img) => img.category === selectedCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  // Reset index when category changes or project changes
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentImageIndex(0);
  };

  return (
<Dialog open={open} onOpenChange={onOpenChange}>
  <DialogContent className="w-[95vw] max-w-[600px] h-[90vh] max-h-[800px] dark:bg-slate-700 overflow-y-auto">
    <DialogHeader className="space-y-2 pb-4">
      <DialogTitle className="text-xl md:text-2xl font-bold pr-8">
        {project.title}
      </DialogTitle>
      <p className="text-sm text-muted-foreground pr-8">{project.description}</p>
      {/* <div className="flex flex-wrap gap-2 overflow-x-auto py-2 px-1 -mx-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
              selectedCategory === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div> */}
    </DialogHeader>
    
    <div className="flex flex-col items-center justify-center px-2 py-4">
      {/* Phone frame */}
      <div className="relative mb-6">
        <div className="relative w-[180px] md:w-[250px] rounded-[36px] bg-gray-800 p-2 shadow-2xl">
          {/* Phone notch */}
          <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
            {/* <div className="w-40 h-6 bg-gray-800 rounded-b-xl"></div> */}
          </div>

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[28px] bg-white aspect-[9/19]">
            <Image
              src={
                filteredImages[currentImageIndex]?.url || "/placeholder.svg"
              }
              alt={
                filteredImages[currentImageIndex]?.title || "Project Image"
              }
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1 inset-x-0 flex justify-center">
            <div className="w-24 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-md z-10"
          onClick={previousImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-md z-10"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Image info and pagination */}
      <div className="text-center w-full max-w-md">
        <h3 className="font-semibold text-base md:text-lg">
          {filteredImages[currentImageIndex]?.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 px-2">
          {filteredImages[currentImageIndex]?.description}
        </p>
        <div className="flex justify-center gap-1.5 mt-4">
          {filteredImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View ${filteredImages[index].title}`}
            />
          ))}
        </div>
      </div>
    </div>
  </DialogContent>
</Dialog>
  );
}
