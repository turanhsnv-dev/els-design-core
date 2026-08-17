import type { LucideIcon } from "lucide-react";
import {
  Code,
  Coffee,
  Figma,
  Image,
  Layers,
  Music,
  Palette,
  PenTool,
  Search,
  Zap,
} from "lucide-react";

export type Tool = {
  id: number;
  icon: LucideIcon;
  label: string;
  category: string;
  description: string;
  stats: string;
};

export const TOOLS: Tool[] = [
  {
    id: 1,
    icon: Figma,
    label: "Figma",
    category: "Design Tool",
    description: "Mənim rəqəmsal oyun meydanım. Hər layihə burada başlayır və bitir.",
    stats: "95% of projects",
  },
  {
    id: 2,
    icon: Code,
    label: "HTML / CSS",
    category: "Development",
    description: "Dizaynı kodla birləşdirirəm. Prototipləri canlı interfeyslərə çevirirəm.",
    stats: "Frontend ready",
  },
  {
    id: 3,
    icon: Palette,
    label: "Adobe Suite",
    category: "Creative",
    description:
      "Photoshop və Illustrator ilə brand identitetləri və qrafik elementlər yaradıram.",
    stats: "Visual magic",
  },
  {
    id: 4,
    icon: Layers,
    label: "Design Systems",
    category: "Methodology",
    description: "Məntiqli və miqyaslanabilir komponent sistemləri qurmaq mənim tutqum.",
    stats: "Scalable",
  },
  {
    id: 5,
    icon: Zap,
    label: "Motion Design",
    category: "Animation",
    description: "After Effects və Lottie ilə mikro-interaksiyalar və animasiyalar yaradıram.",
    stats: "Smooth AF",
  },
  {
    id: 6,
    icon: Coffee,
    label: "Coffee",
    category: "Essential",
    description: "Yaradıcılığın əsas komponenti. Gecə-gündüz layihələrdə iştirak edir.",
    stats: "∞ cups / day",
  },
  {
    id: 7,
    icon: Music,
    label: "Music",
    category: "Focus",
    description:
      "Yaradıcılıq prosesində fokus və ilham üçün musiqi. Deep work rejiminin ayrılmaz hissəsi.",
    stats: "24 / 7 vibes",
  },
  {
    id: 8,
    icon: Image,
    label: "Adobe Photoshop",
    category: "Creative",
    description:
      "Foto redaktəsi, kompozisiyalar və qrafik dizayn üçün əsas alət. Pixel-perfect nəticələr.",
    stats: "Photo magic",
  },
  {
    id: 9,
    icon: PenTool,
    label: "Adobe Illustrator",
    category: "Creative",
    description: "Vektor qrafikası, logotiplər və illüstrasiyalar üçün professional alət.",
    stats: "Vector master",
  },
  {
    id: 10,
    icon: Search,
    label: "Self Learning",
    category: "Growth",
    description:
      "Davamlı öyrənmə və araşdırma. Yeni texnologiyalar, trendlər və metodologiyaları kəşf etmək.",
    stats: "Always learning",
  },
];
