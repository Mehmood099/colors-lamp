import js from "@eslint/js";
import globals from "globals";

export default [
  {
    // Third-party vendored library
    ignores: ["public/js/md5.js"]
  },
  js.configs.recommended,
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "no-unused-vars": ["error", { "vars": "local" }],
      "no-var": "error",
      "prefer-const": "error",
      "eqeqeq": "error",
      "semi": ["error", "always"],
      "no-dupe-keys": "error"
    }
  }
];
