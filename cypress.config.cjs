const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({

  // viewportWidth: 375,
  // viewportHeight: 812,
  numTestsKeptInMemory: 10,
  experimentalMemoryManagement: true,
  defaultCommandTimeout: 30000,
  video: true, // Enable video recording
  screenshotsFolder: 'cypress/screenshots', // Default path for screenshots
  videosFolder: 'cypress/videos',

  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
