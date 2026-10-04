// Dev-dependency audit gate: fails on any high/critical advisory unless it is
// explicitly accepted below. Production deps are gated separately (moderate+)
// by `npm audit --omit=dev` in the "security" script.
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

// Accepted advisories: GHSA id -> why it's acceptable and when to remove it.
export const ALLOWLIST = {
  "GHSA-vfj7-8cjw-p6xm":
    "braces DoS via eslint-config-next > @next/eslint-plugin-next > fast-glob > micromatch. " +
    "Dev-only lint tooling; only our own ESLint glob patterns reach it. No patched version exists. " +
    "Accepted 2026-10-04. Remove once eslint-config-next no longer pulls in vulnerable braces.",
};

const BLOCKING = new Set(["high", "critical"]);

/** Returns non-allowlisted high/critical advisories, plus allowlist entries no longer reported. */
export function findBlocking(report, allowlist) {
  // npm prints {"error": ...} when the registry fails. Never mistake that for a clean report.
  if (report?.error) {
    const { code, summary, detail } = report.error;
    const reason = [code, summary, detail, report.message].filter(Boolean).join(" ") || "unknown error";
    throw new Error(`npm audit failed: ${reason}`);
  }
  if (typeof report?.vulnerabilities !== "object" || report.vulnerabilities === null) {
    throw new Error("invalid npm audit report: missing vulnerabilities");
  }
  const seen = new Map();
  for (const vuln of Object.values(report.vulnerabilities)) {
    for (const via of vuln.via) {
      if (typeof via !== "object") continue; // a string is just a parent package name
      const id = via.url?.split("/").pop() ?? String(via.source);
      seen.set(id, { id, severity: via.severity, title: via.title, url: via.url });
    }
  }
  const blocking = [...seen.values()].filter((a) => BLOCKING.has(a.severity) && !(a.id in allowlist));
  const stale = Object.keys(allowlist).filter((id) => !seen.has(id));
  return { blocking, stale };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  let json;
  try {
    json = execFileSync("npm", ["audit", "--json"], { encoding: "utf8" });
  } catch (error) {
    json = error.stdout; // npm audit exits non-zero whenever it finds anything
  }
  let result;
  try {
    result = findBlocking(JSON.parse(json), ALLOWLIST);
  } catch (error) {
    console.error(`audit: could not get a valid audit report, failing closed. ${error.message}`);
    process.exit(1);
  }
  const { blocking, stale } = result;

  for (const id of stale) console.warn(`audit: allowlisted ${id} is no longer reported, remove it from scripts/audit.mjs`);
  for (const id of Object.keys(ALLOWLIST)) if (!stale.includes(id)) console.log(`audit: accepted ${id}`);

  if (blocking.length) {
    for (const a of blocking) console.error(`audit: ${a.severity.toUpperCase()} ${a.id} ${a.title} ${a.url}`);
    process.exit(1);
  }
  console.log("audit: no unaccepted high/critical advisories");
}
