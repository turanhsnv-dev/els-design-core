export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  cover: string;
  images: string[];
};

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=1000`;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nova Bank",
    category: "Fintech",
    description: "Mobile Banking Redesign",
    tags: ["UX Research", "UI Design", "Prototyping"],
    cover: "/project-images/Desktop - 2.png",
    images: [
      "/project-images/Desktop - 2.png",
      "/project-images/Desktop - 3.png",
      "/project-images/Desktop - 4.png",
      "/project-images/Desktop - 11.png",
    ],
  },
  {
    id: 2,
    title: "Ether Float",
    category: "Web3",
    description: "NFT Marketplace",
    tags: ["3D Modeling", "Visual Design", "Motion"],
    cover: "/abb-images/kart.png",
    images: [
      "/abb-images/kart.png",
      "/abb-images/haqqımızda.png",
      "/abb-images/ipoteka.png",
      "/abb-images/kartlar.png",
      "/abb-images/kreditlər.png",
      "/abb-images/nömrə.png",
    ],
  },
  {
    id: 3,
    title: "Luxe & Co.",
    category: "E-Commerce",
    description: "Fashion Storefront",
    tags: ["Strategy", "Development", "Branding"],
    cover: "/porsche-images/porsche 3.png",
    images: [
      "/porsche-images/porsche 1.png",
      "/porsche-images/porsche 2.png",
      "/porsche-images/porsche 3.png",
    ],
  },
  {
    id: 4,
    title: "Vortex Data",
    category: "Analytics",
    description: "SaaS Analytics Platform",
    tags: ["Data Viz", "Design System"],
    cover: UNSPLASH("photo-1460925895917-afdab827c52f"),
    images: [
      UNSPLASH("photo-1460925895917-afdab827c52f"),
      UNSPLASH("photo-1551288049-bebda4e38f71"),
      UNSPLASH("photo-1551650975-87deedd944c3"),
    ],
  },
  {
    id: 5,
    title: "CloudSync Pro",
    category: "SaaS",
    description: "Cloud Storage Dashboard",
    tags: ["UI Design", "Dashboard", "Wireframing"],
    cover: UNSPLASH("photo-1551650975-87deedd944c3"),
    images: [
      UNSPLASH("photo-1551650975-87deedd944c3"),
      UNSPLASH("photo-1460925895917-afdab827c52f"),
      UNSPLASH("photo-1551288049-bebda4e38f71"),
    ],
  },
  {
    id: 6,
    title: "StreamFlow",
    category: "Entertainment",
    description: "Video Streaming Platform",
    tags: ["UI/UX", "Prototyping", "Motion Design"],
    cover: UNSPLASH("photo-1611162617474-5b21e879e113"),
    images: [
      UNSPLASH("photo-1611162617474-5b21e879e113"),
      UNSPLASH("photo-1551650975-87deedd944c3"),
      UNSPLASH("photo-1460925895917-afdab827c52f"),
    ],
  },
];
