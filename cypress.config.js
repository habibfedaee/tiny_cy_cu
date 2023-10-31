const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("./cypress/plugins/index.js")(on, config);

      on("before:browser:launch", (browser = {}, launchOptions) => {
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions.args); // print all current args

        if (browser.family === "chromium" && browser.name !== "electron") {
          // auto open devtools
          launchOptions.args.push("--incognito");
          launchOptions.args.push(
            '--disable-blink-features="BlockCredentialedSubresources"'
          );
        }

        if (browser.family === "firefox") {
          // auto open devtools
          launchOptions.args.push("--incognito");
        }

        if (browser.name === "edge") {
          // auto open devtools
          launchOptions.preferences.incognito = true;
        }

        if (browser.name === "electron") {
          // auto open devtools
          launchOptions.preferences.incognito = true;
        }

        // whatever you return here becomes the launchOptions
        return launchOptions;
      });
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://saucedemo.com",
    //baseUrl: 'https://airport-auth.apps.dr1a1.paasdev.delta.com',
    // baseUrl: 'https://airport-auth-si.delta.com',
  },
});
