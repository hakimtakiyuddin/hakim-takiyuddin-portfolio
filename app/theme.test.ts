import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync("app/globals.css", "utf8");
const token = (name: string) => {
  const hex = css.match(new RegExp(`--color-${name}:\\s*(#[0-9a-f]{6})`, "i"))?.[1];
  if (!hex) throw new Error(`missing --color-${name}`);
  return hex;
};

// WCAG 2.x relative luminance and contrast ratio.
const luminance = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

describe("theme contrast (WCAG AA 4.5:1)", () => {
  const text = ["fg", "muted", "purple", "pink", "cyan", "green", "orange", "red"];
  for (const fg of text) {
    for (const bg of ["bg", "bg-deep"]) {
      it(`${fg} on ${bg}`, () => {
        expect(contrast(token(fg), token(bg))).toBeGreaterThanOrEqual(4.5);
      });
    }
  }

  it("muted on the selected row", () => {
    expect(contrast(token("muted"), token("sel"))).toBeGreaterThanOrEqual(4.5);
  });
});
