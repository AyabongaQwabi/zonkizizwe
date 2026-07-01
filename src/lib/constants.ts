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

/** Established isiXhosa lines taken from the organisation's own collateral. */
export const TAGLINES = {
  hero: "Sisonke Sakha Ikamva Elingcono",
  heroEnglish: "Together we build a better future",
  power: "Amandla Oluntu Namasiko",
  powerEnglish: "The power of the people and tradition",
  plough: "Silima Namhlanje, Sivune Ngomso",
  ploughEnglish: "We plough today, we harvest tomorrow",
  together: "Makulunge, Masisebenzisane, Masiphumelele",
  togetherEnglish: "Let it be well, let us work together, let us succeed",
} as const;

export const FOUNDER = {
  name: "Mr Bokwe",
  role: "Founder & Traditional Leader",
  image: "/images/founder-real.jpeg",
  quoteXhosa: "Sisonke sakha ikamva elingcono.",
  quote:
    "I started Zonkizizwe because I could not look away. Our elders go hungry, our fields lie unploughed, and our young people leave. We plough the land, we feed the hungry, and we hold on to who we are. This is not charity — it is ubuntu. When one household stands, the whole village stands with it.",
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
    src: "/images/elder-tradition.jpg",
    alt: "A dignified elderly Xhosa woman in traditional attire",
    category: "Traditional leaders",
  },
  {
    src: "/images/horseman.jpg",
    alt: "A Basotho man in a traditional blanket on horseback before the mountains",
    category: "Community life",
  },
  {
    src: "/images/soup-pots.jpg",
    alt: "Potjie pots cooking a community meal over an open fire",
    category: "Soup kitchens",
  },
  {
    src: "/images/farming-woman.jpg",
    alt: "A woman tending crops by hand in a green field",
    category: "Farming activities",
  },
  {
    src: "/images/tractor-plough.jpg",
    alt: "A farmer ploughing a field with a red tractor",
    category: "Farming activities",
  },
  {
    src: "/images/potato-harvest.jpg",
    alt: "A freshly harvested potato held above a ploughed field",
    category: "Farming activities",
  },
  {
    src: "/images/maize-harvest.jpg",
    alt: "Community members celebrating an abundant maize harvest",
    category: "Farming activities",
  },
  {
    src: "/images/soup-village.jpg",
    alt: "Cooking pots over a fire in a rural Eastern Cape village at dusk",
    category: "Soup kitchens",
  },
  {
    src: "/images/village-homes.jpg",
    alt: "Rondavel homesteads on a lush green hillside",
    category: "Community life",
  },
] as const;

export const SOUP_KITCHEN_GOAL = 50000;
export const SOUP_KITCHEN_RAISED = 32500;
