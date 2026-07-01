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
      className="section-padding bg-earth text-cream"
    >
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Mission"
            xhosaTitle="Amasiko Nophuhliso"
            title="Empowering Communities Through Service"
            description="We address social, economic, agricultural, and environmental challenges through collaboration, traditional leadership, and community development."
            light
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MISSION_CARDS.map((card, index) => {
            const Icon = iconMap[card.icon];
            const badge =
              index % 2 === 0 ? "bg-primary" : "bg-forest";
            return (
              <FadeIn key={card.title} delay={index * 0.08}>
                <article className="group flex h-full cursor-default flex-col rounded-2xl border border-cream/10 bg-charcoal/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-charcoal/60 hover:shadow-xl hover:shadow-primary/10">
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full ${badge} shadow-lg ring-4 ring-cream/5`}
                  >
                    <Icon className="h-8 w-8 text-cream" aria-hidden />
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
