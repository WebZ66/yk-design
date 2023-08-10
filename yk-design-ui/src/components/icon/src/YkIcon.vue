<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${props.name}`" :fill="props.color"></use>
  </svg>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { IIconProp } from './type'
defineOptions({
  name: 'YkIcon',
})
const props = withDefaults(defineProps<IIconProp>(), {
  name: 'biyan',
  color: 'black',
})
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  font-size: 16px;
  vertical-align: -0.15em;
}
</style>
