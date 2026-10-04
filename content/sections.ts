export const SECTION_IDS = [
  "whoami",
  "experience",
  "highlights",
  "skills",
  "education",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const DEFAULT_SECTION: SectionId = "whoami";

export function isSectionId(value: string): value is SectionId {
  return (SECTION_IDS as readonly string[]).includes(value);
}
