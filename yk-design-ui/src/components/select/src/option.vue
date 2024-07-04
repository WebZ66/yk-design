<template>
  <div>
    <li
      class="yk-select-dropdown__item"
      :class="{ select: props.value == injectValue?.value }"
      @click="handleOptionItemClick"
    >
      {{ props.label }}
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, inject } from 'vue'
import type { OptionProps, OptionEmits, SelectInject } from './option'

const props = defineProps<OptionProps>()
const $emit = defineEmits<OptionEmits>()
const injectValue = inject<SelectInject>('selectProvide')

function handleOptionItemClick() {
  injectValue?.changeValue(props.value)
  injectValue?.changeCompValue(props.label)
}
</script>
