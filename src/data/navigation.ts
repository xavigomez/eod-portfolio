import { Linkedin, Mail, Phone } from "@lucide/astro";
import type { NavLink, Social, SubLink } from "~/types/navigation";

const workSublinks: SubLink[] = [
  {
    label: "marketgoo",
    href: "/#marketgoo",
    tag: "now",
  },
  {
    label: "Eventscase",
    href: "/#eventscase",
    tag: "2021",
  },
  {
    label: "Declarando",
    href: "/#declarando",
    tag: "2019",
  },
];

const aboutSublinks: SubLink[] = [
  {
    label: "Me",
    href: "/about-me#me",
  },
  {
    label: "Education",
    href: "/about-me#education",
  },
  {
    label: "Reviews",
    href: "/about-me#reviews",
  },
];

const links: NavLink[] = [
  {
    label: "Work",
    href: "/#work",
    type: "work",
    sublinks: workSublinks,
  },
  {
    label: "About me",
    href: "/about-me#top",
    type: "about",
    sublinks: aboutSublinks,
  },
];

// TODO: add real socials data
const socials: Social[] = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/your-username/",
    title: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:email@example.com",
    title: "Mail",
  },
  {
    icon: Phone,
    href: "tel:+1234567890",
    title: "Phone",
  },
];

export { links, socials };
