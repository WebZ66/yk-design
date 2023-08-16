import Test from '@/components/test/src/index'
import Icon from '@/components/icon/src/index'
import Button from '@/components/button/src/index'
import type { App } from 'vue'

interface IComponents<T> {
  [propName: string]: T
}

const components: IComponents<typeof Test> = {
  YkTest: Test,
  YkIcon: Icon,
  YkButton: Button,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((comp) => {
      app.component(comp, components[comp])
    })
  },
}
