import { computed, SetupContext, inject } from 'vue'
import { RadioProps, radioEmits } from './radio'
import type { RadioGroupInject } from './radio-group'
export const useRadio = (
  props: RadioProps,
  emits: SetupContext<typeof radioEmits>['emit']
) => {
  const radioGroupObj = inject<RadioGroupInject>('propsByRadioGroup', undefined)
  const isGroup = computed(() => !!radioGroupObj)
  const isChecked = computed(() => props.value == compVModel.value)
  const disabled = computed(
    () => radioGroupObj?.props.disabled || props.disabled
  )
  const compVModel = computed({
    get() {
      //如果是group 那么返回group的modelValue 不是，返回接收到的modelValue
      return isGroup.value ? radioGroupObj?.props.modelValue : props.modelValue
    },
    set(newValue) {
      if (!isGroup.value) {
        emits('update:modelValue', newValue)
      } else {
        radioGroupObj?.changeEvent(newValue)
      }
    },
  })
  return { compVModel, isChecked, disabled }
}
