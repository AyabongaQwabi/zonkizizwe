"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
        isScrolled ? "top-2" : "top-4"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`container-narrow mx-auto flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border-border/80 bg-card/95 shadow-xl backdrop-blur-md"
            : "border-white/20 bg-charcoal/80 shadow-lg backdrop-blur-md"
        }`}
      >
        <a
          href="#hero"
          className="flex cursor-pointer items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Image
            src="/images/logo.png"
            alt={`${SITE.name} logo`}
            width={48}
            height={48}
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-heading text-lg uppercase leading-none text-cream">
              {SITE.name}
            </p>
            <p className="text-xs text-cream/70">{SITE.npoNumber}</p>
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-cream/90 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Button href="#donate" size="sm" className="hidden sm:inline-flex">
            Donate
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-cream transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="container-narrow mx-auto mt-2 rounded-2xl border border-border bg-card p-4 shadow-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-xl px-4 py-3 text-base font-medium text-earth transition-colors hover:bg-primary/10 dark:text-cream"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#donate"
              className="mt-2 w-full"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
