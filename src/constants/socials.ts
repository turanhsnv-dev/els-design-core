import type { LucideIcon } from "lucide-react";
import { Dribbble, Github, Instagram, Linkedin, Palette } from "lucide-react";

export type Social = { name: string; href: string; icon: LucideIcon };

export const SOCIALS: Social[] = [
  { name: "Behance", href: "https://www.behance.net/elzaxudiyeva", icon: Palette },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Dribbble", href: "#", icon: Dribbble },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Github", href: "#", icon: Github },
];
