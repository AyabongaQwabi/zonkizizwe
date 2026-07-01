"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1000);
  };

  return (
    <section id="contact" className="section-padding pattern-grain bg-cream/50 dark:bg-charcoal/50">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            eyebrow="Get In Touch"
            xhosaTitle="Qhagamshelana Nathi"
            title="Contact Us"
            description="Reach out to learn more about our programmes, partnership opportunities, or how you can support our mission."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <MapPin className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-earth dark:text-cream">
                    Address
                  </h3>
                  <p className="mt-1 text-sm text-muted dark:text-cream/70">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.postal}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <Mail className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-earth dark:text-cream">
                    Email
                  </h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 inline-block cursor-pointer text-sm text-primary transition-colors hover:underline"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <Phone className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-earth dark:text-cream">
                    Phone
                  </h3>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="mt-1 inline-block cursor-pointer text-sm text-primary transition-colors hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>

              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <iframe
                  title="Zonkizizwe office location in Queenstown"
                  src="https://maps.google.com/maps?q=Queenstown,+Eastern+Cape,+South+Africa&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8"
            >
              <h3 className="mb-6 font-heading text-2xl uppercase text-earth dark:text-cream">
                Send a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-earth dark:text-cream"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-earth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-cream"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-earth dark:text-cream"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-earth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-cream"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-earth dark:text-cream"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-earth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-cream"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-earth dark:text-cream"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-earth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-cream"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full"
                disabled={status === "sending"}
              >
                <Send className="h-5 w-5" />
                {status === "sent"
                  ? "Message Sent!"
                  : status === "sending"
                    ? "Sending..."
                    : "Send Message"}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
