// const { defineConfig } = require("cypress");
// require('dotenv').config()

// module.exports = defineConfig({

//   // viewportWidth: 375,
//   // viewportHeight: 812,
//   numTestsKeptInMemory: 10,
//   experimentalMemoryManagement: true,
//   defaultCommandTimeout: 30000,
//   video: true, // Enable video recording
//   screenshotsFolder: 'cypress/screenshots', // Default path for screenshots
//   videosFolder: 'cypress/videos',

//   e2e: {
//     setupNodeEvents(on, config) {
//     },
//   },
// });

const { defineConfig } = require('cypress');

module.exports = defineConfig({

  numTestsKeptInMemory: 10,
  experimentalMemoryManagement: true,
  defaultCommandTimeout: 30000,
  video: true, // Enable video recording
  screenshotsFolder: 'cypress/screenshots', // Default path for screenshots
  videosFolder: 'cypress/videos', // Default path for videos
  reporter: 'mochawesome', // Specify the reporter
  reporterOptions: {
    reportDir: 'cypress/reports', // Folder for saving reports
    overwrite: false,
    html: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Add node event listeners here if needed
    },
  },
});