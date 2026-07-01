import Image from "next/image";
import { Award, User } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src="/images/hero.png"
        alt="Rural Eastern Cape farming community landscape"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/50" />
      <div className="pattern-african absolute inset-0 opacity-30" />

      <div className="relative z-10 w-full section-padding pt-32">
        <div className="container-narrow">
          <FadeIn>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <Award className="h-4 w-4" />
              {SITE.npoNumber}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="max-w-4xl font-heading text-4xl uppercase leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-7xl">
              Siyalima, Sakhe, Siphucule Uluntu
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/90 sm:text-xl">
              Zonkizizwe is a registered non-profit organisation dedicated to
              empowering communities, preserving traditional values, promoting
              food security, and improving livelihoods across the Eastern Cape.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#donate" size="lg">
                Donate Now
              </Button>
              <Button href="#partner" variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                Become a Partner
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex flex-wrap gap-6 border-t border-cream/20 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-cream/60">
                    NPO Number
                  </p>
                  <p className="font-semibold text-cream">{SITE.npoNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/30">
                  <User className="h-6 w-6 text-forest" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-cream/60">
                    Founder
                  </p>
                  <p className="font-semibold text-cream">{SITE.founder}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
