import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

const isProduction = process.env.NODE_ENV === 'production'

const profiling = isProduction && {
  'react-dom/client': 'react-dom/profiling',
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('🟡 현재의 모드는?', mode)

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
