/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local', // Certifique-se de que os módulos CSS estão funcionando de forma "local"
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Gera nomes de classes legíveis
    },
  },
})
