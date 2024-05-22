import { createApp } from 'vue'
import '@/assets/style/normalize.css'
import '@/assets/style/root.css'
import 'virtual:svg-icons-register'
import '@/assets/style/theme.less'
import router from './router'
import App from './App.vue'

import { YkIcon } from './packages'

import globalComponent from './plugins/gloablComponent'

const app = createApp(App)

app.use(router)
app.use(YkIcon)
app.use(globalComponent)

app.mount('#app')
