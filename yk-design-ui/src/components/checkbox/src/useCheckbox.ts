import { computed, ref, SetupContext, inject } from 'vue'
import { CheckboxProps, CheckboxEmits } from './checkbox-type'
import type { CheckboxGroupInject } from './checkbox-group-type'
export const useCheckbox = (
  props: CheckboxProps,
  emits: SetupContext<typeof CheckboxEmits>['emit']
) => {
  const CheckboxGroupObj = inject<CheckboxGroupInject | undefined>(
    'propsByCheckboxGroup',
    undefined
  )

  const isGroup = computed(() => !!CheckboxGroupObj)

  const compValue = computed<CheckboxProps['modelValue']>({
    get() {
      if (!isGroup.value) {
        return props.modelValue
      } else {
        //判断传入数组是否包含value
        return CheckboxGroupObj?.props.modelValue?.includes(props.value)
      }
    },
    set(newValue) {
      if (!isGroup.value) {
        emits('update:modelValue', newValue)
      } else {
        const newModelValue = [...CheckboxGroupObj?.props.modelValue]
        if (newValue) {
          newModelValue.push(props.value)
        } else {
          const index = newModelValue.findIndex((item) => item == props.value)
          newModelValue.splice(index, 1)
        }
        const set = new Set(newModelValue)
        CheckboxGroupObj?.changeEvent([...set])
      }
    },
  })

  const isChecked = computed(() => {
    if (!isGroup.value) {
      return !!props.modelValue
    } else {
      return CheckboxGroupObj?.props.modelValue?.includes(props.value as never)
    }
  })

  const disabled = computed(() => {
    return isGroup?.value ? CheckboxGroupObj?.props.disabled : props.disabled
  })

  return { compValue, isChecked, disabled }
}
