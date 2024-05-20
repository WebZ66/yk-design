<template>
  <div :class="bem()" v-bind="$attrs">
    <span v-if="$slots.prepend" :class="bem('prepend')">
      <slot name="prepend" />
    </span>

    <div :class="[bem('inner'), bem({}), bem([])]">
      <slot name="prefix" />
      <input ref="inputRef" />
      <div :class="bem('buttons')"></div>

      <slot name="suffix" />
    </div>
    <span v-if="$slots.append" :class="bem('append')">
      <slot name="append" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { createCssScope } from '@/utils/bem'
import { ref, reactive, useSlots } from 'vue'
import '../style'
const $slots = useSlots()
console.log('$slots', $slots)

defineOptions({
  name: 'YkInput',
})
const bem = createCssScope('input')
</script>

<style scoped></style>
