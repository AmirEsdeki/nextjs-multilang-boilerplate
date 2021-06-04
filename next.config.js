const { i18n } = require("./next-i18next.config");

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    host: process.env.HOST,
  },
  i18n,
};
