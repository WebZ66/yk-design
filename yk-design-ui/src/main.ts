import { createApp } from 'vue'
import '@/assets/style/normalize.css'
import '@/assets/style/root.css'
import 'virtual:svg-icons-register'
import '@/assets/style/theme.less'
import router from './router'
import App from './App.vue'
import '@/packages/global.d.ts'

import { YkIcon } from './packages'
import globalComponent from './plugins/gloablComponent'
import { YkTooltip } from './components/tooltip/src'
import { YkCheckbox } from './components/checkbox/src'

const app = createApp(App)

app.use(router)
app.use(YkIcon)
app.use(YkTooltip)
app.use(YkCheckbox)
app.use(globalComponent)

app.mount('#app')
