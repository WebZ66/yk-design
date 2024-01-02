<template>
  <div :class="bem()">
    <label>
      <input type="radio" />
      <span :class="bem('label', ['s'])">特殊的</span>
    </label>
    <div class="s">123</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { createCssScope } from '@/utils/bem'

const bem = createCssScope('radio')

defineOptions({
  name: 'yk-radio',
})
</script>

<style lang="scss" scoped>
@use '../style/radio.scss' as radio;
.s {
  color: #fff;
  background-color: radio.$radio-color;
}
</style>
