import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import pkg from './package.json';

export default defineConfig({
  plugins: [svelte()],
  define: {
    'import.meta.env.VITE_PACKAGE_VERSION': JSON.stringify(pkg.version),
  },
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $app: path.resolve('./src/app'),
    },
  },
});
