import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    tailwindcss()
  ],
  //base: '/mundojueoslyw/'  //el respositorio de github donde se va a desplegar el proyecto
  base: './' // <-- Esto automatiza TODO. Hace que los enlaces usen rutas relativas.


})
