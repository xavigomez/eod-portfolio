import { type Icon as LucideIconType } from "@lucide/astro";

export interface SubLink extends Omit<NavLink, "type" | "sublinks"> {
  tag?: string;
}

export interface NavLink {
  type?: "work" | "about";
  label: string;
  href: string;
  sublinks?: SubLink[];
}

export interface Social {
  icon: typeof LucideIconType;
  href: string;
  title: string;
}
