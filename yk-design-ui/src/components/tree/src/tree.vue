<template>
  <div :class="bem()">tree组件</div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { createCssScope } from '@/utils/bem'
import type { ITreeProps } from './tree'
defineOptions({
  name: 'YkTree',
})
const bem = createCssScope('tree')
const props = withDefaults(defineProps<ITreeProps>(), {
  labelField: 'label',
  keyField: 'key',
  childrenField: 'children',
})
const tree = ref([])

</script>
