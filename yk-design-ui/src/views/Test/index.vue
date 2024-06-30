<template>
  <div>
    对于的modelValue:{{ inputValue }}
    <YkSelect v-model="inputValue" :placeholder="'请选择'">
      <YkOption
        v-for="item in options"
        :key="item.label"
        :label="item.label"
        :value="item.value"
      ></YkOption>
    </YkSelect>
  </div>
</template>

<script setup lang="ts">
import YkPopover from '@/components/popover/src/popover.vue'
import YkSelect from '@/components/select/src/select.vue'
import YkOption from '@/components/select/src/option.vue'
import { ref, reactive, isRef, onMounted } from 'vue'
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
</script>

<style scoped></style>
