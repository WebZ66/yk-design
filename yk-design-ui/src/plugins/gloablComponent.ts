import Test from '@/components/test/src/index'
import Switch from '@/components/switch/src/switch.vue'
import Icon from '@/components/icon/src/YkIcon.vue'
import Button from '@/components/button/src/YkButton.vue'
import Avatar from '@/components/avatar/src/index.vue'
import type { App } from 'vue'

interface IComponents<T> {
  [propName: string]: T
}

const components: IComponents<any> = {
  YkTest: Test as any,
  YkIcon: Icon,
  YkButton: Button,
  YkSwitch: Switch,
  YkAvatar: Avatar,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((comp) => {
      app.component(comp, components[comp])
    })
  },
}
