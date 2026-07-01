import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Mission } from "@/components/sections/Mission";
import { Ploughing } from "@/components/sections/Ploughing";
import { SoupKitchen } from "@/components/sections/SoupKitchen";
import { Donation } from "@/components/sections/Donation";
import { Partner } from "@/components/sections/Partner";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Founder />
        <Mission />
        <Ploughing />
        <SoupKitchen />
        <Donation />
        <Partner />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
