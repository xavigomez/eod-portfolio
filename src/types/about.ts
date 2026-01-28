import type { ImageMetadata } from "astro";

export interface AboutMeta {
  title: string;
  description: string;
  image: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  year: string;
}

export interface Review {
  avatar: ImageMetadata;
  name: string;
  role: string;
  quote: string;
  company: string;
  year: string;
}

export interface AboutData {
  meta: AboutMeta;
  image: ImageMetadata;
  bio: string[];
  education: EducationItem[];
  values: string[];
  reviews: Review[];
}
