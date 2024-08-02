<template>
  <font-awesome-icon :icon="['fas', 'circle-check']" />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
defineOptions({
  name: 'YkIcon',
})
</script>

<style scoped></style>
