import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs"

// https://vitejs.dev/config/
export default defineConfig({
  async server(){
    const key = await fs.readFile(__dirname + '/ssl/cert.key')
    const cert = await fs.readFile(__dirname + '/ssl/cert.pem')
    return { https: { key, cert } }
  },
  plugins: [react()],
})
