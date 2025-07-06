"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export interface CertificateSectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
  alt: string;
  imageSize: {
    width: number;
    height: number;
  };
}

interface CertificationSectionProps {
  items: CertificateSectionProps[];
}

export default function CertificationSection({ items }: CertificationSectionProps) {
  return (
    <section id="licenses" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Certifications
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Licenses & Certifications
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Professional certifications and licenses that validate my expertise and skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((cert, index) => (
            <Card key={index} className="p-2 flex flex-col items-center justify-center">
              <Link href={cert.link} target="_blank">
                <div
                  className="relative mt-2 mb-2 block cursor-pointer transition-transform hover:scale-105"
                  style={{ width: cert.imageSize.width, height: cert.imageSize.height }}
                >
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <h3 className="text-xl text-center font-semibold mt-4">{cert.title}</h3>
              <p className="text-sm text-center text-muted-foreground mt-2">{cert.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
