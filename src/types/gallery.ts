import type { ImageMetadata } from "astro";

export type Width =
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5";

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
}

export interface GalleryImageWithWidth extends GalleryImage {
  width: Width;
}

export type GalleryRow = [GalleryImageWithWidth, GalleryImage];
