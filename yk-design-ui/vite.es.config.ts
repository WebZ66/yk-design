import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      outDir: './yk-design/types',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    extensions: ['.ts', '.js', '.vue'],
  },
  build: {
    outDir: './yk-design/es',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, './src/packages/index.ts'),
      name: 'yk-design', // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      /* 
      umd：用户只需要自己安装vue即可，但是我们打包出来的包会大
      es:我们进行手动优化分包，包比较小
      */
      external: ['vue', 'vite-plugin-svg-icons'],
      output: {
        entryFileNames: '[name].mjs',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') return 'index.css'
          return assetInfo.name
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/src/packages')) {
            return 'packages'
          }
          if (id.includes('/src/utils')) {
            return 'utils'
          }
          if (id.includes('YkButton')) {
            return 'YkButton'
          }
        },
      },
    },
  },
})
