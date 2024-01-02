<template>
  <label :class="bem([size], { disabled })" role="radio">
    <input
      type="radio"
      v-model="modelValue"
      :value="props.label"
      @change="handleChange"
      :disabled="disabled"
    />
    <span
      v-if="props.type == 'radio'"
      :class="
        bem('box', {
          checked: isChecked,
          disabled,
        })
      "
    ></span>
    <span :class="bem('label', { checked: isChecked })">
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { RadioProps, radioEmits } from './radio'
import { createCssScope } from '@/utils/bem'
import { useRadio } from './useRadio'
defineOptions({
  name: 'yk-radio',
})
const bem = createCssScope('radio')
const props = withDefaults(defineProps<RadioProps>(), {
  solid: false,
  type: 'radio',
  size: 'l',
})

const emits = defineEmits(radioEmits)
const { modelValue } = useRadio(props, emits)
//通过v-model的绑定modelValue和预订值label判断是否选中
const isChecked = computed(() => modelValue.value === props.label)

const handleChange = () => {
  console.log('modelValue', modelValue)
}
</script>

<style scoped></style>
