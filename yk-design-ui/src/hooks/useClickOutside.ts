import { Ref } from 'vue'
import { useEventListener } from './index'
export function useClickOutside(elementRef: Ref<HTMLElement | void>, callback: (e: MouseEvent) => void) {
  useEventListener(document, 'click', (e: Event) => {
    if (elementRef.value && e.target) {
      //判断事件触发对象是否在目标节点里，如果在，才触发
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e as MouseEvent)
      }
    }
  })
}
