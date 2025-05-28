import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://ganugulatejasri.github.io/Tejasri-Ganugula/', // ← your GitHub repo name here
  plugins: [react()],
});
