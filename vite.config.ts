import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs"

// https://vitejs.dev/config/
export default defineConfig({
  server:{ https:{
    key:fs.readFile(__dirname+"ssl/cert.key"),
    cert:fs.readFile(__dirname+"ssl/cert.pem")
  } },
  plugins: [react()],
})
