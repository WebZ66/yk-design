import { createApp } from 'vue'

import router from './router'
import App from './App.vue'
import YkDesign from './packages/index'
const app = createApp(App)

app.use(router)
app.use(YkDesign)

app.mount('#app')
