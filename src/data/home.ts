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
    period: "2023 - Current",
    description:
      "White-label SEO tools for web hosts and agencies, helping them add value to their products. The solution uses <strong>automation</strong> and <strong>AI</strong> to turn complex SEO data into actionable insights for non-technical users.",
    tags: ["B2B", "SaaS", "SEO Tools"],
    projects: [
      {
        title: "Content Auto-Optimization",
        description:
          "AI-powered, automated content optimization for non-technical users.",
        image: "https://picsum.photos/800/400?20",
        imageAlt: "Content Auto-Optimization project screenshot",
        href: "/",
        tags: [
          {
            text: "partner adoption",
            highlight: "+90%",
          },
          {
            text: "SEO score",
            highlight: "+15% ",
          },
        ],
      },
    ],
  },
  {
    company: "marketgoo",
    period: "2021 - 2023",
    description:
      "An all-in-one <strong>event management platform</strong> enabling organizers to plan, manage, and deliver virtual, in-person, and hybrid events. All within a single product.",
    tags: ["B2B", "SaaS", "Event Tech", "Events"],
    projects: [
      {
        title: "Digital Venue",
        description:
          "A new tool designed to easily host remote and hybrid events.",
        image: "https://picsum.photos/800/400?20",
        imageAlt: "Content Auto-Optimization project screenshot",
        href: "/",
        tags: [
          {
            text: "Recurrence",
            highlight: "+30%",
          },
          {
            text: "New Events",
            highlight: "+15% ",
          },
        ],
      },
      {
        title: "Design System",
        description:
          "Multi-brand new design system adapted to the new branding.",
        image: "https://picsum.photos/800/400?20",
        imageAlt: "Content Auto-Optimization project screenshot",
        href: "/",
        tags: [
          {
            text: "delivery speed up",
            icon: "chevron-up",
          },
          {
            text: "bugs decreased",
            icon: "chevron-down",
          },
        ],
      },
    ],
  },
  {
    company: "Declarando",
    period: "2019 - 2021",
    description:
      "Digital tax and accounting software for self-employed. Focused on <strong>simplifying complex financial processes through automation</strong> and clear user experiences.",
    tags: ["B2C", "SaaS", "Fintech", "Tax"],
    projects: [
      {
        title: "Renta Revamp",
        description:
          "Simplify and automate the renta process to help users save time and money.",
        image: "https://picsum.photos/800/400?20",
        imageAlt: "Content Auto-Optimization project screenshot",
        href: "/",
        tags: [
          {
            text: "utilization",
            highlight: "200%",
          },
          {
            text: "new users YoY",
            highlight: "x3,5",
          },
        ],
      },
    ],
  },
];
