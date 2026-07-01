import { SITE } from "./constants";

export function getNonProfitSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    alternateName: SITE.fullName,
    description:
      "Empowering and uniting communities by addressing social, economic, agricultural, and environmental challenges through collaboration, traditional leadership, and community development.",
    url: "https://zonkizizwe.org.za",
    logo: "https://zonkizizwe.org.za/images/logo.png",
    nonprofitStatus: "NonprofitType",
    identifier: SITE.npoNumber,
    email: SITE.email,
    telephone: `+27${SITE.phone.replace(/\s/g, "").slice(1)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: "Queenstown",
      addressRegion: "Eastern Cape",
      postalCode: SITE.address.postal,
      addressCountry: "ZA",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Chris Hani District Municipality, Eastern Cape",
    },
    foundingDate: "2020",
    slogan: SITE.tagline,
    sameAs: [],
  };
}
