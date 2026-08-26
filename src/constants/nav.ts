export type NavLink = { name: string; href: string };

export const NAV_SECTIONS: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "Lab", href: "#lab" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Showreel", href: "#showreel" },
  { name: "Showcase", href: "#showcase" },
  { name: "Impact", href: "#impact" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const FOOTER_LINKS = {
  navigation: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
  ],
  resources: [
    { name: "Toolkit", href: "#toolkit" },
    { name: "Impact", href: "#impact" },
    { name: "Showreel", href: "#showreel" },
  ],
  connect: [
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
} as const;
