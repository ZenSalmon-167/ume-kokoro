import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // กำหนดให้ 'process.env' เป็น Object เปล่าเพื่อป้องกัน Error 'process is not defined'
    // และใส่ DATABASE_URL เข้าไปโดยตรง
    'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL || '')
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});