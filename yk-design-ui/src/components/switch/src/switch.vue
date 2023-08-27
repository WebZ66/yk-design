<template>
  <button></button>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import type { ISwitchProps, valueType } from './type'
defineOptions({
  name: 'YkSwitch',
})

const props = withDefaults(defineProps<ISwitchProps>(), {})
const emits = defineEmits<{
  (e: 'update:modelValue', value: valueType): true
  (e: 'change', value: valueType): true
}>()
</script>

<style scoped></style>
