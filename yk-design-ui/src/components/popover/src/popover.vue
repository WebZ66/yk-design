<script setup>
import { arrow, useFloating, offset, flip, shift } from '@floating-ui/vue'
import { onMounted, ref, watch } from 'vue'

const reference = ref(null)
const floating = ref(null)
const floatingArrow = ref(null)

const { floatingStyles, middlewareData } = useFloating(reference, floating, {
  placement: 'top-start',
  middleware: [offset(10), flip(), arrow({ element: floatingArrow })],
})

watch(
  middlewareData,
  (newValue) => {
    console.log(floating.value.offsetHeight)
    console.log('newValue', newValue)
  },
  { deep: true }
)
</script>

<template>
  <div class="main">
    <span ref="reference">Reference</span>
    <div ref="floating" :style="floatingStyles">
      <div
        ref="floatingArrow"
        class="arrow"
        :style="{
          position: 'absolute',
          left:
            middlewareData.arrow?.x != null
              ? `${middlewareData.arrow.x}px`
              : '',
          top: `70px`,
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
.content {
  width: 100px;
  height: 80px;
  box-sizing: border-box;
  padding: 10px;
}
.c {
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
}
.arrow {
  width: 10px;
  height: 10px;
  background-color: red;
}
</style>
