import { defineConfig } from 'vite';

export default defineConfig({
  // Server configurations
  server: {
    port: 3000, // The port number where the dev server will run
    open: true, // Automatically open the app in the browser
  },
  // Build configurations
  build: {
    outDir: 'dist', // The directory where the build output will be generated
    sourcemap: true, // Generate source maps for easier debugging
    rollupOptions: {
      // Options to customize Rollup, which Vite uses internally
      input: 'index.html', // Entry point for the build
    },
  },
  // CSS configurations
  css: {
    preprocessorOptions: {
      scss: {
        // SCSS specific options
        additionalData: `@import "src/styles/variables.scss";`, // Automatically import variables or mixins across all SCSS files
      },
    },
  },
  // Plugins
  plugins: [
    // You can add Vite plugins here
  ],
  // Resolve alias configurations
  resolve: {
    alias: {
      '@': '/src', // Alias for the src directory
    },
  },
});
