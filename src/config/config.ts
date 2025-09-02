export const siteConfig = {
  name: "RE-BIN",
  description: "Connecting Students Preserving Resources",
  tagline: "Connecting Students Preserving Resources",
  
  nav: [
    { name: "Buy", href: "/", id: "buy" },
    { name: "Sell", href: "/sell", id: "sell" },
    { name: "Others", href: "#others", id: "others" }
  ],
  
  social: {
    instagram: {
      handle: "@placeholder_handle",
      url: "{{IG_URL}}"
    },
    email: "placeholder@email.com"
  },
  
  placeholders: {
    heroLeaf: "{{HERO_LEAF_URL}}",
    qrFeedback: "{{QR_FEEDBACK_URL}}",
    qrInstagram: "{{QR_IG_URL}}",
    logo: "{{LOGO_URL}}"
  }
};

export type NavItem = {
  name: string;
  href: string;
  id: string;
};