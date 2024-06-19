<template>
  <button ref="reference">Button</button>
  <div ref="floating" :style="floatingStyles">Tooltip</div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useFloating, arrow } from '@floating-ui/vue'
const reference = ref(null)
const floating = ref(null)
const { floatingStyles } = useFloating(reference, floating, {
  placement: 'right',
})
</script>

<style scoped></style>
