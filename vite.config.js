// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 支持Naive UI的组件名
          isCustomElement: (tag) => tag.startsWith("n-"),
        },
      },
    }),
  ],
});
