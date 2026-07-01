export const SITE = {
  name: "Zonkizizwe",
  fullName:
    "Zonkizizwe – Indigenous Traditional Leaders of South Africa",
  tagline: "The Power of Traditional Community",
  npoNumber: "311-529 NPO",
  founder: "Mr Bokwe",
  email: "zointralesa@gmail.com",
  phone: "076 949 5884",
  whatsapp: "https://wa.me/27769495884",
  address: {
    street: "656 Makhe Street, Nomzamo",
    city: "Queenstown, Eastern Cape",
    postal: "5319",
    full: "656 Makhe Street, Nomzamo, Queenstown, Eastern Cape, 5319",
  },
  footerTagline: "Zonkizizwe – Amandla Oluntu Namasiko",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#mission", label: "Mission" },
  { href: "#ploughing", label: "Ploughing 2026" },
  { href: "#soup-kitchen", label: "Soup Kitchen" },
  { href: "#donate", label: "Donate" },
  { href: "#partner", label: "Partner" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export const MISSION_CARDS = [
  {
    title: "Community Development",
    description:
      "Promoting sustainable and inclusive community growth.",
    icon: "users" as const,
  },
  {
    title: "Food Security",
    description:
      "Fighting hunger through soup kitchens and agricultural initiatives.",
    icon: "utensils" as const,
  },
  {
    title: "Traditional Leadership",
    description:
      "Strengthening traditional structures and cultural preservation.",
    icon: "crown" as const,
  },
  {
    title: "Agricultural Development",
    description:
      "Supporting local farmers through field ploughing and agricultural partnerships.",
    icon: "tractor" as const,
  },
  {
    title: "Social Support",
    description:
      "Providing assistance to vulnerable and marginalised groups.",
    icon: "heart-handshake" as const,
  },
] as const;

export const PLOUGHING_AREAS = [
  "Lady Frere",
  "Queenstown (Komani)",
  "Chris Hani District",
] as const;

export const PLOUGHING_STATS = [
  { value: 500, suffix: "+", label: "Households to assist" },
  { value: 3, suffix: "", label: "Districts served" },
  { value: 2026, suffix: "", label: "Ploughing season" },
] as const;

export const DONATION_TIERS = [
  { amount: 100, label: "Feed 5 people" },
  { amount: 250, label: "Feed a family" },
  { amount: 500, label: "Sponsor groceries" },
  { amount: 1000, label: "Support community farming" },
] as const;

export const PAYMENT_METHODS = [
  { id: "payfast", label: "PayFast", description: "Card & EFT via PayFast" },
  { id: "peach", label: "Peach Payments", description: "Secure card payments" },
  { id: "ozow", label: "Ozow", description: "Instant EFT payments" },
  { id: "eft", label: "EFT", description: "Direct bank transfer" },
] as const;

export const PARTNER_TYPES = [
  "Grocery stores",
  "Farmers",
  "Businesses",
  "NGOs",
  "Community leaders",
] as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/community-1.png",
    alt: "Community meeting with traditional leaders",
    category: "Community meetings",
  },
  {
    src: "/images/traditional-leaders.png",
    alt: "Traditional leaders gathering",
    category: "Traditional leaders",
  },
  {
    src: "/images/soup-kitchen.png",
    alt: "Volunteers serving food at soup kitchen",
    category: "Soup kitchens",
  },
  {
    src: "/images/farming.png",
    alt: "Agricultural farming activities",
    category: "Farming activities",
  },
  {
    src: "/images/community-2.png",
    alt: "Community development project",
    category: "Community development",
  },
  {
    src: "/images/tractor.png",
    alt: "Tractor ploughing fields for planting",
    category: "Farming activities",
  },
  {
    src: "/images/gallery-1.jpeg",
    alt: "Community members at local gathering",
    category: "Community meetings",
  },
  {
    src: "/images/community-3.png",
    alt: "Rural Eastern Cape community support",
    category: "Community development",
  },
] as const;

export const SOUP_KITCHEN_GOAL = 50000;
export const SOUP_KITCHEN_RAISED = 32500;
