<template>
  <div :class="bem('label', ['s'], { disabled: true, solid: false })">123</div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { createCssScope } from '@/utils/bem'

const bem = createCssScope('radio')

defineOptions({
  name: 'yk-radio',
})
</script>

<style scoped></style>
