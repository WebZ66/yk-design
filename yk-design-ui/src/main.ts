import { createApp } from 'vue'
import '@/assets/style/normalize.css'
import '@/assets/style/root.css'
import 'virtual:svg-icons-register'
import router from './router'
import App from './App.vue'

import { YkIcon } from './packages'

import gloablComponent from './plugins/gloablComponent'

const app = createApp(App)

app.use(router)
app.use(YkIcon)
app.use(gloablComponent)
app.mount('#app')
