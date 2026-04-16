const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer("css").tap((args) => {
        args[0].minimizerOptions.preset = ["default", { calc: false }];
        return args;
      });
    }
  },
});
