<template>
  <div class="icon-container">
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'magnifying-glass']"></YkIcon>
      <span class="yk-icon-text">magnifying-glass</span>
    </div>

    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'icicles']"></YkIcon>
      <span class="yk-icon-text">icicles</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'circle-xmark']"></YkIcon>
      <span class="yk-icon-text">circle-xmark</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'house']"></YkIcon>
      <span class="yk-icon-text">house</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'check']"></YkIcon>
      <span class="yk-icon-text">check</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'download']"></YkIcon>
      <span class="yk-icon-text">download</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'user']"></YkIcon>
      <span class="yk-icon-text">user</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'image']"></YkIcon>
      <span class="yk-icon-text">image</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'bars']"></YkIcon>
      <span class="yk-icon-text">bars</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'music']"></YkIcon>
      <span class="yk-icon-text">music</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'cloud']"></YkIcon>
      <span class="yk-icon-text">cloud</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'comment']"></YkIcon>
      <span class="yk-icon-text">comment</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'arrow-up']"></YkIcon>
      <span class="yk-icon-text">arrow-up</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'paperclip']"></YkIcon>
      <span class="yk-icon-text">paperclip</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'file']"></YkIcon>
      <span class="yk-icon-text">file</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'bolt']"></YkIcon>
      <span class="yk-icon-text">bolt</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'car']"></YkIcon>
      <span class="yk-icon-text">car</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'apple']"></YkIcon>
      <span class="yk-icon-text">apple</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'lock']"></YkIcon>
      <span class="yk-icon-text">lock</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'plus']"></YkIcon>
      <span class="yk-icon-text">plus</span>
    </div>
    <div class="yk-icon-demo">
      <YkIcon :icon="['fas', 'minus']"></YkIcon>
      <span class="yk-icon-text">minus</span>
    </div>
  </div>
</template>

<style scoped>
.icon-container {
  display: flex;
  flex-wrap: wrap;

  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
}
.yk-icon-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 14.28%;
  align-items: center;
  text-align: center;
  height: 100px;
  color: #666;
  font-size: 13px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  transition: color 0.5s;
  cursor: pointer;
}
.yk-icon-demo .yk-icon {
  font-size: 20px;
}

.yk-icon-demo:hover {
  color: #5cb6ff;
}
.yk-icon-text {
  margin-top: 10px;
  line-height: 14px;
}
</style>
