import type { Project } from "~/types/project";

import { project as eventscaseDigitalVenue } from "./eventscase/digital-venue";

export const projects: Project[] = [eventscaseDigitalVenue];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
