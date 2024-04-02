<template>
  <div>
    <yk-radio :label="1">备选项1</yk-radio>
    <yk-radio disabled :label="2">备选项2</yk-radio>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, watch } from 'vue'
import YkRadio from '@/components/radio/src/radio.vue'
</script>

<style scoped></style>
