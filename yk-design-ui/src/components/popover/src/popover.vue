<script setup>
import { arrow, useFloating, offset, flip, shift } from '@floating-ui/vue'
import { onMounted, ref, watch } from 'vue'

const reference = ref(null)
const floating = ref(null)
const floatingArrow = ref(null)

const { floatingStyles, middlewareData } = useFloating(reference, floating, {
  placement: 'top-end',
  middleware: [offset(0), flip(), arrow({ element: floatingArrow })],
})

watch(
  middlewareData,
  (newValue) => {
    let offsetHei = floating.value.offsetHeight
    let arrowHei = floatingArrow.value.offsetHeight
    floatingArrow.value.style.top = `${offsetHei - 1}px`
  },
  { deep: true }
)

const flagShow = ref(false)
</script>

<template>
  <div class="main" @mouseenter="flagShow = true">
    <span ref="reference">Reference</span>
    <div class="bottom" v-if="flagShow" ref="floating" :style="floatingStyles">
      <div
        ref="floatingArrow"
        class="arrow"
        :style="{
          position: 'absolute',
          left:
            middlewareData.arrow?.x != null
              ? `${middlewareData.arrow.x}px`
              : '',
        }"
      ></div>
      <div class="content">
        <div class="c"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  position: absolute;
  top: 30%;
  left: 25%;
}
.bottom {
  margin-bottom: 12px;
}
.content {
  width: 200px;
  height: 180px;
  box-sizing: border-box;
  padding: 20px;
}
.c {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
}
.arrow {
  width: 0;
  height: 0;
  border-top: 8px solid #000;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
}
</style>
