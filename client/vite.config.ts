import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   // host: '0.0.0.0',
  //   proxy: {
  //     '/api': {
  //       // target: 'http://localhost:8080',
  //       // target: 'http://192.168.191.94:8080',
  //       target: 'http://139.59.134.132/',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //     }
  //   }
  // }
})
