<template>
  <div>
    <YkSelect>
      <YkOption label="123" value="1"></YkOption>
    </YkSelect>
  </div>
</template>

<script setup lang="ts">
import { YkSelect, YkOption } from '@/packages'

import { ref } from 'vue'

const inputValue = ref('')

const options = ref([
  {
    value: '选项1',
    label: '黄金糕',
  },
  {
    value: '选项2',
    label: '双皮奶',
  },
  {
    value: '选项3',
    label: '蚵仔煎',
  },
  {
    value: '选项4',
    label: '龙须面',
  },
  {
    value: '选项5',
    label: '北京烤鸭',
  },
])

function handleClick() {}
</script>
