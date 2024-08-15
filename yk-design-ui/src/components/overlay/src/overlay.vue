<template>
  <Teleport to="body">
    <div v-if="mask" class="yk-overlay" :class="props.overlayClass" :style="{ zIndex }" @click="onMaskClick">
      <slot></slot>
    </div>
    <div v-else :class="overlayClass" :style="{ zIndex, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }">
      <slot></slot>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { OverlayProps, OverlayEmits } from './overlay'
defineOptions({
  name: 'YkOverlay',
})

const props = withDefaults(defineProps<OverlayProps>(), {
  mask: true,
})

const $emits = defineEmits<OverlayEmits>()

function onMaskClick(e: MouseEvent) {
  $emits('click', e)
}
</script>

<style lang="scss" scoped>
.yk-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  overflow: auto;
  z-index: 2000;
}
</style>
