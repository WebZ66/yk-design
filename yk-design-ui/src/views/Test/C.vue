<template>
  <div>
    我是C组件
    <input type="radio" v-model="modelValue" :value="props.label" />1
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, inject, computed, nextTick } from 'vue'
const props = defineProps(['label'])
const radioProps = inject<any>('radioProps', undefined)
const changeEvent = inject<any>('changeEvent', undefined)

/* radioProps本来就是响应式变量，其实等同于直接修改了,所以不好，需要让父组件来修改*/
const emits = defineEmits(['update:modelValue'])
const modelValue = computed({
  get() {
    return radioProps.value
  },
  set(newValue) {
    //如果是按钮组
    if (changeEvent) {
      changeEvent(newValue)
    } else {
      //如果不是按钮组，直接通知父组件
      emits('update:modelValue', newValue)
    }
  },
})
</script>

<style scoped></style>
