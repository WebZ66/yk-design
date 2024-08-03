import DefaultTheme from 'vitepress/theme'
import YkDesign from 'yk-design'
import 'yk-design/style'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(YkDesign)
  }
}
