import type { ImageMetadata } from "astro";
import type { GalleryRow } from "./gallery";

export interface ProjectMeta {
  title: string;
  description: string;
  image: ImageMetadata;
}

export interface ProjectTag {
  highlight: string;
  text: string;
}

export interface ProjectHeader {
  title: string;
  subtitle: string;
  tags: ProjectTag[];
}

export interface ProjectContextItem {
  header: string;
  text: string;
}

export interface ProjectContext {
  items: ProjectContextItem[];
}

export interface ProjectHighlight {
  text: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface ProjectProcessItem {
  title: string;
  content: string;
}

export interface ProjectProcess {
  subtitle: string;
  images: ImageMetadata[];
  items: ProjectProcessItem[];
}

export interface ProjectGallery {
  rows: GalleryRow[];
}

export interface ProjectOutcomeItem {
  title: string;
  text: string;
  icon: ImageMetadata;
}

export interface ProjectOutcomes {
  items: ProjectOutcomeItem[];
}

export interface Project {
  meta: ProjectMeta;
  slug: string;
  header: ProjectHeader;
  hero: ImageMetadata;
  context: ProjectContext;
  highlight: ProjectHighlight;
  process: ProjectProcess;
  gallery: ProjectGallery;
  outcomes: ProjectOutcomes;
}
