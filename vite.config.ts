import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs"

const https = {
  key: fs.readFileSync('./example.com-key.pem'),
  cert: fs.readFileSync('./example.com.pem')
}

// https://vitejs.dev/config/
export default defineConfig({
  server:{https},
  plugins: [react()],
})
