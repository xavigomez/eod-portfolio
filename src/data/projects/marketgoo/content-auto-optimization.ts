import type { Project } from "~/types/project";

// Images
import heroImage from "~/assets/images/showcase/marketgoo-content-auto-optimization/content-auto-optimization-hero.png";
import processImage1 from "~/assets/images/showcase/marketgoo-content-auto-optimization/process/content-auto-optimization-process-1.png";
import processImage2 from "~/assets/images/showcase/marketgoo-content-auto-optimization/process/content-auto-optimization-process-2.png";
import processImage3 from "~/assets/images/showcase/marketgoo-content-auto-optimization/process/content-auto-optimization-process-3.png";
import processImage4 from "~/assets/images/showcase/marketgoo-content-auto-optimization/process/content-auto-optimization-process-4.png";
import galleryImage1_1 from "~/assets/images/showcase/marketgoo-content-auto-optimization/gallery/content-auto-optimization-gallery-1-1-1.png";
import galleryImage1_2 from "~/assets/images/showcase/marketgoo-content-auto-optimization/gallery/content-auto-optimization-gallery-1-1-2.png";
import galleryImage2_1 from "~/assets/images/showcase/marketgoo-content-auto-optimization/gallery/content-auto-optimization-gallery-1-2-1.png";
import galleryImage2_2 from "~/assets/images/showcase/marketgoo-content-auto-optimization/gallery/content-auto-optimization-gallery-1-2-2.png";
import outcomeIcon1 from "~/assets/images/showcase/marketgoo-content-auto-optimization/outcomes/content-auto-optimization-outcome-1.svg";
import outcomeIcon2 from "~/assets/images/showcase/marketgoo-content-auto-optimization/outcomes/content-auto-optimization-outcome-2.svg";
import outcomeIcon3 from "~/assets/images/showcase/marketgoo-content-auto-optimization/outcomes/content-auto-optimization-outcome-3.svg";

export const project: Project = {
  meta: {
    title: "Content Auto-Optimization",
    description:
      "AI-powered, automated content optimization for non-technical users.",
    image: heroImage,
  },
  slug: "marketgoo-content-auto-optimization",
  header: {
    title: "Content Auto-Optimization",
    subtitle:
      "AI-powered, automated content optimization for non-technical users.",
    tags: [
      {
        highlight: "My role",
        text: "Product designer",
      },
      {
        highlight: "Company",
        text: "marketgoo (B2B)",
      },
      {
        highlight: "Date",
        text: "2025",
      },
      {
        highlight: "Product",
        text: "SaaS",
      },
      {
        highlight: "Industry",
        text: "SEO",
      },
    ],
  },
  hero: heroImage,
  context: {
    items: [
      {
        header: "Context",
        text: `
        Our product is focused on <strong>non-expert users</strong>, mainly small businesses and individuals who want to <strong>improve their business digital presence</strong> through their websites but lack the time and technical knowledge to do it themselves. While the product is easy to understand, it still requires a significant time investment from users.
        <br>
        <br>
        At the same time, the market is clearly moving toward AI-driven solutions, with <strong>partners expecting products to leverage AI</strong> to improve efficiency and results. In this context, partners asked us to evolve the product by introducing AI capabilities to keep it competitive.
        <br>
        <br>
        For users, this aligned with a clear expectation: spending less time optimizing their website, as SEO is not their main job. This created the perfect scenario to evolve the product with AI, aligning user needs, partner expectations, and long-term competitiveness.
        `,
      },
      {
        header: "Challenge",
        text: `
        The main challenge was <strong>introducing AI in a way that delivered real value to users</strong>, not just fulfilling a partner expectation. We wanted to make the most of this opportunity by significantly reducing the time users spent optimizing their websites, without removing clarity or trust in the process.
        <br>
        <br>
        At the same time, the solution had to <strong>work across two different products</strong>: the Webapp and the WordPress plugin. While both shared the same goal and overall structure, their contexts, constraints, and possibilities were different. This required designing two similar but distinct experiences. In WordPress, AI could directly optimize content on the user's website. In the Webapp, the experience needed to focus on guidance, explanations, and decision support, working within content and editing limitations.
        <br>
        <br>
        The challenge was not just adding AI, but designing a cohesive optimization experience that adapted to each platform's capabilities while remaining intuitive, transparent, and consistent for users.
        `,
      },
    ],
  },
  highlight: {
    text: `
    <strong>AI-powered</strong> page optimization that reduces user <strong>time and effort</strong>, guiding users when they want control while keeping the product <strong>competitive</strong>.
    `,
    gradientFrom: "#bae6fd",
    gradientTo: "#e0f2fe",
  },
  process: {
    subtitle:
      "From research to delivery, the process balanced user and business needs.",
    images: [processImage1, processImage2, processImage3, processImage4],
    items: [
      {
        title: "Research",
        content:
          "We analyzed how users optimized their pages, identified friction points, and gathered partner expectations around AI. This confirmed that content optimization was where AI could add the most value.",
      },
      {
        title: "Define",
        content:
          "We established the role of AI, balancing automation and guidance. Principles were set around transparency, control, and trust, deciding when AI would act and when it would assist users.",
      },
      {
        title: "Design",
        content:
          "We redesigned the optimization flows for both products. In WordPress, AI could optimize content directly; in the Webapp, it provided actionable guidance and explanations.",
      },
      {
        title: "Deliver",
        content:
          "We collaborated closely with development to implement the solution incrementally. Components and flows were tested, refined, and integrated to ensure a smooth and user-centered experience across both platforms.",
      },
    ],
  },
  gallery: {
    rows: [
      [
        {
          src: galleryImage1_1,
          alt: "Content Auto-Optimization interface",
          width: "2/5",
        },
        {
          src: galleryImage1_2,
          alt: "marketgoo logo",
        },
      ],
      [
        {
          src: galleryImage2_1,
          alt: "AI optimization flow",
          width: "4/5",
        },
        {
          src: galleryImage2_2,
          alt: "Optimization results",
        },
      ],
    ],
  },
  outcomes: {
    items: [
      {
        title: "+15% SEO score",
        text: "Users optimize more pages, resulting in measurable improvements in overall SEO performance.",
        icon: outcomeIcon1,
      },
      {
        title: "+90% partner adoption",
        text: "The AI optimization feature was widely adopted by partners, validating the solution and supporting business goals.",
        icon: outcomeIcon2,
      },
      {
        title: "Reduced effort and friction",
        text: "The new workflow made optimization faster and simpler, removing repetitive tasks and lowering cognitive load.",
        icon: outcomeIcon3,
      },
    ],
  },
};
