import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Security rules: block XSS and code-injection sinks outright.
    rules: {
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "react/no-danger": "error",
      "react/jsx-no-script-url": "error",
      "react/jsx-no-target-blank": ["error", { warnOnSpreadAttributes: true }],
    },
  },
  globalIgnores([".next/**", "out/**", "next-env.d.ts", ".superpowers/**"]),
]);
