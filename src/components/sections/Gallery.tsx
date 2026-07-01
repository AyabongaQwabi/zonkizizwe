"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const categories = [
  "All",
  ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category))),
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Work in Action"
            title="Community Gallery"
            description="Moments from our soup kitchens, ploughing initiatives, community meetings, and development projects across the Eastern Cape."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "border border-border bg-card text-muted hover:border-primary hover:text-primary dark:text-cream/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.05}>
              <figure className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-charcoal/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-cream">{image.category}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
