import { ref } from 'vue'
import type { SelectsProps, SelectEmits } from './select'

export const useSelect = (props: SelectsProps, $emit: SelectEmits) => {
  const show = ref(false)
  const changeShow = () => {
    show.value = !show.value
  }

  return {
    show,
    changeShow,
  }
}
