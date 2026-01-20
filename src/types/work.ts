export type ProjectTagIcon = "chevron-up" | "chevron-down";

export type Tag =
  | { text: string; highlight: string }
  | { text: string; icon: ProjectTagIcon };

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  tag: Tag[];
}

export interface WorkShowcase {
  company: string;
  period: string;
  description: string;
  tags: string[];
  projects: Project[];
}
