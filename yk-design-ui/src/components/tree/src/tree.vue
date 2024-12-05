<template>
  <div :class="bem()">tree组件</div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { createCssScope } from '@/utils/bem'

defineOptions({
  name: 'YkTree',
})
const bem = createCssScope('tree')
</script>
