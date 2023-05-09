import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "images/branding/favicon.ico",
        "images/branding/apple-touch-icon.png",
        "images/branding/masked-icon.svg"
      ],
      manifest: {
        name: "MarketHub",
        short_name: "MarketHub",
        description: "MarketHub Webshop, maintained and hosted by Andres Vergauwen & Mike Livis",
        icons: [
          {
            src: "images/branding/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "images/branding/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone"
      }
    }),
    svgr()
  ]
})
