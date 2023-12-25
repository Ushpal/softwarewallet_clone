import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import rollupNodePolyFill from "rollup-plugin-polyfill-node";
import { NodeGlobalsPolyfillPlugin as GlobalsPolyfills } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ registerType: "autoUpdate" }),
    GlobalsPolyfills({
      process: true,
      buffer: true,
    }),
    NodeModulesPolyfillPlugin(),
  ],

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [],
    },
  },
  resolve: {
    alias: {
      stream: "stream-browserify",
      https: "agent-base",
      process: "process/browser",
      zlib: "browserify-zlib",
      util: "util",
      // comment above line and uncomment below line if it doesnot work
      //     http:'agent-base',
    },
  },

  define: {
    "process.env": {},
    global: "window",
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
});
