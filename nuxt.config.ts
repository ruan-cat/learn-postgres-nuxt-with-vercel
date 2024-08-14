/**
 * FIXME: 不知道怎么在nuxt内配置以下内容
 *
 * @see https://github.com/vercel/storage/tree/main/packages/postgres#a-note-for-vite-users
 */
// import dotenvExpand from "dotenv-expand";
// import { loadEnv, defineConfig } from "vite";
// const mode = process.env.NODE_ENV || "development";
// // This check is important!
// if (mode === "development") {
//   const env = loadEnv(mode, process.cwd(), "");
//   dotenvExpand.expand({ parsed: env });
// }

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
