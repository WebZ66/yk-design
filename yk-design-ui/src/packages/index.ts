import '@/assets/style/normalize.css'
import '@/assets/style/root.css'
import '@/assets/style/mix.scss'
import { YkButton } from '@/components/button/src/index'
import { YkIcon } from '@/components/icon/src'
import { YkSwitch } from '@/components/switch/src'
import { YkRadio } from '@/components/radio/src'
import { YkCheckbox } from '@/components/checkbox/src'
import { YkInput } from '@/components/input/src'
import { YkSelect, YkOption } from '@/components/select/src'
import { YkTooltip } from '@/components/tooltip/src'
import { YkPopconfirm } from '@/components/popconfirm/src'
import Message from '@/components/message/src/methods'
import Notification from '@/components/notification/src/methods'

import type { Component, App } from 'vue'

const components: {
  [propName: string]: Component
} = {
  YkButton,
  YkIcon,
  YkSelect,
  YkSwitch,
  YkRadio,
  YkCheckbox,
  YkInput,
  YkOption,
  YkTooltip,
  YkPopconfirm,
}
export {
  YkButton,
  YkIcon,
  YkSelect,
  YkSwitch,
  YkRadio,
  YkCheckbox,
  YkInput,
  YkOption,
  YkTooltip,
  YkPopconfirm,
  Message,
  Notification,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((comp) => {
      app.component(comp, components[comp])
    })
  },
}
