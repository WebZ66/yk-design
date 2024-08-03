<template>
  <i ref="iconRef" class="yk-icon" :class="[props.type ? `yk-icon--${props.type}` : '']">
    <font-awesome-icon v-bind="props" />
  </i>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IconProps } from './icon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../style/index'
library.add(fas)
defineOptions({
  name: 'YkIcon',
})
const props = withDefaults(defineProps<IconProps>(), {})

const iconRef = ref()
</script>
