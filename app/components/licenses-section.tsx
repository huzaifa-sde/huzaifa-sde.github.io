"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
export default function LicensesSection() {
  useEffect(() => {
    // Load the Credly script dynamically
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
            Professional certifications and licenses that validate my expertise
            and skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 flex flex-col items-center justify-center">
            <Link
              href="https://www.credly.com/badges/db14a578-1497-4b58-9b97-07ac28ef1268"
              target="_blank"
              className="w-[250px] h-[250px] relative mb-4 block cursor-pointer transition-transform hover:scale-105"
            >
              <Image
                src="/assets/certifications/javascript-essentials-1.png"
                alt="Cisco JavaScript Essentials 1 Certification"
                fill
                className="object-contain"
              />
            </Link>
            <h3 className="text-xl font-semibold mt-4">
              JavaScript Essentials 1
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Verified JavaScript Essentials 1 certification from Cisco
              Networking Academy, demonstrating proficiency in JavaScript
              fundamentals.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center justify-center">
            <Link
              href="https://www.credly.com/badges/4f996bcd-e7b1-404e-adbe-13d2502d21d2"
              target="_blank"
              className="w-[250px] h-[250px] relative mb-4 block cursor-pointer transition-transform hover:scale-105"
            >
              <Image
                src="assets/certifications/javascript-essentials-2.png"
                alt="Cisco JavaScript Essentials 2 Certification"
                fill
                className="object-contain"
              />
            </Link>
            <h3 className="text-xl font-semibold mt-4">
              JavaScript Essentials 2
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Verified JavaScript Essentials 2 certification from Cisco
              Networking Academy, demonstrating proficiency in advanced
              JavaScript concepts.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center justify-center">
            <Link
              href="assets/certifications/aws_certificate.pdf"
              target="_blank"
              className="w-[450px] h-[250px] relative mb-4 block cursor-pointer transition-transform hover:scale-105"
            >
              <Image
                src="assets/certifications/aws_certificate.png"
                alt="AWS Solutions Architect/SysOps Admin/Developer Associate"
                fill
                className="object-contain"
              />
            </Link>
            <h3 className="text-xl text-center font-semibold mt-4">
              AWS Solutions Architect/SysOps Admin/Developer Associate
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Certified AWS Solutions Architect, SysOps Administrator, and
              Developer Associate, experienced in building secure, scalable, and
              efficient cloud solutions on AWS.
            </p>
          </Card>

          {/* Placeholder for future certifications */}
          {/* <Card className="p-6 border border-dashed flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-muted-foreground"
              >
                <path d="M12 2v20" />
                <path d="M17 5H7" />
                <path d="M17 19H7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-4">More Coming Soon</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Currently pursuing additional certifications to expand my
              expertise.
            </p>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
