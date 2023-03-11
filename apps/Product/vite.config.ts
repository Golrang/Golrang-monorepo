import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },
  build: {
    outDir: './build',
    rollupOptions: {
      // external: ['antd/es/auto-complete/style', 'antd/es/theme/style'],
    },
  },
  server: {
    port: 3000,
    proxy: {
      '*': {
        target: 'http://localhost:8081',
      },
    },
  },
});
