import type { Project } from "~/types/project";

import { project as eventscaseDigitalVenue } from "./eventscase/digital-venue";
import { project as eventscaseDesignSystem } from "./eventscase/design-system";
import { project as marketgooContentAutoOptimization } from "./marketgoo/content-auto-optimization";

export const projects: Project[] = [
  eventscaseDigitalVenue,
  eventscaseDesignSystem,
  marketgooContentAutoOptimization,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
