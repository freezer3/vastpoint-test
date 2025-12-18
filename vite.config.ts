import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Plugin to copy index.html to 404.html for GitHub Pages SPA support
const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle: () => {
    const distPath = path.resolve(__dirname, 'dist');
    const indexPath = path.join(distPath, 'index.html');
    const notFoundPath = path.join(distPath, '404.html');
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
      console.log('Created 404.html for GitHub Pages SPA fallback');
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && copy404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
