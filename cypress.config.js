module.exports = {
  testMatch: [
    "**/__tests__/**/*.js",
    "**/?(*.)+(spec|test|cy).[jt]s?(x)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
