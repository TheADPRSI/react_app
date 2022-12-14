// https://vitejs.dev/config/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

//

// Manifest
const manifest: Partial<ManifestOptions> = {
  name: "",
  short_name: "",
  description: "",

  icons: [
    {
      src: "favicon.ico",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/x-icon",
    },
    {
      src: "logo192.png",
      type: "image/png",
      sizes: "192x192",
    },
    {
      src: "logo512.png",
      type: "image/png",
      sizes: "512x512",
    },
  ],

  start_url: ".",

  theme_color: "black",
  background_color: "white",
  orientation: "natural",
  display: "standalone",
};
//

//
//
//

export default defineConfig({
  plugins: [
    react(),
    svgr(),

    VitePWA({
      strategies: "injectManifest",
      manifest,
    }),
  ],

  server: {
    port: 3000,
  },

  build: {
    outDir: "build",
  },
});
