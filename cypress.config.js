const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://qaplayground.dev/#apps",
  },
  e2e: {
    specPattern: "cypress/testingFolders/*.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
