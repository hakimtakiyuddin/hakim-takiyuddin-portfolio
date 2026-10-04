import { isSectionId, SECTION_IDS, type SectionId } from "@/content/sections";

export function nextSection(current: SectionId, key: string): SectionId | null {
  const count = SECTION_IDS.length;
  const index = SECTION_IDS.indexOf(current);

  if (key === "ArrowDown" || key === "j") return SECTION_IDS[(index + 1) % count];
  if (key === "ArrowUp" || key === "k") return SECTION_IDS[(index - 1 + count) % count];

  if (/^[1-9]$/.test(key)) {
    const target = Number(key) - 1;
    return target < count ? SECTION_IDS[target] : null;
  }

  return null;
}

export function parseHash(hash: string): SectionId | null {
  let raw = hash.replace(/^#/, "");
  try {
    raw = decodeURIComponent(raw);
  } catch {
    return null;
  }
  raw = raw.trim().toLowerCase();
  return isSectionId(raw) ? raw : null;
}
