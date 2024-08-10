import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer, ElementPlusContainer, NaiveUIContainer } from '@vitepress-demo-preview/component'
import YkDesign from 'yk-design'
import 'yk-design/style'
import '@vitepress-demo-preview/component/dist/style.css'
import '../../style/reset.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.component('demo-preview', ElementPlusContainer)
    app.use(YkDesign)
  }
}
