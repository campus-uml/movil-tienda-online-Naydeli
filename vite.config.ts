/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // @ts-expect-error-error
    global: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts'
  }
})
