import { isRef, onBeforeUnmount, onMounted, type MaybeRef, watch } from 'vue'
export function useEventListener(
  target: MaybeRef<HTMLElement | EventTarget | void>,
  event: string,
  handler: (e: Event) => any
) {
  if (isRef(target)) {
    watch(target, (val, oldVal) => {
      oldVal?.removeEventListener(event, handler)
      val?.addEventListener(event, handler)
    })
  } else {
    onMounted(() => target?.addEventListener(event, handler))
  }
  onBeforeUnmount(() => {
    ;(target as HTMLElement)?.removeEventListener(event, handler)
  })
}
