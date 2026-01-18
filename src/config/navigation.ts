import { Bot, LampDesk, Linkedin, Mail, Phone } from "@lucide/astro";
import type { NavLink, Social, SubLink } from "~/types/navigation";

const workSublinks: SubLink[] = [
  {
    label: "marketgoo",
    href: "foo",
    tag: "now",
  },
  {
    label: "Eventscase",
    href: "foo",
    tag: "2021",
  },
  {
    label: "Declarando",
    href: "foo",
    tag: "2019",
  },
];

const aboutSublinks: SubLink[] = [
  {
    label: "Me",
    href: "foo",
  },
  {
    label: "Education",
    href: "foo",
  },
  {
    label: "reviews",
    href: "foo",
  },
];

const links: NavLink[] = [
  {
    label: "Work",
    href: "/my-work",
    icon: LampDesk,
    sublinks: workSublinks,
  },
  {
    label: "About",
    href: "/about-me",
    icon: Bot,
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
