# 快速开始

本节将介绍如何在项目中使用 yk-design-ui

## 配置commonjs模块

**vite使用者请重点关注下面步骤**

> 因为vite不支持commonjs的语法，需要额外安装`@rollup/plugin-commonjs`


 安装

```js
pnpm add @rollup/plugin-commonjs
或者
npm install @rollup/plugin-commonjs
```

配置

**注意：commonjs插件必须在vue插件前调用**

```js
import commonjs from "@rollup/plugin-commonjs"
export default defineConfig({
    plugins: [
        commonjs(),
        vue(),
    ],
    }
```



## YkIcon的全局配置

> 由于开发者能力有限，YkIcon组件是基于 `vite-plugin-svg-icons`插件开发，但也因此，YkIcon组件可以进行丰富的扩展。



### 安装SVG依赖插件

```js
pnpm install vite-plugin-svg-icons -D
```



### 配置SVG依赖插件

**在`vite.config.ts`中配置插件**

```js
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
export default () => {
  return {
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  }
}
```



### main.ts中导入

```ts
import 'virtual:svg-icons-register'
```



配置完成后，只需要在对应的 `iconDirs`下，放入不同的`svg图片`，即可实现自由的个人图标库！！！[快快开始吧](../examples/button.md)

