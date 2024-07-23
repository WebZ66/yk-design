import { YkPopover } from '@/components/popover/src/index'
import { YkButton } from '@/components/button/src/index'
import { YkSwitch } from '@/components/switch/src'
import { YkRadio } from '@/components/radio/src'
import { YkTooltip } from '@/components/tooltip/src'
import { YkCheckbox } from '@/components/checkbox/src'
import { YkInput } from '@/components/input/src'
declare module 'vue' {
  /* 扩展全局组件接口类型 */
  export interface GlobalComponents {
    YkCheckbox: typeof YkCheckbox
    YkTooltip: typeof YkTooltip
    YkInput: typeof YkInput
    YkRadio: typeof YkRadio
    YkSwitch: typeof YkSwitch
    YkButton: typeof YkButton
    YkPopover: typeof YkPopover
  }
}
