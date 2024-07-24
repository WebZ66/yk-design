<template>
  <div :class="bem({}, [], { 'is-expanded': show })" @click="changeShow">
    <YkPopover :width="'240px'" ref="popoverRef" :trigger="'click'" :placement="'bottom-end'">
      <template #reference>
        <yk-input @blur="handleBlur" :placeholder="props.placeholder" v-model="compValue" readonly>
          <template #suffix>
            <YkIcon
              :class="{ 'is-reverse': show, 'yk-icon__cart': true }"
              color="#c0c4cc"
              name="jiantou-xiangxia"
            ></YkIcon>
          </template>
        </yk-input>
      </template>

      <div class="yk-scrollbar">
        <slot></slot>
      </div>
    </YkPopover>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, toRef } from 'vue'

import { createCssScope } from '@/utils/bem'
import '../style/index'
import type { SelectsProps, SelectEmits } from './select'
import type { OptionProps } from './option'
import { useSelect } from './useSelect'

const bem = createCssScope('select')
defineOptions({
  name: 'yk-select',
})

const value = ref('')
const props = withDefaults(defineProps<SelectsProps>(), {})
const $emit = defineEmits<SelectEmits>()
const { show, changeShow, compValue } = useSelect(props, $emit)
const popoverRef = ref<any>()
function handleBlur() {
  changeShow()
  popoverRef.value.hide()
}

function changeValue(value: OptionProps['value']) {
  $emit('update:modelValue', value)
}
function changeCompValue(value: OptionProps['label']) {
  compValue.value = value
}
provide(
  'selectProvide',
  reactive({
    value: toRef(props, 'modelValue'),
    changeValue,
    changeCompValue,
  })
)
</script>
