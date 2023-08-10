import { YkIcon } from './components/icon/src/index'
import { createApp } from 'vue'
import '@/assets/style/normalize.css'
import 'virtual:svg-icons-register'
import App from './App.vue'

console.log(YkIcon)
const app = createApp(App)
app.use(YkIcon)
app.mount('#app')
