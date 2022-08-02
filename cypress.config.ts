import { defineConfig } from 'cypress';

export default defineConfig({
  port: 4173,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
