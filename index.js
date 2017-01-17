module.exports = {
  "plugins": [
    "stylelint-scss",
  ],
  "extends": [
    "stylelint-config-property-sort-order-smacss",
  ],
  "rules": {
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "numeric",
    "indentation": 4,
    "max-empty-lines": 2,
    "max-line-length": 100,
    "max-nesting-depth": 3,
    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-indistinguishable-colors": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "no-unsupported-browser-features": [ true, {
      browsers: "last 2 versions, Explorer > 10, > 1%, not OperaMini all, not Samsung > 0, not UCAndroid > 0",
      ignore: [ "rem", "flexbox" ],
      severity: "warning",
    } ],
  },
}
