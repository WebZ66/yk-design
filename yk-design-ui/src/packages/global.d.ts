import { YkCheckbox } from '@/components/checkbox/src'
declare module 'vue' {
  export interface GlobalComponents {
    YkCheckbox: typeof YkCheckbox
  }
}
