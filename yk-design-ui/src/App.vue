<template>
  <div class="test-container">
    <h1>测试</h1>
    <hr />
    <YkSwitch v-model="flag" @update:model-value="handleClick" />
    <YkSwitch
      v-model="flag"
      size="m"
      checked-color="#1f80ff"
      unchecked-color="red"
    ></YkSwitch>
    <YkSwitch v-model="myFlag2" size="m" :loading="true"></YkSwitch>
    <!--   <YkButton type="primary" size="s">小型按钮</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton type="primary" size="m" :loading="true">加载按钮</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton :type="'secondary'" size="m">深色按钮</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton :type="'outline'" size="xl">大型按钮</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton :type="'primary'" size="m" shape="circle">+</YkButton>
    <span :style="{ 'margin-right': '20px' }"></span>
    <YkButton :type="'secondary'" size="s" shape="round">
      <template #icon>
        <YkIcon name="saoma" color="#fff"></YkIcon>
      </template>
    </YkButton> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import YkButton from '@/components/Button/src/YkButton.vue'
import YkSwitch from '@/components/switch/src/switch.vue'
const flag = ref(1)
const myFlag2 = ref(true)
function handleClick(value) {
  console.log(value)
}
</script>

<style scoped>
.test-container {
  padding: 0 100px;
}
</style>
