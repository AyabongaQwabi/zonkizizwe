import {
  Crown,
  HeartHandshake,
  Tractor,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { MISSION_CARDS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<(typeof MISSION_CARDS)[number]["icon"], LucideIcon> = {
  users: Users,
  utensils: Utensils,
  crown: Crown,
  tractor: Tractor,
  "heart-handshake": HeartHandshake,
};

export function Mission() {
  return (
    <section
      id="mission"
      className="section-padding bg-earth text-cream pattern-african"
    >
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Mission"
            title="Empowering Communities Through Service"
            description="We address social, economic, agricultural, and environmental challenges through collaboration, traditional leadership, and community development."
            light
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MISSION_CARDS.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <FadeIn key={card.title} delay={index * 0.08}>
                <article className="group h-full cursor-default rounded-2xl border border-cream/10 bg-charcoal/40 p-6 transition-all duration-200 hover:border-primary/50 hover:bg-charcoal/60 hover:shadow-xl hover:shadow-primary/10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 transition-colors duration-200 group-hover:bg-primary/30">
                    <Icon className="h-7 w-7 text-primary" aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl uppercase">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">
                    {card.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
