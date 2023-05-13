import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { defineConfig } from "vite";
import preload from "vite-plugin-preload";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: "/src/components",
      },
      {
        find: "@assets",
        replacement: "/src/assets",
      },
      {
        find: "@router",
        replacement: "/router",
      },
      {
        find: "@modules",
        replacement: "/modules",
      },
    ],
  },
  plugins: [
    preload(),
    chunkSplitPlugin(),
    ViteWebfontDownload(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100,
    }),
    react(),
  ],
});
