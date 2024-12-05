import { withInstall } from '@/utils'
import Tree from './tree.vue'

//ES6导出分为分别导出，统一导出，和默认导出
const YkTree = withInstall(Tree)

export { YkTree }
export default YkTree

declare module 'vue' {
  export interface GlobalComponents {
    YkTree: typeof Tree
  }
}
