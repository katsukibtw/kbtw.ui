// vite.config.ts
import { defineConfig } from "file:///home/katsuki/projects/kbtw.ui/node_modules/.pnpm/vite@5.4.10_@types+node@22.8.5_sass-embedded@1.80.6_sass@1.80.5/node_modules/vite/dist/node/index.js";
import react from "file:///home/katsuki/projects/kbtw.ui/node_modules/.pnpm/@vitejs+plugin-react@4.3.3_vite@5.4.10_@types+node@22.8.5_sass-embedded@1.80.6_sass@1.80.5_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { extname, relative, resolve } from "path";
import dts from "file:///home/katsuki/projects/kbtw.ui/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.8.5_rollup@4.24.3_typescript@5.6.3_vite@5.4.10_@types+no_vwdi4jioveaih6mhrh7krx7yoe/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///home/katsuki/projects/kbtw.ui/node_modules/.pnpm/vite-plugin-lib-inject-css@2.1.1_vite@5.4.10_@types+node@22.8.5_sass-embedded@1.80.6_sass@1.80.5_/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import { glob } from "file:///home/katsuki/projects/kbtw.ui/node_modules/.pnpm/glob@11.0.0/node_modules/glob/dist/esm/index.js";
import { fileURLToPath } from "url";
import sassDts from "file:///home/katsuki/projects/kbtw.ui/node_modules/.pnpm/vite-plugin-sass-dts@1.3.29_postcss@8.4.47_prettier@3.3.3_sass-embedded@1.80.6_vite@5.4.10_@t_icq6yocgu6szs6w23iacwgxw7e/node_modules/vite-plugin-sass-dts/dist/index.js";
var __vite_injected_original_dirname = "/home/katsuki/projects/kbtw.ui";
var __vite_injected_original_import_meta_url = "file:///home/katsuki/projects/kbtw.ui/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ["lib"],
      tsconfigPath: resolve(__vite_injected_original_dirname, "tsconfig.lib.json")
    }),
    sassDts({
      enabledMode: ["development", "production"],
      sourceDir: resolve(__vite_injected_original_dirname, "lib"),
      outputDir: resolve(__vite_injected_original_dirname, "dist")
    })
  ],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react-jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}", { ignore: ["lib/**/*.d.ts"] }).map((file) => [
          relative("lib", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    },
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/index.ts"),
      formats: ["es"]
    }
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./lib")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9rYXRzdWtpL3Byb2plY3RzL2tidHcudWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2thdHN1a2kvcHJvamVjdHMva2J0dy51aS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9rYXRzdWtpL3Byb2plY3RzL2tidHcudWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgZXh0bmFtZSwgcmVsYXRpdmUsIHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tIFwidml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3NcIjtcbmltcG9ydCB7IGdsb2IgfSBmcm9tIFwiZ2xvYlwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCBzYXNzRHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1zYXNzLWR0c1wiO1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGxpYkluamVjdENzcygpLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbXCJsaWJcIl0sXG4gICAgICB0c2NvbmZpZ1BhdGg6IHJlc29sdmUoX19kaXJuYW1lLCBcInRzY29uZmlnLmxpYi5qc29uXCIpLFxuICAgIH0pLFxuICAgIHNhc3NEdHMoe1xuICAgICAgZW5hYmxlZE1vZGU6IFtcImRldmVsb3BtZW50XCIsIFwicHJvZHVjdGlvblwiXSxcbiAgICAgIHNvdXJjZURpcjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwibGliXCIpLFxuICAgICAgb3V0cHV0RGlyOiByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWpzeC1ydW50aW1lXCJdLFxuICAgICAgaW5wdXQ6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgZ2xvYlxuICAgICAgICAgIC5zeW5jKFwibGliLyoqLyoue3RzLHRzeH1cIiwgeyBpZ25vcmU6IFtcImxpYi8qKi8qLmQudHNcIl0gfSlcbiAgICAgICAgICAubWFwKChmaWxlKSA9PiBbXG4gICAgICAgICAgICByZWxhdGl2ZShcImxpYlwiLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gZXh0bmFtZShmaWxlKS5sZW5ndGgpKSxcbiAgICAgICAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgICBdKSxcbiAgICAgICksXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tuYW1lXVtleHRuYW1lXVwiLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJsaWIvaW5kZXgudHNcIiksXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL2xpYlwiKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRRLFNBQVMsb0JBQW9CO0FBQ3pTLE9BQU8sV0FBVztBQUNsQixTQUFTLFNBQVMsVUFBVSxlQUFlO0FBQzNDLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLFlBQVk7QUFDckIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxhQUFhO0FBUHBCLElBQU0sbUNBQW1DO0FBQTJILElBQU0sMkNBQTJDO0FBVXJOLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxJQUNiLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxLQUFLO0FBQUEsTUFDZixjQUFjLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsSUFDdEQsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ04sYUFBYSxDQUFDLGVBQWUsWUFBWTtBQUFBLE1BQ3pDLFdBQVcsUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDbkMsV0FBVyxRQUFRLGtDQUFXLE1BQU07QUFBQSxJQUN0QyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsbUJBQW1CO0FBQUEsTUFDdkMsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUNHLEtBQUsscUJBQXFCLEVBQUUsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ3ZELElBQUksQ0FBQyxTQUFTO0FBQUEsVUFDYixTQUFTLE9BQU8sS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBLFVBQ2pFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNMO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
