<template>
  <div class="basic_btn">
    <YkButton size="l">默认按钮</YkButton>
    <YkButton type="primary" size="l">主要按钮</YkButton>
    <YkButton type="success" size="l">成功按钮</YkButton>
    <YkButton type="info" size="l">信息按钮</YkButton>
    <YkButton type="danger" size="l">危险按钮</YkButton>
    <YkButton size="l" shape="round">默认按钮</YkButton>
    <YkButton type="primary" size="l" shape="round">主要按钮</YkButton>
    <YkButton type="success" size="l" shape="round">成功按钮</YkButton>
    <YkButton type="info" size="l" shape="round">信息按钮</YkButton>
    <YkButton type="danger" size="l" shape="round">危险按钮</YkButton>
    <br />
    <YkButton type="success" size="l" shape="circle">
      <template #icon>
        <YkIcon :icon="['fas', 'circle-check']" />
      </template>
    </YkButton>
    <YkButton type="danger" size="l" shape="circle">
      <template #icon>
        <YkIcon :icon="['fas', 'circle-xmark']" />
      </template>
    </YkButton>
    <YkButton type="text" size="l" shape="circle">
      <template #icon>
        <YkIcon :icon="['fas', 'question']" />
      </template>
    </YkButton>
    <YkButton type="warning" size="l" shape="circle">
      <template #icon>
        <YkIcon :icon="['fas', 'circle-info']" />
      </template>
    </YkButton>
  </div>
</template>

<style scoped>
.basic_btn {
  .yk-button {
    margin: 10px;
  }
}
</style>
