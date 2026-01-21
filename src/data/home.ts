import type { GalleryRow } from "~/types/gallery";
import type { WorkShowcase } from "~/types/work";

export const gallery: GalleryRow[] = [
  [
    {
      src: "/images/home/gallery/home-gallery-1-1.png",
      alt: "Sheep on a green field",
      width: "1/5",
    },
    {
      src: "/images/home/gallery/home-gallery-1-2.png",
      alt: "Tokyo skyline at dusk with mount Fuji in the background",
    },
  ],
  [
    {
      src: "/images/home/gallery/home-gallery-2-1.png",
      alt: "Tree trunk showing different shades of green and brown",
      width: "4/6",
    },
    {
      src: "/images/home/gallery/home-gallery-2-2.png",
      alt: "Typical japanese meal consisting in udon, soup and friend shrimp",
    },
  ],
  [
    {
      src: "/images/home/gallery/home-gallery-3-1.png",
      alt: "Three linoleum prints depicting a llama, an sloth and a capibara with funny affirming messages",
      width: "5/6",
    },
    {
      src: "/images/home/gallery/home-gallery-3-2.png",
      alt: "A frog based on a classic japanese woodblock printing design",
    },
  ],
];

export const work: WorkShowcase[] = [
  {
    id: "marketgoo",
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
        image: "/images/home/showcase/home-showcase-marketgoo-0.png",
        imageAlt:
          "Screenshot of the Content Auto-Optimization feature interface",
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
      {
        title: "Smarter onboarding",
        description:
          "Reducing friction and helping users reach first value faster.",
        image: "/images/home/showcase/home-showcase-marketgoo-1.png",
        imageAlt: "Screenshot of the Smarter Onboarding flow interface",
        href: "/",
        tags: [
          {
            text: "activation rate",
            highlight: "+10%",
          },
          {
            text: "time to value",
            highlight: "Faster",
          },
        ],
      },
    ],
  },
  {
    id: "eventscase",
    company: "eventscase",
    period: "2021 - 2023",
    description:
      "An all-in-one <strong>event management platform</strong> enabling organizers to plan, manage, and deliver virtual, in-person, and hybrid events. All within a single product.",
    tags: ["B2B", "SaaS", "Event Tech", "Events"],
    projects: [
      {
        title: "Digital Venue",
        description:
          "A new tool designed to easily host remote and hybrid events.",
        image: "/images/home/showcase/home-showcase-eventscase-0.png",
        imageAlt: "Screenshot of the Digital Venue virtual event platform",
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
        image: "/images/home/showcase/home-showcase-eventscase-1.png",
        imageAlt: "Screenshot of the Eventscase Design System components",
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
    id: "declarando",
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
        image: "/images/home/showcase/home-showcase-declarando.png",
        imageAlt: "Screenshot of the Declarando Renta Revamp interface",
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
