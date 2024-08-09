// vite.es.config.ts
import { defineConfig } from "file:///F:/yk-design/yk-design/yk-design-ui/node_modules/.pnpm/vite@4.5.3_@types+node@20.12.12_sass@1.77.2/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/yk-design/yk-design/yk-design-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.3_vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import dts from "file:///F:/yk-design/yk-design/yk-design-ui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.12.12_typescript@5.4.5_vite@4.5.3/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\yk-design\\yk-design\\yk-design-ui";
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      outDir: "./yk-design/types"
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }],
    extensions: [".ts", ".js", ".vue"]
  },
  build: {
    outDir: "./yk-design/es",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__vite_injected_original_dirname, "./src/packages/index.ts"),
      name: "yk-design",
      // the proper extensions will be added
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      /* 
      umd：用户只需要自己安装vue即可，但是我们打包出来的包会大
      es:我们进行手动优化分包，包比较小
      */
      external: ["vue", "vite-plugin-svg-icons"],
      output: {
        entryFileNames: "[name].mjs",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css")
            return "index.css";
          return assetInfo.name;
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/src/packages")) {
            return "packages";
          }
          if (id.includes("/src/components")) {
            return "components";
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFx5ay1kZXNpZ25cXFxceWstZGVzaWduXFxcXHlrLWRlc2lnbi11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxceWstZGVzaWduXFxcXHlrLWRlc2lnblxcXFx5ay1kZXNpZ24tdWlcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3lrLWRlc2lnbi95ay1kZXNpZ24veWstZGVzaWduLXVpL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgZHRzKHtcclxuICAgICAgdHNjb25maWdQYXRoOiAnLi90c2NvbmZpZy5idWlsZC5qc29uJyxcclxuICAgICAgb3V0RGlyOiAnLi95ay1kZXNpZ24vdHlwZXMnLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczogW3sgZmluZDogJ0AnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpIH1dLFxyXG4gICAgZXh0ZW5zaW9uczogWycudHMnLCAnLmpzJywgJy52dWUnXSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICcuL3lrLWRlc2lnbi9lcycsXHJcbiAgICBsaWI6IHtcclxuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzXHJcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcGFja2FnZXMvaW5kZXgudHMnKSxcclxuICAgICAgbmFtZTogJ3lrLWRlc2lnbicsIC8vIHRoZSBwcm9wZXIgZXh0ZW5zaW9ucyB3aWxsIGJlIGFkZGVkXHJcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBcdTc4NkVcdTRGRERcdTU5MTZcdTkwRThcdTUzMTZcdTU5MDRcdTc0MDZcdTkwQTNcdTRFOUJcdTRGNjBcdTRFMERcdTYwRjNcdTYyNTNcdTUzMDVcdThGREJcdTVFOTNcdTc2ODRcdTRGOURcdThENTZcclxuICAgICAgLyogXHJcbiAgICAgIHVtZFx1RkYxQVx1NzUyOFx1NjIzN1x1NTNFQVx1OTcwMFx1ODk4MVx1ODFFQVx1NURGMVx1NUI4OVx1ODhDNXZ1ZVx1NTM3M1x1NTNFRlx1RkYwQ1x1NEY0Nlx1NjYyRlx1NjIxMVx1NEVFQ1x1NjI1M1x1NTMwNVx1NTFGQVx1Njc2NVx1NzY4NFx1NTMwNVx1NEYxQVx1NTkyN1xyXG4gICAgICBlczpcdTYyMTFcdTRFRUNcdThGREJcdTg4NENcdTYyNEJcdTUyQThcdTRGMThcdTUzMTZcdTUyMDZcdTUzMDVcdUZGMENcdTUzMDVcdTZCRDRcdThGODNcdTVDMEZcclxuICAgICAgKi9cclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucyddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5tanMnLFxyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PSAnc3R5bGUuY3NzJykgcmV0dXJuICdpbmRleC5jc3MnXHJcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUhXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9zcmMvcGFja2FnZXMnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3BhY2thZ2VzJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCcvc3JjL2NvbXBvbmVudHMnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2NvbXBvbmVudHMnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5UyxTQUFTLG9CQUFvQjtBQUN0VSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHlCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsSUFDVixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWEsS0FBSyxRQUFRLGtDQUFXLEtBQUssRUFBRSxDQUFDO0FBQUEsSUFDbEUsWUFBWSxDQUFDLE9BQU8sT0FBTyxNQUFNO0FBQUEsRUFDbkM7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQTtBQUFBLE1BRUgsT0FBTyxLQUFLLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsTUFDeEQsTUFBTTtBQUFBO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTWIsVUFBVSxDQUFDLE9BQU8sdUJBQXVCO0FBQUEsTUFDekMsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCLENBQUMsY0FBc0I7QUFDckMsY0FBSSxVQUFVLFFBQVE7QUFBYSxtQkFBTztBQUMxQyxpQkFBTyxVQUFVO0FBQUEsUUFDbkI7QUFBQSxRQUNBLGFBQWEsSUFBSTtBQUNmLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJLEdBQUcsU0FBUyxlQUFlLEdBQUc7QUFDaEMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxHQUFHLFNBQVMsaUJBQWlCLEdBQUc7QUFDbEMsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
