import { createApp } from 'vue'
import '@/assets/style/normalize.css'
import 'virtual:svg-icons-register'
import App from './App.vue'

import TestVue from '@/components/test/src/TestVue.vue'
TestVue.install = () => {
  console.log('123')
}

const app = createApp(App)
TestVue.install()
app.mount('#app')
