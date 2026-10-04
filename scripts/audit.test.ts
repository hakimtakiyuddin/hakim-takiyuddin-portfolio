import { describe, expect, it } from "vitest";
import { findBlocking } from "./audit.mjs";

const advisory = (id: string, severity: string) => ({
  source: 1,
  title: `advisory ${id}`,
  url: `https://github.com/advisories/${id}`,
  severity,
});

const report = (...vias: object[]) => ({
  vulnerabilities: Object.fromEntries(vias.map((via, i) => [`pkg${i}`, { severity: "high", via: [via, "some-parent"] }])),
});

describe("findBlocking", () => {
  const allow = { "GHSA-allowed": "accepted for a reason" };

  it("blocks high and critical advisories that are not allowlisted", () => {
    const { blocking } = findBlocking(report(advisory("GHSA-new-high", "high"), advisory("GHSA-new-crit", "critical")), allow);
    expect(blocking.map((a) => a.id)).toEqual(["GHSA-new-high", "GHSA-new-crit"]);
  });

  it("lets an allowlisted advisory through", () => {
    expect(findBlocking(report(advisory("GHSA-allowed", "high")), allow).blocking).toEqual([]);
  });

  it("ignores moderate and low advisories", () => {
    expect(findBlocking(report(advisory("GHSA-mod", "moderate"), advisory("GHSA-low", "low")), allow).blocking).toEqual([]);
  });

  it("reports each advisory once even when many packages propagate it", () => {
    const a = advisory("GHSA-dup", "high");
    expect(findBlocking(report(a, a, a), allow).blocking).toHaveLength(1);
  });

  it("rejects an npm error response instead of treating it as a clean report", () => {
    const registryFailure = { error: { code: "ENOTFOUND", summary: "request to https://registry.npmjs.org failed" } };
    expect(() => findBlocking(registryFailure, allow)).toThrow(/ENOTFOUND/);
  });

  it("rejects npm 11's error shape, where the reason is in a top-level message", () => {
    const npm11Failure = {
      message: "request to http://127.0.0.1:9/-/npm/v1/security/advisories/bulk failed, reason: connect ECONNREFUSED",
      error: { summary: "", detail: "" },
    };
    expect(() => findBlocking(npm11Failure, allow)).toThrow(/ECONNREFUSED/);
  });

  it("rejects a report without a vulnerabilities object", () => {
    expect(() => findBlocking({}, allow)).toThrow(/invalid npm audit report/);
    expect(() => findBlocking({ vulnerabilities: null }, allow)).toThrow(/invalid npm audit report/);
    expect(() => findBlocking(null, allow)).toThrow(/invalid npm audit report/);
  });

  it("flags allowlist entries that no longer appear so they can be removed", () => {
    expect(findBlocking(report(), allow).stale).toEqual(["GHSA-allowed"]);
  });
});
