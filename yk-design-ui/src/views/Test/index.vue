<template>
  <div>
    <YkSelect></YkSelect>
  </div>
</template>

<script setup lang="ts">
import YkPopover from '@/components/popover/src/popover.vue'
import YkSelect from '@/components/select/src/select.vue'
import { ref, reactive, isRef, onMounted } from 'vue'
const inputValue = ref('')
function handleShow() {
  console.log('show')
}
</script>

<style scoped></style>
