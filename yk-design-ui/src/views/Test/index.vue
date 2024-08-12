<template>
  <div class="test">
    <YkSwitch v-model="value" active-text="激活" inactive-text="不激活"></YkSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<style></style>
