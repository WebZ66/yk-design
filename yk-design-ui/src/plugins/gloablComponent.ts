import { YkCheckbox } from '@/components/checkbox/src'
import { YkTooltip } from '@/components/tooltip/src/index'
import { YkInput } from './../components/input/src/index'
import Test from '@/components/test/src/TestVue.vue'
import Switch from '@/components/switch/src/switch.vue'
import Icon from '@/components/icon/src/YkIcon.vue'
import Button from '@/components/button/src/YkButton.vue'
import Avatar from '@/components/avatar/src/index.vue'
import Upload from '@/components/upload/src/upload.vue'
import Carousel from '@/components/carousel/src/index.vue'
import { YkRadio, YkRadioGroup } from './../components/radio/src'
import type { App, Component } from 'vue'

const components: Component = {
  YkTest: Test,
  YkIcon: Icon,
  YkButton: Button,
  YkSwitch: Switch,
  YkAvatar: Avatar,
  YkUpload: Upload,
  YkCarousel: Carousel,
  YkRadio,
  YkRadioGroup,
  YkInput,
  YkTooltip,
  YkCheckbox,
  YkTooltip,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((comp) => {
      app.component(comp, components[comp])
    })
  },
}
