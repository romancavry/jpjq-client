import path from 'path';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import linaria from '@linaria/vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      sourceMap: true,
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      api: path.resolve(__dirname, './src/api'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      core: path.resolve(__dirname, './src/core'),
      modules: path.resolve(__dirname, './src/modules'),
      screens: path.resolve(__dirname, './src/screens'),
      uikit: path.resolve(__dirname, './src/uikit'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
});
