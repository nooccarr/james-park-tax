import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const { PORT = 3000 } = process.env;

export default defineConfig({
  plugins: [react()],
  base: '/',
  // build: {
  //   outDir: 'dist', // The directory to output the built files in
  // },
  server: {
    port: 3000, // client port
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
});
