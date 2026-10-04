import { describe, expect, it } from "vitest";
import { content } from "./content";
import { isSectionId, SECTION_IDS } from "./sections";

describe("sections", () => {
  it("has six unique ids in spec order", () => {
    expect(SECTION_IDS).toEqual([
      "whoami",
      "experience",
      "highlights",
      "skills",
      "education",
      "contact",
    ]);
  });

  it("recognises only known ids", () => {
    expect(isSectionId("skills")).toBe(true);
    expect(isSectionId("Skills")).toBe(false);
    expect(isSectionId("")).toBe(false);
  });
});

describe("content", () => {
  it("never contains the phone number", () => {
    expect(JSON.stringify(content)).not.toMatch(/2335146|\+?6016/);
  });

  it("lists experience newest first: Payment Network (PayNet), Ørsted, Setel", () => {
    expect(content.experience.map((c) => c.name)).toEqual([
      "Payment Network (PayNet)",
      "Ørsted Services Malaysia",
      "Setel",
    ]);
    expect(content.experience[2].roles.map((r) => r.team)).toEqual([
      "Treasury Team",
      "Payment Engine Team",
      "Acquiring Team",
    ]);
  });

  it("has 5 work and 3 activity highlights, each fully filled in", () => {
    const kinds = content.highlights.map((h) => h.kind);
    expect(kinds.filter((k) => k === "work")).toHaveLength(5);
    expect(kinds.filter((k) => k === "activity")).toHaveLength(3);
    for (const h of content.highlights) {
      expect(h.problem.length).toBeGreaterThan(0);
      expect(h.built.length).toBeGreaterThan(0);
      expect(h.stack.length).toBeGreaterThan(0);
    }
  });

  it("serves the CV from the site itself", () => {
    expect(content.contact.cvPath).toBe("/cv.pdf");
    expect(content.contact.cvFilename).toBe("Hakim_Takiyuddin_CV.pdf");
  });
});
