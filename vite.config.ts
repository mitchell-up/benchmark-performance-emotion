import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  const profiling = isProduction && {
    'react-dom/client': 'react-dom/profiling',
  }

  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        plugins: [['@swc/plugin-emotion', {}]],
      }),
      TanStackRouterVite(),
    ],
    base: '/benchmark-performance-emotion/',
    resolve: {
      alias: {
        ...profiling,
      },
    },
  }
})
