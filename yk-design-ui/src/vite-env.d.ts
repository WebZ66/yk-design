/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, any>
  export default component
}

declare module 'vue-popperjs' {
  const Popper: DefineComponent<object, object, any>
  export default Popper
}
