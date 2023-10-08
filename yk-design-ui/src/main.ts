import { createApp } from 'vue'
import '@/assets/style/normalize.css'
import 'virtual:svg-icons-register'
import App from './App.vue'
import { YkButton } from './packages'
import '../my-test-lib/dist/style.css'

const app = createApp(App)
app.use(YkButton)
app.mount('#app')
