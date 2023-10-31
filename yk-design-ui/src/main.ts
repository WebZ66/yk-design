import { createApp } from 'vue'
import '@/assets/style/normalize.css'
import '@/assets/style/root.css'
import 'virtual:svg-icons-register'
import App from './App.vue'

import { YkIcon } from './packages'
import '../my-test-lib/dist/style.css'
import gloablComponent from './plugins/gloablComponent'

const app = createApp(App)

app.use(YkIcon)
app.use(gloablComponent)
app.mount('#app')
