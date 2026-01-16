import { Bot, LampDesk } from "@lucide/astro";
import type { NavLink, SubLink } from "~/types/navigation";

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
    href: "/work",
    icon: LampDesk,
    sublinks: workSublinks,
  },
  {
    label: "About",
    href: "/about",
    icon: Bot,
    sublinks: aboutSublinks,
  },
];

export { links };
