import Image from "next/image";
import { Quote } from "lucide-react";
import { FOUNDER } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { BrushBanner } from "@/components/ui/BrushBanner";

export function Founder() {
  return (
    <section
      id="founder"
      className="section-padding pattern-grain bg-background"
    >
      <div className="container-narrow">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
                <Image
                  src={FOUNDER.image}
                  alt={`${FOUNDER.name}, ${FOUNDER.role} of Zonkizizwe`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              {/* Painted name tag */}
              <BrushBanner
                color="green"
                as="div"
                className="absolute -bottom-4 left-6 px-6 py-3 text-cream shadow-lg"
              >
                <span className="block font-heading text-xl uppercase leading-none tracking-wide">
                  {FOUNDER.name}
                </span>
                <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-widest text-cream/85">
                  {FOUNDER.role}
                </span>
              </BrushBanner>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <BrushBanner
              color="orange"
              className="mb-5 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cream"
            >
              Message from the Founder
            </BrushBanner>

            <p className="font-heading text-3xl uppercase leading-tight text-forest dark:text-primary sm:text-4xl">
              {FOUNDER.quoteXhosa}
            </p>

            <Quote className="mt-6 h-9 w-9 text-primary" aria-hidden="true" />
            <blockquote className="mt-2 text-lg leading-relaxed text-earth dark:text-cream/85">
              {FOUNDER.quote}
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-1 w-12 bg-primary" />
              <p className="font-heading text-lg uppercase tracking-wide text-earth dark:text-cream">
                {FOUNDER.name}
              </p>
              <span className="text-sm text-earth/70 dark:text-cream/60">
                {FOUNDER.role}
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
