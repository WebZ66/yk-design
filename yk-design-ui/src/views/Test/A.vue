<template>
  <div>
    <hr />
    <checkbox v-model="checked1" />
    <checkbox v-model="checked2" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, watch } from 'vue'
import checkbox from '@/components/checkbox/src/checkbox.vue'

const checked1 = ref(true)
const checked2 = ref(0)
</script>

<style scoped></style>
