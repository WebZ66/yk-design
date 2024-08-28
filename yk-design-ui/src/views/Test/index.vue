<template>
  <div class="test">
    <!-- <messagebox /> -->
    <rate :value="value" @change="changeValue" :allow-half="true" />
    <rate :value="value" @change="changeValue" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import messagebox from '@/components/messagebox/src/messagebox.vue'
import rate from '@/components/rate/src/rate.vue'

const value = ref(2.7)
function changeValue(v) {
  value.value = v
}
</script>

<style lang="scss"></style>
