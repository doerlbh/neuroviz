// https://vitejs.dev/config/
export default defineConfig({
  base: "/Stakepool-Frontend/",
  plugins: [vue()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "node_modules"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});