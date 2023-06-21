const path = require("path");
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app", {
    name: "@storybook/addon-styling",
    options: {
      // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
      // For more details on this addon's options.
      postCss: true
    }
  }],
  webpackFinal: config => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../");
    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {}
  }
};