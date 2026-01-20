import type { GalleryRow } from "~/components/sections/Gallery.astro";
import type { WorkShowcase } from "~/types/work";

export const gallery: GalleryRow[] = [
  [
    {
      src: "https://picsum.photos/300/300?1",
      alt: "Mountain landscape at sunrise",
      width: "1/6",
    },
    {
      src: "https://picsum.photos/600/300?2",
      alt: "Urban architecture details",
      width: "5/6",
    },
  ],
  [
    {
      src: "https://picsum.photos/600/300?3",
      alt: "Abstract color patterns",
      width: "4/6",
    },
    {
      src: "https://picsum.photos/300/300?4",
      alt: "Minimalist interior design",
      width: "2/6",
    },
  ],
  [
    {
      src: "https://picsum.photos/300/300?5",
      alt: "Nature close-up photography",
      width: "2/5",
    },
    {
      src: "https://picsum.photos/600/300?6",
      alt: "Coastal scenery at dusk",
      width: "3/5",
    },
  ],
];

export const work: WorkShowcase[] = [
  {
    company: "marketgoo",
    period: "2019 - 2021",
    description:
      "White-label SEO tools for web hosts and agencies, helping them add value to their products. The solution uses <strong>automation</strong> and <strong>AI</strong> to turn complex SEO data into actionable insights for non-technical users.",
    tags: ["SEO", "AI", "Foo", "Bar"],
    projects: [
      {
        title: "Content Auto-Optimization",
        description:
          "AI-powered, automated content optimization for non-technical users.",
        image: "https://picsum.photos/800/400?20",
        imageAlt: "Content Auto-Optimization project screenshot",
        href: "/",
      },
      {
        title: "Content Auto-Optimization",
        description:
          "AI-powered, automated content optimization for non-technical users.",
        image: "https://picsum.photos/800/400?20",
        imageAlt: "Content Auto-Optimization project screenshot",
        href: "/",
      },
    ],
  },
  {
    company: "marketgoo",
    period: "2019 - 2021",
    description:
      "White-label SEO tools for web hosts and agencies, helping them add value to their products. The solution uses <strong>automation</strong> and <strong>AI</strong> to turn complex SEO data into actionable insights for non-technical users.",
    tags: ["SEO", "AI", "Foo", "Bar"],
    projects: [
      {
        title: "Content Auto-Optimization",
        description:
          "AI-powered, automated content optimization for non-technical users.",
        image: "https://picsum.photos/800/400?20",
        imageAlt: "Content Auto-Optimization project screenshot",
        href: "/",
      },
    ],
  },
  {
    company: "marketgoo",
    period: "2019 - 2021",
    description:
      "White-label SEO tools for web hosts and agencies, helping them add value to their products. The solution uses <strong>automation</strong> and <strong>AI</strong> to turn complex SEO data into actionable insights for non-technical users.",
    tags: ["SEO", "AI", "Foo", "Bar"],
    projects: [
      {
        title: "Content Auto-Optimization",
        description:
          "AI-powered, automated content optimization for non-technical users.",
        image: "https://picsum.photos/800/400?20",
        imageAlt: "Content Auto-Optimization project screenshot",
        href: "/",
      },
    ],
  },
];
