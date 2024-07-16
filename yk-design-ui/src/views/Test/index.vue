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
    <hr />
    <YkButton @click="handleClick">点击</YkButton>
  </div>
</template>

<script setup lang="ts">
import YkSelect from '@/components/select/src/select.vue'
import YkOption from '@/components/select/src/option.vue'
import message from '@/components/message/src/methods'
import notification from '@/components/notification/src/methods'
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

function handleClick() {
  /*   message({
    type: 'success',
    message: '测试',
    duration: 0,
    showClose: true,
  }) */
  notification({
    type: 'success',
    title: '提示',
    position: 'bottom-left',
    duration: 0,
  })
}
</script>
