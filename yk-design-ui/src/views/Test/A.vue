<template>
  <div>
    <hr />
    <checkbox v-model="checked1" />
    <checkbox v-model="checked2" />
    <hr />

    <h2>
      {{ checkedGroupValue }}
    </h2>
    <checkboxGroup v-model="checkedGroupValue">
      <checkbox :value="'1'"></checkbox>
      <checkbox :value="'2'"></checkbox>
    </checkboxGroup>

    <slot></slot>
    <slot name="test1"></slot>
    <div
      v-for="(item, index) in 3"
      :key="item"
      :class="{ [`icon-list${item}`]: true, active: activeIndex == index }"
    >
      <div class="icon"></div>
      <div class="label">{{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, provide, watch, useSlots } from 'vue'
import checkbox from '@/components/checkbox/src/checkbox.vue'
import checkboxGroup from '@/components/checkbox/src/checkbox-group.vue'

const checked1 = ref(true)
const checked2 = ref(0)
const checkedGroupValue = ref(['1'])
const activeIndex = ref(0)
</script>

<style lang="scss" scoped>
$iconArr: 1, 2, 3;

@each $icon-name in $iconArr {
  .icon-list#{$icon-name} {
    width: 200px;
    height: 200px;
    margin: 10px;
    .icon {
      width: 100px;
      height: 100px;
      background: url('@/assets/images/#{$icon-name}.png')
        no-repeat
        center
        center/100%
        100%;
    }
    &.active {
      .icon {
        background-image: none;
      }
    }
  }
}
</style>
