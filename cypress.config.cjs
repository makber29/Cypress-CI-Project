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
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  numTestsKeptInMemory: 10,
  experimentalMemoryManagement: true,
  defaultCommandTimeout: 30000,
  video: true, // Enable video recording
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  reporter: 'cypress-allure-plugin', // Use Allure reporter

  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config); // Enable Allure plugin
      return config;
    },
  },

  reporterOptions: {
    allure: {
      outputDir: 'cypress/reports/allure-results', // Allure results output directory
      overwrite: false,
      clean: true,
    },
  },
});