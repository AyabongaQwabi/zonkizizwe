import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function SoupKitchen() {
  return (
    <section
      id="soup-kitchen"
      className="section-padding bg-forest text-cream"
    >
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <SectionHeader
                eyebrow="Soup Kitchen Initiative"
                xhosaTitle="Ukondla Uluntu"
                title="Feeding Hope. Restoring Dignity."
                description="Zonkizizwe operates and supports soup kitchen programmes for poor, elderly, homeless, and vulnerable community members across the Eastern Cape."
                align="left"
                light
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mb-6 leading-relaxed text-cream/85">
                Every meal served represents more than nourishment — it is an
                act of ubuntu, restoring dignity to those who need it most. Our
                volunteers work tirelessly to ensure no community member goes
                hungry.
              </p>
              <Button href="#donate" variant="primary" size="lg">
                Support Our Soup Kitchen
              </Button>
            </FadeIn>
          </div>

          <FadeIn direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/soup-kitchen.png"
                  alt="Volunteers serving food at a community soup kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/gallery-1-fixed.png"
                  alt="Elderly community member receiving a warm meal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/community-2.png"
                  alt="Volunteers preparing food for distribution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
