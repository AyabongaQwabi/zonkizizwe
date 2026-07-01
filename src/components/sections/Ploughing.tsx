import Image from "next/image";
import { MapPin } from "lucide-react";
import { PLOUGHING_AREAS, PLOUGHING_STATS, TAGLINES } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Seal } from "@/components/ui/Seal";

export function Ploughing() {
  return (
    <section id="ploughing" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/tractor-plough.jpg"
                  alt="A farmer ploughing a field with a red tractor in the Eastern Cape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden sm:block">
                <Seal
                  top="Ukulima"
                  center="2026"
                  bottom="Season"
                  color="orange"
                  size="md"
                  className="bg-cream shadow-2xl dark:bg-charcoal"
                />
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <SectionHeader
                eyebrow="2026 Initiative"
                xhosaTitle="Ukulima Emasimini"
                title="Ploughing the Fields, 2026"
                description="In 2026, Zonkizizwe will assist households throughout Lady Frere, Queenstown, and the Chris Hani District by ploughing fields in preparation for planting maize, potatoes, cabbage, and other crops."
                align="left"
                brushColor="green"
              />
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="mb-8 font-heading text-xl uppercase tracking-wide text-forest dark:text-primary">
                {TAGLINES.plough}
                <span className="mt-1 block text-sm font-normal normal-case tracking-normal text-earth/70 dark:text-cream/60">
                  {TAGLINES.ploughEnglish}
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-8 grid grid-cols-3 gap-4">
                {PLOUGHING_STATS.map((stat) => (
                  <AnimatedCounter
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="mb-4 font-heading text-lg uppercase text-earth dark:text-cream">
                Areas Served
              </h3>
              <ul className="space-y-3">
                {PLOUGHING_AREAS.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors duration-200 hover:border-forest/50"
                  >
                    <MapPin className="h-5 w-5 shrink-0 text-forest" />
                    <span className="font-medium text-earth dark:text-cream">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
