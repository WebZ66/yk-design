import { UPDATE_MODEL_EVENT, CHANGE_EVENT, provideKey } from './constant'
import { RadioProps } from './radio'
import { computed, inject } from 'vue'

export const useRadio = (props: any, emits: any) => {
  /* 判断是否是radio-groups */
  const radioProps = inject<any>(provideKey, undefined)
  const isGroup = computed(() => !!radioProps)

  const modelValue = computed({
    get() {
      return isGroup.value ? radioProps.value : props.modelValue
    },
    set(val) {
      if (isGroup.value) {
        console.log('修改radio-group的逻辑')
      } else {
        emits && emits(UPDATE_MODEL_EVENT, val)
      }
    },
  })
  const disabled = computed(() => {
    return props.disabled
  })
  return {
    modelValue,
    disabled: disabled.value,
    type: radioProps?.type ?? props.type,
    size: radioProps?.size ?? props.size,
    solid: radioProps?.solid ?? props.solid,
  }
}
