export type Width = "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/5" | "2/5" | "3/5";

export interface GalleryImage {
  src: string;
  alt: string;
  width: Width;
}

export type GalleryRow = [GalleryImage, GalleryImage];
