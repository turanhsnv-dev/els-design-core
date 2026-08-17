import type { LucideIcon } from "lucide-react";
import { Layers, Smartphone, Zap } from "lucide-react";

export type Service = {
  id: number;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Product Design",
    shortDesc: "From user research to polished UI",
    description:
      "End-to-end digital product design. I take products from ambiguous problem statements to pixel-perfect interfaces that users genuinely love to use.",
    icon: Smartphone,
    tags: [
      "User Experience (UX)",
      "User Interface (UI)",
      "Mobile & Web Apps",
      "Interactive Prototyping",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Design Systems",
    shortDesc: "Scalable component ecosystems",
    description:
      "I build the 'LEGO' blocks that keep your product consistent and your team moving fast. Scalable design languages that become the single source of truth.",
    icon: Layers,
    tags: ["Component Libraries", "Style Guides", "Token Systems", "Documentation"],
  },
  {
    id: 3,
    number: "03",
    title: "Motion & Interaction",
    shortDesc: "Bringing static screens to life",
    description:
      "Micro-interactions and animations that guide users and create delight moments. Static is forgettable. Motion makes interfaces feel intelligent.",
    icon: Zap,
    tags: ["Lottie Animations", "Interaction Design", "After Effects", "Developer Handoff"],
  },
];
