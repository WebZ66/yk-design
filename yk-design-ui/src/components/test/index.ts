import type { Plugin } from 'vue'

// 定义类型别名 SFCWithInstall<T>，表示带有全局安装方法的组件
export type SFCWithInstall<T> = T & Plugin

// 定义函数 withInstall，用于给组件添加全局安装方法
export const withInstall = <T, E extends Record<string, any>>(
  main: T, // 主要组件，需要添加全局安装方法的组件
  extra?: E // 额外组件对象，可以包含多个组件作为属性（可选）
) => {
  // 在主要组件上添加 install 方法，该方法会在全局安装组件时调用
  ;(main as SFCWithInstall<T>).install = (app): void => {
    // 遍历主要组件和额外组件对象的每个组件
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      // 使用 app.component 方法将组件注册到 Vue 应用程序中
      app.component(comp.name, comp)
    }
  }

  // 如果额外组件对象存在，则将每个组件添加到主要组件上
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }

  // 返回带有全局安装方法的组件，类型为 SFCWithInstall<T> & E
  return main as SFCWithInstall<T> & E
}
