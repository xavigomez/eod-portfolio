export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface WorkShowcase {
  company: string;
  period: string;
  description: string;
  tags: string[];
  projects: Project[];
}
