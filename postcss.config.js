// postcss.config.js
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";

export default {
  plugins: [
    postcssPresetEnv({
      stage: 2,
    }),
    cssnano({
      preset: "default",
    }),
  ],
};
