import Test from '@/components/test/src/TestVue.vue'
import Switch from '@/components/switch/src/switch.vue'
import Icon from '@/components/icon/src/YkIcon.vue'
import Button from '@/components/button/src/YkButton.vue'
import Avatar from '@/components/avatar/src/index.vue'
import Upload from '@/components/upload/src/upload.vue'

import Upload from '@/components/upload/src/upload.vue'
import Carousel from '@/components/carousel/src/index.vue'
import type { App } from 'vue'

interface IComponents<T> {
  [propName: string]: T | any
}

const components: IComponents<any> = {
  YkTest: Test,
  YkIcon: Icon,
  YkButton: Button,
  YkSwitch: Switch,
  YkAvatar: Avatar,
  YkUpload: Upload,
  YkCarousel: Carousel,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((comp) => {
      app.component(comp, components[comp])
    })
  },
}
