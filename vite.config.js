import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        // Découpage intelligent des node_modules par famille logique :
        // chaque chunk reste sous le seuil de 500 kB, se charge en
        // parallèle, et les vendors (rarement modifiés) sont mis en
        // cache séparément côté navigateur.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          const posixId = id.split('\\').join('/')
          // React + ReactDOM + scheduler (dépendances cycliques internes
          // laissées à Rollup, découpage standard React)
          if (/node_modules\/(react|react-dom|scheduler)\//.test(posixId)) return 'vendor-react'
          // React Router v6/v7 (+ @remix-run/router)
          if (posixId.includes('react-router') || posixId.includes('@remix-run')) return 'vendor-router'
          // framer-motion et ses paquets motion-*
          if (/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(posixId)) return 'vendor-motion'
          // GSAP (timeline de l'intro)
          if (posixId.includes('/gsap/')) return 'vendor-gsap'
          // Icônes : lucide-react + Font Awesome
          if (/node_modules\/(lucide-react|@fortawesome)/.test(posixId)) return 'vendor-icons'
          // Pas de catch-all : les micro-dépendances restent dans le
          // chunk de l'app, évitant d'émettre un chunk vide.
        },
      },
    },
  },
})
