import { YkButton } from '@/components/button/src/index'
import { YkSwitch } from '@/components/switch/src'
import { YkRadio } from '@/components/radio/src'
import { YkCheckbox } from '@/components/checkbox/src'
import { YkInput } from '@/components/input/src'
import { YkSelect, YkOption } from '@/components/select/src'
import { YkTooltip } from '@/components/tooltip/src'
import { YkPopover } from '@/components/popover/src'
import Message from '@/components/message/src/methods'
import Notification from '@/components/notification/src/methods'
declare module 'vue' {
  /* 扩展全局组件接口类型 */
  export interface GlobalComponents {
    YkCheckbox: typeof YkCheckbox
    YkRadio: typeof YkRadio
    YkSwitch: typeof YkSwitch
    YkButton: typeof YkButton
    YkInput: typeof YkInput
    YkTooltip: typeof YkTooltip
    YkPopover: typeof YkPopover
    Message: typeof Message
    Notification: typeof Notification
  }
}
