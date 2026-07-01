import Image from "next/image";
import { User } from "lucide-react";
import { SITE, TAGLINES, FOUNDER } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { BrushBanner } from "@/components/ui/BrushBanner";
import { Seal } from "@/components/ui/Seal";
import { TriangleDivider } from "@/components/ui/TriangleDivider";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal"
    >
      <Image
        src="/images/hero.png"
        alt="Ploughed farmland and rondavel homesteads in the rural Eastern Cape at golden hour"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />

      {/* Crest watermark */}
      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-90 lg:block">
        <Image
          src="/brand/crest-t.png"
          alt=""
          width={520}
          height={733}
          className="h-[36rem] w-auto drop-shadow-2xl"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full section-padding pt-36">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-4">
                <Image
                  src="/brand/crest-t.png"
                  alt={`${SITE.name} crest`}
                  width={64}
                  height={90}
                  className="h-16 w-auto lg:hidden"
                />
                <BrushBanner
                  color="orange"
                  className="px-5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cream"
                >
                  {SITE.npoNumber} · Eastern Cape
                </BrushBanner>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-heading text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
                <span className="text-gradient-brand">{TAGLINES.hero}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-3 font-heading text-xl uppercase tracking-wide text-cream sm:text-2xl">
                {TAGLINES.heroEnglish}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
                Zonkizizwe is a registered non-profit led by traditional
                leadership. We plough fields, run soup kitchens, and stand with
                rural households across Lady Frere, Queenstown, and the Chris
                Hani District.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#donate" size="lg">
                  Donate Now
                </Button>
                <Button
                  href="#partner"
                  variant="outline"
                  size="lg"
                  className="border-cream text-cream hover:bg-cream hover:text-charcoal"
                >
                  Become a Partner
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-cream/15 pt-8">
                <Seal
                  top="Registered"
                  center="311-529"
                  bottom="NPO"
                  color="orange"
                  size="sm"
                />
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/60">
                    <Image
                      src={FOUNDER.image}
                      alt={`${FOUNDER.name}, ${FOUNDER.role}`}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-cream/60">
                      <User className="h-3.5 w-3.5" />
                      Founder
                    </p>
                    <p className="font-semibold text-cream">{FOUNDER.name}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <TriangleDivider className="absolute inset-x-0 bottom-0 z-10" />
    </section>
  );
}
