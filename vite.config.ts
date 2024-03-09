import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import path from 'path'

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    define: {
      globalThis: 'window'
    },
    resolve: {
      alias: {
        process: 'process/browser',
        '@': path.resolve(__dirname, 'src'),
        '@@': path.resolve(__dirname, 'src/components')
      }
    },
    plugins: [react(), nodePolyfills()],
    server: {
      port: 8888,
      host: '0.0.0.0'
    }
  }
})
