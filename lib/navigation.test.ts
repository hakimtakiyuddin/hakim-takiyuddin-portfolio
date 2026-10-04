import { describe, expect, it } from "vitest";
import { nextSection, parseHash } from "./navigation";

describe("nextSection", () => {
  it("moves down with ArrowDown and j", () => {
    expect(nextSection("whoami", "ArrowDown")).toBe("experience");
    expect(nextSection("whoami", "j")).toBe("experience");
  });

  it("moves up with ArrowUp and k", () => {
    expect(nextSection("experience", "ArrowUp")).toBe("whoami");
    expect(nextSection("experience", "k")).toBe("whoami");
  });

  it("wraps at both ends", () => {
    expect(nextSection("contact", "j")).toBe("whoami");
    expect(nextSection("whoami", "k")).toBe("contact");
  });

  it("jumps with number keys 1-6", () => {
    expect(nextSection("whoami", "1")).toBe("whoami");
    expect(nextSection("whoami", "3")).toBe("highlights");
    expect(nextSection("whoami", "6")).toBe("contact");
  });

  it("ignores out-of-range numbers and other keys", () => {
    expect(nextSection("whoami", "0")).toBeNull();
    expect(nextSection("whoami", "7")).toBeNull();
    expect(nextSection("whoami", "x")).toBeNull();
    expect(nextSection("whoami", "J")).toBeNull();
    expect(nextSection("whoami", "Enter")).toBeNull();
  });
});

describe("parseHash", () => {
  it("reads ids with or without #", () => {
    expect(parseHash("#experience")).toBe("experience");
    expect(parseHash("skills")).toBe("skills");
  });

  it("is case-insensitive and percent-decodes", () => {
    expect(parseHash("#Highlights")).toBe("highlights");
    expect(parseHash("#%68ighlights")).toBe("highlights");
  });

  it("returns null for empty, unknown, or malformed hashes without throwing", () => {
    expect(parseHash("")).toBeNull();
    expect(parseHash("#")).toBeNull();
    expect(parseHash("#nope")).toBeNull();
    expect(parseHash("#skills?x=1")).toBeNull();
    expect(parseHash("#%E0%A4%A")).toBeNull();
  });
});
