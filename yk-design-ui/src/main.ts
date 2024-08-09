import { createApp } from 'vue'

import router from './router'
import App from './App.vue'

import YkDesign from 'yk-design'
import 'yk-design/style'
const app = createApp(App)

app.use(YkDesign)
app.use(router)

app.mount('#app')
