import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

import path from "path";
import react from "@vitejs/plugin-react-swc";

// Manifest config
const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png"],
  manifest: {
    name: "PlayPal",
    short_name: "PlayPal",
    description: "Club de Santa Cruz",
    icons: [
      {
        src: "/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn), TanStackRouterVite()],
  base: "./",
  server: {},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
