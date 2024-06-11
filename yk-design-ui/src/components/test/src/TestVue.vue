<template>
  <div>
    <div title="yk-radio">
      <YkRadio v-model="radio1" :value="'1'" disabled>选项一</YkRadio>
      <YkRadio v-model="radio1" :value="'2'" disabled>选项二</YkRadio>
      <div :style="{ padding: '10px 0' }"></div>
      <yk-radio-group v-model="radio2">
        <YkRadio :value="'1'">选项一</YkRadio>
        <YkRadio :value="'2'">选项二</YkRadio>
      </yk-radio-group>
    </div>
    <hr />

    <hr />
    <div title="yk-switch">
      <YkSwitch v-model="flag" @update:model-value="handleClick" />
      <YkSwitch
        v-model="flag"
        size="m"
        checked-color="#1f80ff"
        unchecked-color="red"
        :loading="true"
      ></YkSwitch>
      <YkSwitch v-model="myFlag2" size="m"></YkSwitch>
    </div>
    <hr />
    <div title="yk-button">
      <YkButton type="primary" size="s">小型按钮</YkButton>
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
      </YkButton>
    </div>
    <hr />
    <div title="yk-avatar">
      <YkAvatar :size="'xl'"></YkAvatar>
    </div>
    <div title="yk-avatar-group">
      <AvatarGroup :max="4">
        <YkAvatar v-for="item in 3" :key="item" :imgUrl="i1"></YkAvatar>
        <YkAvatar v-for="item in 2" :key="item" :imgUrl="i2"></YkAvatar>
      </AvatarGroup>
    </div>
    <hr />
    <div title="yk-upload">
      <YkUpload />
    </div>
    <hr />
    <div title="yk-carousel">
      <YkCarousel :size="'l'" :carousel-list="[i1, i2, i3, i4]" />
    </div>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import AvatarGroup from '@/components/avatar/src/avatar-group.vue'

const i1 = new URL('@/assets/images/1.png', import.meta.url).href
const i2 = new URL('@/assets/images/2.png', import.meta.url).href
const i3 = new URL('@/assets/images/3.png', import.meta.url).href
const i4 = new URL('@/assets/images/test.png', import.meta.url).href

/* switch */
const flag = ref(true)
const myFlag2 = ref(false)
const handleClick = function () {}
defineOptions({
  name: 'YkTest',
})

/* radio */
const radio1 = ref('1')
const radio2 = ref('0')
</script>

<style scoped></style>
