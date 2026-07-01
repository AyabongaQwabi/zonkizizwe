"use client";

import { useState } from "react";
import {
  Building2,
  CreditCard,
  Lock,
  RefreshCw,
  Shield,
  ShieldCheck,
} from "lucide-react";
import {
  DONATION_TIERS,
  PAYMENT_METHODS,
  SOUP_KITCHEN_GOAL,
  SOUP_KITCHEN_RAISED,
} from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function Donation() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(250);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [paymentMethod, setPaymentMethod] = useState<string>("payfast");

  const progress = Math.min((SOUP_KITCHEN_RAISED / SOUP_KITCHEN_GOAL) * 100, 100);

  const getAmount = () => {
    if (selectedAmount === "custom") {
      return parseFloat(customAmount) || 0;
    }
    return selectedAmount;
  };

  const handleDonate = () => {
    const amount = getAmount();
    if (amount <= 0) return;

    // Payment gateway integration placeholder
    // Replace with actual PayFast/Peach/Ozow merchant credentials
    alert(
      `Thank you! Your ${frequency === "monthly" ? "monthly" : "one-time"} donation of R${amount} via ${paymentMethod.toUpperCase()} will be processed. Payment gateway integration pending.`
    );
  };

  return (
    <section id="donate" className="section-padding bg-background pattern-african">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeader
            eyebrow="Make a Difference"
            title="Support Our Mission"
            description="Your donation directly funds soup kitchens, field ploughing, and community development programmes across the Eastern Cape."
          />
        </FadeIn>

        {/* Progress bar */}
        <FadeIn delay={0.05}>
          <div className="mx-auto mb-12 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-heading text-lg uppercase text-earth dark:text-cream">
                July Soup Kitchen Goal
              </h3>
              <span className="text-sm font-semibold text-primary">
                {progress.toFixed(0)}%
              </span>
            </div>
            <div
              className="h-4 overflow-hidden rounded-full bg-border"
              role="progressbar"
              aria-valuenow={SOUP_KITCHEN_RAISED}
              aria-valuemin={0}
              aria-valuemax={SOUP_KITCHEN_GOAL}
              aria-label="July Soup Kitchen fundraising progress"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-forest transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-sm text-muted dark:text-cream/70">
              <span>R{SOUP_KITCHEN_RAISED.toLocaleString()} raised</span>
              <span>Goal: R{SOUP_KITCHEN_GOAL.toLocaleString()}</span>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Donation tiers */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
              {/* Frequency toggle */}
              <div className="mb-6 flex rounded-full border border-border bg-background p-1">
                <button
                  type="button"
                  onClick={() => setFrequency("once")}
                  className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    frequency === "once"
                      ? "bg-primary text-white"
                      : "text-muted hover:text-earth dark:hover:text-cream"
                  }`}
                >
                  One-time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    frequency === "monthly"
                      ? "bg-primary text-white"
                      : "text-muted hover:text-earth dark:hover:text-cream"
                  }`}
                >
                  <RefreshCw className="h-4 w-4" />
                  Monthly
                </button>
              </div>

              {/* Amount cards */}
              <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {DONATION_TIERS.map((tier) => (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => setSelectedAmount(tier.amount)}
                    className={`cursor-pointer rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                      selectedAmount === tier.amount
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-border hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    <p className="font-heading text-2xl text-primary">
                      R{tier.amount}
                    </p>
                    <p className="mt-1 text-xs text-muted dark:text-cream/70">
                      {tier.label}
                    </p>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setSelectedAmount("custom")}
                  className={`cursor-pointer rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                    selectedAmount === "custom"
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <p className="font-heading text-2xl text-primary">Custom</p>
                  <p className="mt-1 text-xs text-muted dark:text-cream/70">
                    Your amount
                  </p>
                </button>
              </div>

              {selectedAmount === "custom" && (
                <div className="mb-6">
                  <label
                    htmlFor="custom-amount"
                    className="mb-2 block text-sm font-medium text-earth dark:text-cream"
                  >
                    Enter amount (ZAR)
                  </label>
                  <input
                    id="custom-amount"
                    type="number"
                    min="10"
                    step="10"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="e.g. 500"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-earth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-cream"
                  />
                </div>
              )}

              {/* Payment methods */}
              <h4 className="mb-3 font-heading text-sm uppercase tracking-wide text-earth dark:text-cream">
                Payment Method
              </h4>
              <div className="mb-6 grid grid-cols-2 gap-3">
                {PAYMENT_METHODS.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={`cursor-pointer rounded-xl border-2 p-3 text-left transition-all duration-200 ${
                      paymentMethod === method.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-earth dark:text-cream">
                        {method.label}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted dark:text-cream/60">
                      {method.description}
                    </p>
                  </button>
                ))}
              </div>

              <Button
                onClick={handleDonate}
                size="lg"
                className="w-full"
              >
                {frequency === "monthly" ? "Donate Monthly" : "Donate Now"} — R
                {getAmount().toLocaleString()}
              </Button>
            </div>
          </FadeIn>

          {/* Trust badges */}
          <FadeIn delay={0.15}>
            <div className="space-y-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure Donations",
                  desc: "All payments processed through trusted South African gateways.",
                },
                {
                  icon: Building2,
                  title: "Registered NPO",
                  desc: "311-529 NPO — fully registered non-profit organisation.",
                },
                {
                  icon: Lock,
                  title: "SSL Secured",
                  desc: "Your personal and payment information is encrypted.",
                },
                {
                  icon: Shield,
                  title: "100% to Community",
                  desc: "Donations fund soup kitchens, ploughing, and social support.",
                },
              ].map((badge) => (
                <div
                  key={badge.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors duration-200 hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <badge.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth dark:text-cream">
                      {badge.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted dark:text-cream/70">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
