import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.PNG'], // This will include PNG files in the build process

  plugins: [react()],
})
