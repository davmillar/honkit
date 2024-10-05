// eslint.config.mjs
import globals from "globals";
import eslint from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    "ignores": [
      "docs/**",
      "_book/**",
      "**/node_modules/**",
      "packages/@honkit/**/test",
      "packages/@honkit/**/__tests__",
      "examples/**",
      "theme-default/",
      "theme/",
      "packages/**/lib",
      "packages/**/__tests__",
      "__fixtures__",
      "__snapshots__",
      ".yarn",
      ".nx/",
      "**/_assets/"
    ]
  },
  eslint.configs.recommended,
  {
    "plugins": {
      "@stylistic/js": stylisticJs,
    },
    "languageOptions": {
      "sourceType": "module",
      "globals": {
        ...globals.browser,
        ...globals.jest,
        ...globals.mocha,
        ...globals.node,
        "expect": true
      },
      "parserOptions": {
        "ecmaVersion": 2020
      }
    },
    "rules": {
      "@stylistic/js/indent": "off",
      "@stylistic/js/quotes": "off",
      "linebreak-style": "off",
      "no-unused-vars": [
        2,
        {
          "vars": "all",
          "args": "none"
        }
      ],
      "no-useless-escape": "off",
      // @TODO: Cleanup code and re-enable these
      // "no-var": "error",
      // "prefer-arrow-callback": "error",
      // "prefer-const": "error",
      // "prefer-template": "error",
      "semi": "off",
      "spaced-comment": [
        2,
        "always"
      ],
      // @TODO: Cleanup code and remove these.
      "no-var": "off",
      "prefer-arrow-callback": "off",
      "prefer-const": "off",
      "prefer-template": "off",
    }
  }
];
