import type { Plugin, App } from 'vue'

export type SFCWithInstallType<T> = Plugin & T

/**
 * @description 给组件添加全局注册插件功能
 * @param main 传入的组件
 */

export const withInstall = <T extends { name: string }>(main: T) => {
  ;(main as SFCWithInstallType<T>).install = (app: App) => {
    app.component(main.name, main)
  }
  return main as SFCWithInstallType<T>
}
