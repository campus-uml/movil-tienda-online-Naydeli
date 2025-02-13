/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Asegura que estás en el entorno correcto
    coverage: {
      provider: 'v8', // Usa c8 para generar el coverage
      reporter: ['text', 'html'], // Muestra la cobertura en la terminal y genera un informe en HTML
    },

  }
  
})
