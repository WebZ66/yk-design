import { YkButton } from '@/components/button/src/index'
import { YkSwitch } from '@/components/switch/src'
import { YkRadio } from '@/components/radio/src'
import { YkCheckbox } from '@/components/checkbox/src'

declare module 'vue' {
  /* 扩展全局组件接口类型 */
  export interface GlobalComponents {
    YkCheckbox: typeof YkCheckbox
    YkRadio: typeof YkRadio
    YkSwitch: typeof YkSwitch
    YkButton: typeof YkButton
  }
}
