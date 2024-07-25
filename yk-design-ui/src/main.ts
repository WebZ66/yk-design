import { createApp } from 'vue'
import '@/assets/style/normalize.css'
import '@/assets/style/root.css'
import 'virtual:svg-icons-register'
import '@/assets/style/theme.less'
import router from './router'
import App from './App.vue'

import YkDesign from '@/packages/index'

const app = createApp(App)

app.use(YkDesign)
app.use(router)

app.mount('#app')
