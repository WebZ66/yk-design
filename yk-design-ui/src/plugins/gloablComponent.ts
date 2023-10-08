import YkIcon from '@/components/icon/src/index'

import type { App } from 'vue'

interface IComponents<T> {
  [propName: string]: T
}

const components: IComponents<typeof YkIcon> = {
  YkIcon: YkIcon,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((comp) => {
      app.component(comp, components[comp])
    })
  },
}
