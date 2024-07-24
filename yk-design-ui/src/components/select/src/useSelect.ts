import { ref, computed } from 'vue'
import type { SelectsProps, SelectEmits } from './select'

export const useSelect = (props: SelectsProps, $emit: SelectEmits) => {
  const show = ref(false)
  const labelValue = ref<string>('')
  const compValue = computed({
    get() {
      return labelValue.value
    },
    set(newValue) {
      labelValue.value = newValue
    },
  })
  const changeShow = () => {
    show.value = !show.value
  }
  return {
    show,
    changeShow,
    compValue,
  }
}
