import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs"

const https = {
  key: fs.readFileSync('./ssl/ca.key'),
  cert: fs.readFileSync('./ssl/ca.crt')
}

// https://vitejs.dev/config/
export default defineConfig({
  server:{https},
  plugins: [react()],
  build:{
    outDir:"../dist/app"
  }
})
