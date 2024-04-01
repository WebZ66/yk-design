<template>
  <label :class="bem([size], { disabled })" role="radio">
    <!-- 原生的radio想要实现同一组，必须绑定相同的name，在vue中v-model就简化了这个操作，只需要绑定相同的modelValue即可 -->
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
console.log('props', props.modelValue) //props自身是响应式变量，属性值从来不是，它是shallowRef。因此需要子通知父，才能修改props
const emits = defineEmits(radioEmits)
const { modelValue } = useRadio(props, emits)
//通过v-model的绑定modelValue和预订值label判断是否选中
const isChecked = computed(() => modelValue.value === props.label)

const handleChange = () => {
  console.log('modelValue', modelValue)
}
</script>

<style scoped></style>
