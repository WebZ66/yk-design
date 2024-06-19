<template>
  <div>
    <YkPopover></YkPopover>
    <!-- <YkSelect :style="{ width: '240px' }" /> -->
  </div>
</template>

<script setup lang="ts">
import YkPopover from '@/components/popover/src/popover.vue'
import YkSelect from '@/components/select/src/select.vue'
import { ref, reactive, isRef, onMounted } from 'vue'
</script>

<style scoped></style>
