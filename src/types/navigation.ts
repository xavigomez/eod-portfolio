import { type Icon as LucideIconType } from "@lucide/astro";
export interface SubLink extends Omit<NavLink, "icon" | "sublinks"> {
  tag?: string;
}

export interface NavLink {
  icon?: typeof LucideIconType;
  label: string;
  href: string;
  sublinks?: SubLink[];
}

export interface Social {
  icon: typeof LucideIconType;
  href: string;
  title: string;
}
