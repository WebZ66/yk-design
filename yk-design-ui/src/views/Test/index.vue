<template>
  <div>
    <YkPopover>
      <div>title</div>
      <template #reference><YkButton>hover触发</YkButton></template>
    </YkPopover>
  </div>
</template>

<script setup lang="ts">
import YkPopover from '@/components/popover/src/popover.vue'
import YkSelect from '@/components/select/src/select.vue'
import { ref, reactive, isRef, onMounted } from 'vue'

function handleShow() {
  console.log('show')
}
</script>

<style scoped></style>
