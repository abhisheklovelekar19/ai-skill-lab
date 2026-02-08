import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Ignore all generated static export files
    "*.html",
    "*.txt",
    "_next/**",
    "blog/**/*.html",
    "courses/**/*.html",
    "pricing/**/*.html",
    "cancel/**/*.html",
    "success/**/*.html",
  ]),
  {
    rules: {
      // Disable React unescaped entities rule for apostrophes
      "react/no-unescaped-entities": "off",
      // Disable Tailwind CSS class suggestions
      "@next/next/no-duplicate-class": "off",
    }
  }
]);

export default eslintConfig;
