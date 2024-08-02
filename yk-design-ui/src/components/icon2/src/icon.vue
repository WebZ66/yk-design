<template>
  <i ref="iconRef" class="yk-icon" :class="[`yk-icon--${props.color}`, `yk-icon--${props.type}`]">
    <font-awesome-icon size="1x" :color="color" :icon="['fas', 'circle-check']" />
    123
  </i>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { IconProps } from './icon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../style/index'
library.add(fas)
defineOptions({
  name: 'YkIcon',
})
const props = withDefaults(defineProps<IconProps>(), {
  type: 'primary',
  color: 'black',
})

const iconRef = ref()
</script>
