import type { Project } from "~/types/project";

// Images
import heroImage from "~/assets/images/showcase/eventscase-design-system/design-system-hero.png";
import processImage1 from "~/assets/images/showcase/eventscase-design-system/process/design-system-process-1.png";
import processImage2 from "~/assets/images/showcase/eventscase-design-system/process/design-system-process-2.png";
import processImage3 from "~/assets/images/showcase/eventscase-design-system/process/design-system-process-3.png";
import processImage4 from "~/assets/images/showcase/eventscase-design-system/process/design-system-process-4.png";
import processImage5 from "~/assets/images/showcase/eventscase-design-system/process/design-system-process-5.png";
import galleryImage1_1 from "~/assets/images/showcase/eventscase-design-system/gallery/design-system-gallery-1-1-1.png";
import galleryImage1_2 from "~/assets/images/showcase/eventscase-design-system/gallery/design-system-gallery-1-1-2.png";
import galleryImage2_1 from "~/assets/images/showcase/eventscase-design-system/gallery/design-system-gallery-1-2-1.png";
import galleryImage2_2 from "~/assets/images/showcase/eventscase-design-system/gallery/design-system-gallery-1-2-2.png";
import outcomeIcon1 from "~/assets/images/showcase/eventscase-design-system/outcomes/design-system-outcome-1.svg";
import outcomeIcon2 from "~/assets/images/showcase/eventscase-design-system/outcomes/design-system-outcome-2.svg";
import outcomeIcon3 from "~/assets/images/showcase/eventscase-design-system/outcomes/design-system-outcome-3.svg";

export const project: Project = {
  // FIXME: Verify and confirm all meta data with @Eli
  meta: {
    title: "Design System",
    description: "Multi-brand new design system adapted to the new branding.",
    image: heroImage,
  },
  slug: "eventscase-design-system",
  header: {
    title: "Design System",
    subtitle: "Multi-brand new design system adapted to the new branding.",
    tags: [
      {
        highlight: "My role",
        text: "Product designer",
      },
      {
        highlight: "Company",
        text: "Eventscase (B2B)",
      },
      {
        highlight: "Date",
        text: "2021",
      },
      {
        highlight: "Product",
        text: "SaaS",
      },
      {
        highlight: "Industry",
        text: "Events",
      },
    ],
  },
  hero: heroImage,
  context: {
    items: [
      {
        header: "Context",
        text: `
        After the pandemic, the <strong>events industry shifted</strong> toward remote and hybrid events. The company decided to take this <strong>change as an opportunity</strong> to open up to a new market.
        <br>
        <br>
        To be ready for this new market, we started by setting a solid foundation. The company invested in a <strong>rebranding</strong> to refresh its image and reflect this new era, and also decided to build a <strong>new product</strong>. To make this possible, it was necessary to create a <strong>new design system</strong>.
        `,
      },
      {
        header: "Challenge",
        text: `
        The product needed to adapt to <strong>each client's brand</strong> while remaining scalable and under our control. At the same time, it was essential to maintain <strong>consistency</strong> with existing product functionality, ensuring continuity for current users.
        <br>
        <br>
        The new system also had to work <strong>across multiple products</strong>, creating a shared and coherent experience between them.
        `,
      },
    ],
  },
  highlight: {
    text: `
    A <strong>single design system</strong> supporting multiple brands and products, built to scale with control.
    `,
    gradientFrom: "#d1fae5",
    gradientTo: "#e9d5ff",
  },
  process: {
    subtitle:
      "A structured process to build a scalable and consistent design system.",
    images: [
      processImage1,
      processImage2,
      processImage3,
      processImage4,
      processImage5,
    ],
    items: [
      {
        title: "Audit",
        content:
          "We conducted a full <strong>audit of all components</strong> across the different products. From this, we created a component sheet detailing all existing elements, identifying <strong>redundancies</strong> and <strong>opportunities</strong> for standardization. This phase gave us a clear picture of the existing ecosystem.",
      },
      {
        title: "Plan",
        content:
          "At this stage, <strong>goals</strong>, <strong>timelines</strong>, and <strong>priorities</strong> were defined to continue evolving the products while planning a gradual integration of the new design system. This allowed us to introduce changes without breaking existing functionality or disrupting current users.",
      },
      {
        title: "Define",
        content:
          "We defined the <strong>visual language</strong> of the system, including layout systems, spacing, grids, breakpoints, color palette, typography, and tone. We also established <strong>naming</strong> conventions for components and tokens, aligned with the development team. This created a solid base, ensured consistency, and built a shared language across teams.",
      },
      {
        title: "Design",
        content:
          "Work started with creating the <strong>tokens</strong> and redesigning the core <strong>components</strong> of the system. Close collaboration with developers from early stages helped build a solid design system and <strong>Storybook</strong>. Components and tokens were documented with clear usage guidelines.",
      },
      {
        title: "Deliver",
        content:
          "All tokens, components, and layouts were built in collaboration with the development team. Progress was tracked using a table inventory, and components and layouts were carefully integrated into the product, replacing old ones without breaking functionality.",
      },
    ],
  },
  gallery: {
    rows: [
      [
        {
          src: galleryImage1_1,
          alt: "Design system components overview",
          width: "2/5",
        },
        {
          src: galleryImage1_2,
          alt: "Design system documentation",
        },
      ],
      [
        {
          src: galleryImage2_1,
          alt: "Component library in Figma",
          width: "4/5",
        },
        {
          src: galleryImage2_2,
          alt: "Design tokens",
        },
      ],
    ],
  },
  outcomes: {
    items: [
      {
        title: "Faster delivery across teams",
        text: "enabling product and engineering teams to build and ship features more quickly through shared components and a unified system.",
        icon: outcomeIcon1,
      },
      {
        title: "Reduced UI-related bugs",
        text: "minimizing inconsistencies and errors by replacing incorrect or ad-hoc components and layouts with standardized ones.",
        icon: outcomeIcon2,
      },
      {
        title: "Scalable multi-product foundation",
        text: "allowing multiple products and brands to evolve on top of a single system while maintaining consistency and control. As white label!",
        icon: outcomeIcon3,
      },
    ],
  },
};
