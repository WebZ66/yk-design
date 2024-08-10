// vite.config.ts
import { defineConfig } from "file:///F:/yk-design/yk-design/yk-design-ui/node_modules/.pnpm/vite@4.5.3_@types+node@20.12.12_sass@1.77.2/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/yk-design/yk-design/yk-design-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.3_vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { createSvgIconsPlugin } from "file:///F:/yk-design/yk-design/yk-design-ui/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.5.3/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\yk-design\\yk-design\\yk-design-ui";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }],
    extensions: [".ts", ".js", ".vue"]
  },
  server: {
    host: true,
    port: 8086,
    open: true,
    cors: true
  },
  build: {
    outDir: "dist",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__vite_injected_original_dirname, "./src/packages/index.ts"),
      name: "yk-design",
      // the proper extensions will be added
      fileName: "index"
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: [
        {
          dir: path.resolve(__vite_injected_original_dirname, "./dist/es"),
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named"
        },
        {
          dir: path.resolve(__vite_injected_original_dirname, "./dist/lib"),
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].cjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named"
        },
        {
          dir: path.resolve(__vite_injected_original_dirname, "./src/packages/index.ts"),
          entryFileNames: "index",
          format: "umd"
        }
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFx5ay1kZXNpZ25cXFxceWstZGVzaWduXFxcXHlrLWRlc2lnbi11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxceWstZGVzaWduXFxcXHlrLWRlc2lnblxcXFx5ay1kZXNpZ24tdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3lrLWRlc2lnbi95ay1kZXNpZ24veWstZGVzaWduLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcclxuICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiBbeyBmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJykgfV0sXHJcbiAgICBleHRlbnNpb25zOiBbJy50cycsICcuanMnLCAnLnZ1ZSddLFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiB0cnVlLFxyXG4gICAgcG9ydDogODA4NixcclxuICAgIG9wZW46IHRydWUsXHJcbiAgICBjb3JzOiB0cnVlLFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xyXG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3BhY2thZ2VzL2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICd5ay1kZXNpZ24nLCAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxyXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NTkxNlx1OTBFOFx1NTMxNlx1NTkwNFx1NzQwNlx1OTBBM1x1NEU5Qlx1NEY2MFx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NUU5M1x1NzY4NFx1NEY5RFx1OEQ1NlxyXG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcclxuICAgICAgb3V0cHV0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9kaXN0L2VzJyksXHJcbiAgICAgICAgICAvL1x1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxyXG4gICAgICAgICAgZm9ybWF0OiAnZXMnLFxyXG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLm1qcycsXHJcbiAgICAgICAgICAvL1x1OEJBOVx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjIxMVx1NEVFQ1x1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxyXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxyXG4gICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vZGlzdC9saWInKSxcclxuICAgICAgICAgIC8vXHU2MjUzXHU1MzA1XHU2ODNDXHU1RjBGXHJcbiAgICAgICAgICBmb3JtYXQ6ICdjanMnLFxyXG4gICAgICAgICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmNqcycsXHJcbiAgICAgICAgICAvL1x1OEJBOVx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjIxMVx1NEVFQ1x1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxyXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxyXG4gICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3BhY2thZ2VzL2luZGV4LnRzJyksXHJcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2luZGV4JyxcclxuICAgICAgICAgIGZvcm1hdDogJ3VtZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUyxTQUFTLG9CQUFvQjtBQUNoVSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBRWpCLFNBQVMsNEJBQTRCO0FBSnJDLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLHFCQUFxQjtBQUFBLE1BQ25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQSxNQUMxRCxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWEsS0FBSyxRQUFRLGtDQUFXLEtBQUssRUFBRSxDQUFDO0FBQUEsSUFDbEUsWUFBWSxDQUFDLE9BQU8sT0FBTyxNQUFNO0FBQUEsRUFDbkM7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU8sS0FBSyxRQUFRLGtDQUFXLHlCQUF5QjtBQUFBLE1BQ3hELE1BQU07QUFBQTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0UsS0FBSyxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBO0FBQUEsVUFFeEMsUUFBUTtBQUFBO0FBQUEsVUFFUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBO0FBQUEsVUFFekMsUUFBUTtBQUFBO0FBQUEsVUFFUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSyxLQUFLLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsVUFDdEQsZ0JBQWdCO0FBQUEsVUFDaEIsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
