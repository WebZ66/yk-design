<template>
  <svg class="yk-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${props.name}`" :fill="props.color"></use>
  </svg>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { IIconProp } from './type'
import '../style/index'
defineOptions({
  name: 'YkIcon',
})
const props = withDefaults(defineProps<IIconProp>(), {
  name: 'biyan',
  color: 'black',
})
</script>
