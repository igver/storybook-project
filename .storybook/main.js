const path = require("path");

module.exports = {
  staticDirs: ["../public"],
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-react-router-v6",
  ],
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // resolve baseUrl path set in tsconfig
    // config.resolve.modules = [
    //   ...(config.resolve.modules || []),
    //   path.resolve(__dirname, '../src'),
    // ];
    // include scss files
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true, //scss is considered a side effect of sass
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      // include: path.resolve(__dirname, '../src'), // I didn't need this path set
    });
    return config;
  },
};
