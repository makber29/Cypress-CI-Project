// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import '@shelex/cypress-allure-plugin';

// Attach screenshots to Allure on failure
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    const videoFileName = `${runnable.parent.title}.mp4`;
    
    // Attach screenshot
    cy.allure().logStep('Adding screenshot');
    cy.allure().attachScreenshot(screenshotFileName);

    // Attach video if available
    if (Cypress.config('video')) {
      cy.allure().logStep('Adding video');
      cy.allure().attachVideo(videoFileName);
    }
  }
});