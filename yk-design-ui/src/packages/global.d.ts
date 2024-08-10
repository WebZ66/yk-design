import { YkPopconfirm } from '@/components/popconfirm/src'
import { YkButton } from '@/components/button/src/index'
import { YkIcon } from '@/components/icon/src'
import { YkSwitch } from '@/components/switch/src'
import { YkRadio } from '@/components/radio/src'
import { YkCheckbox } from '@/components/checkbox/src'
import { YkInput } from '@/components/input/src'
import { YkSelect, YkOption } from '@/components/select/src'
import { YkTooltip } from '@/components/tooltip/src'
import Message from '@/components/message/src/methods'
import Notification from '@/components/notification/src/methods'
declare module 'vue' {
  /* 扩展全局组件接口类型 */
  export interface GlobalComponents {
    YkCheckbox: typeof YkCheckbox
    YkIcon: typeof YkIcon
    YkRadio: typeof YkRadio
    YkSwitch: typeof YkSwitch
    YkButton: typeof YkButton
    YkInput: typeof YkInput
    YkTooltip: typeof YkTooltip
    YkPopconfirm: typeof YkPopconfirm

    Message: typeof Message
    Notification: typeof Notification
  }
}
