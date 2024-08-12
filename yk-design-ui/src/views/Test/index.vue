<template>
  <div class="test">
    <YkSwitch checkedValue="value1" unCheckedValue="value2" v-model="value" @change="handleValue"></YkSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
function handleValue(val) {
  console.log('val', val)
}
</script>

<style></style>
