import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    extensions: ['.ts', '.js', '.vue'],
  },
  server: {
    host: true,
    port: 8086,
    open: true,
    cors: true,
  },
  build: {
    outDir: 'dist',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, './src/packages/index.ts'),
      name: 'yk-design', // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: [
        {
          dir: path.resolve(__dirname, './dist'),
          formats: ['umd', 'iife'],
          fileName: '[name].js',
        },
        {
          dir: path.resolve(__dirname, './dist/es'),
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
        },
        {
          dir: path.resolve(__dirname, './dist/lib'),
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].cjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
        },
      ],
    },
  },
})
