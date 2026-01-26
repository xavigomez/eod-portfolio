import type { Project } from "~/types/project";

export const project: Project = {
  // TODO: Add relevant meta data here, let's talk to @Eli about this.
  meta: {
    title: "Digital Venue",
    description: "A new tool designed to easily host remote and hybrid events.",
    image: "/images/home/showcase/home-showcase-eventscase-0.png",
  },
  slug: "eventscase-digital-venue",
  header: {
    title: "Digital Venue",
    subtitle: "A new tool designed to easily host remote and hybrid events.",
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
        text: "2022",
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
  hero: "/images/home/showcase/home-showcase-eventscase-0.png",
  context: {
    items: [
      {
        header: "The Event Landscape",
        text: `
      A few years ago, the event industry was very different. Most <strong>events were fully in-person</strong>, and live streaming was sometimes used as a complement, but it wasn't a common option.
      <br>
      <br>
      <strong>After the pandemic, the industry changed radically</strong>. Remote and hybrid events became part of everyday reality and came to stay.
      <br>
      <br>
      Eventscase offers flexible software to manage and enrich all types of events (in-person, online, or hybrid) covering the entire event journey, from registration and check-in to web and mobile experiences. The platform is used by large companies and organizations such as Telefonica, Bosch, and the United Nations.
      `,
      },
      {
        header: "The new challenge",
        text: `
      With this new landscape, the company <strong>identified a big opportunity</strong> and expanded the product and design teams to <strong>build a new solution</strong> for this era.
      <br>
      <br>
      The <strong>goal</strong> was to create a digital venue that could support this new type of event and help grow the company. The <strong>challenge</strong> was not only to offer a space to stream or reproduce a physical event, but to design a place where events could really happen online, allowing attendees to interact with each other, meet speakers, and visit virtual stands.
      <br>
      <br>
      All of this needed to work as a <strong>white-label</strong> solution, making each event fully customizable for different companies and organizations.
      `,
      },
    ],
  },
  highlight: {
    text: `
  This new reality could have been seen as a problem, but at <strong>Eventscase</strong> we decided to embrace the situation and evolve with it. Rather than a problem, it <strong>became an opportunity</strong> to change and grow by reaching new markets and being useful to more users.
  `,
    gradientFrom: "emerald-100",
    gradientTo: "purple-200",
  },
  process: {
    subtitle:
      "From research to delivery, the process balanced user and business needs.",
    image: "https://placehold.co/360x480",
    items: [
      {
        title: "Research & Discovery",
        content:
          "We explored the evolving events landscape through industry <strong>benchmarking</strong> and <strong>interviews</strong> with attendees and organizers. This helped us identify key <strong>needs</strong>, <strong>pain points</strong>, and <strong>opportunities</strong> specific to remote and hybrid events.",
      },
      {
        title: "Define & Plan",
        content:
          "In close <strong>collaboration with business and development teams</strong>, we defined <strong>requirements</strong> and <strong>constraints</strong>. Key focus areas included a white-label solution, brand alignment, progressive delivery for early testing, and a mobile-first approach.",
      },
      {
        title: "Ideate & Design",
        content:
          "We translated insights into solutions, starting with <strong>information architecture</strong> and progressing to high-fidelity <strong>designs</strong>. The work followed an iterative process, with <strong>continuous validation</strong> to ensure alignment with both user expectations and business goals.",
      },
      {
        title: "Deliver & Iterate",
        content:
          "The solution was delivered incrementally, allowing us to <strong>test</strong>, <strong>learn</strong>, and <strong>refine</strong> based on real usage and feedback, ensuring long-term adoption and measurable impact.",
      },
    ],
  },
  gallery: {
    rows: [
      [
        {
          src: "/images/showcase/events-case/eventscase-showcase-1-1-1.png",
          alt: "A man sitting in a turned chair giving a speech to an off frame crowd",
          width: "2/5",
        },
        {
          src: "/images/showcase/events-case/eventscase-showcase-1-1-2.png",
          alt: "Events case logo in white over sea green background",
        },
      ],
      [
        {
          src: "/images/showcase/events-case/eventscase-showcase-1-2-1.png",
          alt: "An image depicting several different images of the Digital Venue in a design file",
          width: "4/5",
        },
        {
          src: "/images/showcase/events-case/eventscase-showcase-1-2-2.png",
          alt: "A drawing of person designing",
        },
      ],
    ],
  },
  outcomes: {
    items: [
      {
        title: "+15% growth during the pandemic",
        text: "enabling Eventscase to continue hosting events while increasing sales in a highly uncertain period.",
        icon: "https://placehold.co/96x96",
      },
      {
        title: "+15% growth during the pandemic",
        text: "enabling Eventscase to continue hosting events while increasing sales in a highly uncertain period.",
        icon: "https://placehold.co/96x96",
      },
      {
        title: "+15% growth during the pandemic",
        text: "enabling Eventscase to continue hosting events while increasing sales in a highly uncertain period.",
        icon: "https://placehold.co/96x96",
      },
    ],
  },
};
