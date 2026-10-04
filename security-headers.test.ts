import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

type Header = { key: string; value: string };
const config = JSON.parse(readFileSync("vercel.json", "utf8")) as {
  headers: { source: string; headers: Header[] }[];
};
const all = config.headers.find((h) => h.source === "/(.*)")?.headers ?? [];
const get = (key: string) => all.find((h) => h.key === key)?.value;

describe("vercel.json security headers", () => {
  it("sets a CSP that blocks framing, plugins, eval and foreign origins", () => {
    const csp = get("Content-Security-Policy") ?? "";
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("base-uri 'self'");
    expect(csp).not.toContain("unsafe-eval");
    expect(csp).not.toMatch(/https?:\/\//);
  });

  it("sets the standard hardening headers", () => {
    expect(get("X-Content-Type-Options")).toBe("nosniff");
    expect(get("X-Frame-Options")).toBe("DENY");
    expect(get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
    expect(get("Permissions-Policy")).toContain("camera=()");
  });
});
