import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    outDir: 'dist/types',
    include: ["src/components/*/*.{ts,tsx}", "src/components/index.ts"],
    beforeWriteFile: async (filePath, content) => {      
      return { filePath: filePath.replace('/components', ''), content };
    }
  })],
  build: {
    rollupOptions: {
      input: 'src/library-export.ts',
      external: ['react', 'react-dom'],
    },
    lib: {
      entry: resolve(__dirname, 'src/library-export.ts'),
      name: 'BrawlUI',
      fileName: (format) => `index.${format}.js`,
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
