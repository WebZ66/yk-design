<template>
  <div>
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
        <YkAvatar v-for="item in 3" :key="item" :imgUrl="img1"></YkAvatar>
        <YkAvatar v-for="item in 2" :key="item" :imgUrl="img2"></YkAvatar>
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
    <div title="yk-upload">
      <YkUpload></YkUpload>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProps } from './type'
import { ref, reactive } from 'vue'
import AvatarGroup from '@/components/avatar/src/avatar-group.vue'
import img1 from '@/assets/images/test.png'
import img2 from '@/assets/images/2.png'

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
</script>

<style scoped></style>
