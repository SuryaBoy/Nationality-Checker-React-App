import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base Public path for the application (useful for deployment)
  base:'./',
  plugins: [react()],
})
