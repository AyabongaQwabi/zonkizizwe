import { Handshake, Store, Tractor, Users, Building } from "lucide-react";
import { PARTNER_TYPES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const partnerIcons = [Store, Tractor, Building, Users, Handshake];

export function Partner() {
  return (
    <section
      id="partner"
      className="section-padding bg-earth text-cream"
    >
      <div className="container-narrow text-center">
        <FadeIn>
          <SectionHeader
            eyebrow="Collaborate With Us"
            xhosaTitle="Masisebenzisane"
            title="Become a Partner"
            description="Join Zonkizizwe in building stronger, more resilient communities. We welcome partnerships with organisations that share our commitment to ubuntu and rural empowerment."
            light
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mb-10 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNER_TYPES.map((type, index) => {
              const Icon = partnerIcons[index] ?? Handshake;
              return (
                <div
                  key={type}
                  className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-charcoal/40 px-5 py-4 transition-colors duration-200 hover:border-primary/40"
                >
                  <Icon className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-left font-medium">{type}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mb-8 max-w-2xl text-cream/80">
            Whether you supply groceries, provide agricultural equipment, or
            offer professional services — your partnership amplifies our impact
            across the Eastern Cape.
          </p>
          <Button href="#contact" size="lg">
            Partner With Zonkizizwe
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
