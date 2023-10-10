import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: ['src/components/index.ts', 'src/assets/theme.module.css'],
      external: ['react', 'react-dom'],
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ],
    }
  }
})
