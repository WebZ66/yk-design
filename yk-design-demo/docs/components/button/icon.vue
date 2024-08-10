<template>
  <div class="basic_btn">
    <YkButton type="success" size="l">
      <template #icon>
        <YkIcon :icon="['fas', 'circle-check']" />
        成功按钮
      </template>
    </YkButton>

    <YkButton type="danger" size="l">
      <template #icon>
        <YkIcon :icon="['fas', 'circle-xmark']" />
        错误按钮
      </template>
    </YkButton>

    <YkButton type="warning" size="l">
      <template #icon>
        <YkIcon :icon="['fas', 'circle-info']" />
        警示按钮
      </template>
    </YkButton>

    <YkButton type="info" size="l">
      <template #icon>
        <YkIcon :icon="['fas', 'circle-question']" />
        文字按钮
      </template>
    </YkButton>
  </div>
</template>

<style scoped>
.basic_btn {
  .yk-button {
    margin: 0 10px;
  }
  .yk-icon {
    margin-right: 5px;
  }
}
</style>
