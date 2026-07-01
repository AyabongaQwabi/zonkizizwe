import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TAGLINES } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section-padding pattern-grain bg-background">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            eyebrow="About Us"
            xhosaTitle={TAGLINES.power}
            title="Rooted in Ubuntu, Serving Our Communities"
            description="Zonkizizwe brings together traditional leadership and community development to uplift rural households across the Eastern Cape."
          />
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/horseman.jpg"
                alt="A Basotho man in a traditional blanket riding on horseback before the mountains of the Eastern Cape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl uppercase text-earth dark:text-cream">
                  Who We Are
                </h3>
                <p className="mt-3 leading-relaxed text-muted dark:text-cream/75">
                  Zonkizizwe is a registered non-profit organisation of
                  indigenous traditional leaders dedicated to empowering
                  communities across the Eastern Cape. We work at the
                  intersection of tradition, agriculture, and social upliftment.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl uppercase text-earth dark:text-cream">
                  Our History
                </h3>
                <p className="mt-3 leading-relaxed text-muted dark:text-cream/75">
                  Born from a deep commitment to ubuntu and community service,
                  Zonkizizwe was founded to address the pressing social,
                  economic, and environmental challenges facing rural households
                  in Lady Frere, Queenstown, and the broader Chris Hani District.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl uppercase text-earth dark:text-cream">
                  Traditional Leadership & Development
                </h3>
                <p className="mt-3 leading-relaxed text-muted dark:text-cream/75">
                  Through collaboration with traditional structures, local
                  farmers, and community organisations, we strengthen cultural
                  preservation while driving practical programmes in food security,
                  agricultural development, and social support for vulnerable
                  groups.
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-earth dark:text-cream/90">
                &ldquo;Together we can restore dignity. Building stronger
                communities, one household at a time.&rdquo;
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
