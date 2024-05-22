<template>
  <div :class="[type === 'textarea' ? 'el-textarea' : 'el-input']">
    <!-- 单行文本输入框 -->
    <template v-if="type !== 'textarea'">
      <!-- 输入框前置内容 -->
      <div class="el-input-group__prepend"></div>
      <!-- 表单输入控件 -->
      <input />
      <!-- 输入框头部内容 -->
      <span class="el-input__prefix"></span>
      <!-- 输入框尾部内容 -->
      <span class="el-input__suffix"></span>
      <!-- 输入框后置内容 -->
      <div class="el-input-group__append"></div>
    </template>
    <!-- 多行文本输入的文本域 -->
    <textarea></textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>

<style scoped></style>
