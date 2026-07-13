import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Set base to repo name so asset paths resolve correctly on GitHub Pages
export default defineConfig({
  base: '/gowtham-portfolio/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
