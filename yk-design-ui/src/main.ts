import { YkIcon } from './components/icon/src/index'
import { createApp } from 'vue'
import '@/assets/style/normalize.css'
import 'virtual:svg-icons-register'
import App from './App.vue'

import gloablComponent from './plugins/gloablComponent'

const app = createApp(App)
app.use(YkIcon)
app.use(gloablComponent)
app.mount('#app')
