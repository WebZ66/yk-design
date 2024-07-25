# 组件安装注册步骤

`vite使用者请重点关注下面步骤`

> 因为vite不支持commonjs的语法，需要使用`@rollup/plugin-commonjs`

安装

```
pnpm add @rollup/plugin-commonjs

npm install @rollup/plugin-commonjs
```

配置

**注意：commonjs插件必须在vue插件前调用**

```
import commonjs from "@rollup/plugin-commonjs"
export default defineConfig({
    plugins: [
        commonjs(),
        vue(),
    ],
    }
```



## YkIcon组件全局配置

