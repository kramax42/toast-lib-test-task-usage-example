const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    video: false,
    baseUrl: 'http://localhost:8090',
    setupNodeEvents(on) {
      const options = {
        webpackOptions: {
          resolve: {
            alias: {
              '@': path.resolve(__dirname, './src/'),
            },
          },
        },
        watchOptions: {},
      };
      on('file:preprocessor', webpack(options));
    },
  },
});
