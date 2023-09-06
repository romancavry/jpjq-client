import path from 'path';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import linaria from '@linaria/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      sourceMap: true,
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      core: path.resolve(__dirname, './src/core'),
      screens: path.resolve(__dirname, './src/screens'),
    },
  },
});
