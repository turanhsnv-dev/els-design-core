import type { LucideIcon } from "lucide-react";
import { Lightbulb, PenTool, Rocket, Search } from "lucide-react";

export type ProcessStep = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery & Research",
    subtitle: "Understanding the problem",
    description:
      "Every great design starts with a question. I dive deep into user needs, market trends, and business goals to build a solid foundation. No assumptions, just data-driven insights.",
    icon: Search,
    tags: ["User Interviews", "Competitor Analysis", "Personas"],
  },
  {
    id: "02",
    title: "Strategy & UX",
    subtitle: "Blueprinting the experience",
    description:
      "Before pixels, I build the structure. Wireframing and information architecture help map out user flows that are intuitive, accessible, and frictionless.",
    icon: Lightbulb,
    tags: ["Wireframing", "User Flows", "Information Arch."],
  },
  {
    id: "03",
    title: "Visual Design & UI",
    subtitle: "Crafting the aesthetic",
    description:
      "This is where logic meets magic. I apply visual identity, typography, and color systems to create interfaces that are not just usable, but emotionally resonating.",
    icon: PenTool,
    tags: ["High-Fi Design", "Design Systems", "Prototyping"],
  },
  {
    id: "04",
    title: "Motion & Development",
    subtitle: "Bringing it to life",
    description:
      "Static is boring. I add motion to guide users and collaborate closely with developers to ensure the final product matches the vision pixel-for-pixel.",
    icon: Rocket,
    tags: ["Interaction Design", "Dev Handoff", "QA Testing"],
  },
];
