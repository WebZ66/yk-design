import { computed, ref } from 'vue'
import { InputProps, InputEmits } from './input'
export const useInput = (props: InputProps, $emits: InputEmits) => {
  const compValue = computed({
    get() {
      return props.modelValue
    },
    set(newValue) {
      $emits('update:modelValue', newValue)
    },
  })

  function clearValue() {
    $emits('update:modelValue', '')
    $emits('clear')
  }

  const passwordVisible = ref(true)
  function togglePasswordVisible() {
    passwordVisible.value = !passwordVisible.value
  }
  const isPassword = computed(() => {
    return props.showPassword
      ? passwordVisible.value
        ? 'text'
        : 'password'
      : 'text'
  })

  return {
    compValue,
    clearValue,
    passwordVisible,
    isPassword,
    togglePasswordVisible,
  }
}
