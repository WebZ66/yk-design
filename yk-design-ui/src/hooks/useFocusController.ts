import { getCurrentInstance, onMounted, type Ref, ref } from 'vue'

interface UseFocusControllerOption {
  afterFocus?(): void
  beforeBlur?(event: FocusEvent): void | boolean
  afterBlur?(): void
}

//T要么是原生input元素要么是导出focus方法的组件
export function useFocusController<T extends HTMLElement | { focus(): void }>(
  target: Ref<T | void>,
  { afterFocus, beforeBlur, afterBlur }: UseFocusControllerOption = {}
) {
  const instance = getCurrentInstance()!
  const { emit } = instance
  const wrapperRef = ref<HTMLElement>()
  const isFocus = ref(false)
  const handleFocus = (event: FocusEvent) => {
    if (isFocus.value) return
    isFocus.value = true
    emit('focus', event)
    afterFocus?.()
  }
  const handleBlur = (event: FocusEvent) => {
    const cancelBlur = beforeBlur instanceof Function ? beforeBlur(event) : false
    if (cancelBlur) {
      return
    }
    isFocus.value = false

    emit('blur', event)
    afterBlur?.()
  }

  const handleClick = () => {
    target.value?.focus()
  }
  onMounted(() => {
    wrapperRef.value?.addEventListener('click', handleClick)
  })
  return {
    wrapperRef,
    isFocus,
    handleFocus,
    handleBlur,
  }
}

export default useFocusController
