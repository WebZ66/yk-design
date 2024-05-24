<template>
  <div :class="[bem([], {}, { disabled: false })]">
    <!-- 输入框前置内容 -->
    <div class="yk-input-group__prepend"></div>
    <!-- 表单输入控件 -->
    <input :class="[bem('inner')]" placeholder="请输入内容" />
    <!-- 输入框头部内容 -->
    <span :class="bem('prefix')"></span>
    <!-- 输入框尾部内容 -->
    <span :class="bem('suffix')"></span>
    <!-- 输入框后置内容 -->
    <div class="yk-input-group__append"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { createCssScope } from '@/utils/bem'
import '../style'
const bem = createCssScope('input')
</script>

<style scoped></style>
