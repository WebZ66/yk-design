<template>
  <div>
    <hr />
    <checkbox v-model="checked1" />
    <checkbox v-model="checked2" />
    <hr />

    <h2>
      {{ checkedGroupValue }}
    </h2>
    <checkboxGroup v-model="checkedGroupValue">
      <checkbox :value="'1'"></checkbox>
      <checkbox :value="'2'"></checkbox>
    </checkboxGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, watch } from 'vue'
import checkbox from '@/components/checkbox/src/checkbox.vue'
import checkboxGroup from '@/components/checkbox/src/checkbox-group.vue'

const checked1 = ref(true)
const checked2 = ref(0)
const checkedGroupValue = ref(['1'])
</script>

<style scoped></style>
