import type { GalleryRow } from "~/components/sections/Gallery.astro";

export const gallery: GalleryRow[] = [
    [
        { src: "https://picsum.photos/300/300?1", alt: "Mountain landscape at sunrise", width: "1/6" },
        { src: "https://picsum.photos/600/300?2", alt: "Urban architecture details", width: "5/6" },
    ],
    [
        { src: "https://picsum.photos/600/300?3", alt: "Abstract color patterns", width: "4/6" },
        { src: "https://picsum.photos/300/300?4", alt: "Minimalist interior design", width: "2/6" },
    ],
    [
        { src: "https://picsum.photos/300/300?5", alt: "Nature close-up photography", width: "2/5" },
        { src: "https://picsum.photos/600/300?6", alt: "Coastal scenery at dusk", width: "3/5" },
    ],
];
