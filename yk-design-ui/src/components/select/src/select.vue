<template>
  <div :class="bem({}, [], { 'is-expanded': show })" @click="changeShow">
    <yk-input readonly v-model="comValue">
      <template #suffix>
        <YkIcon
          :class="{ 'is-reverse': show, 'yk-icon__cart': true }"
          color="#c0c4cc"
          name="jiantou-xiangxia"
        ></YkIcon>
      </template>
    </yk-input>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { createCssScope } from '@/utils/bem'
import '../style/index'
import type { SelectsProps, SelectEmits } from './select'
import { useSelect } from './useSelect'
const bem = createCssScope('select')
defineOptions({
  name: 'yk-select',
})

const props = withDefaults(defineProps<SelectsProps>(), {})
const $emit = defineEmits<SelectEmits>()
const { show, changeShow } = useSelect(props, $emit)

const comValue = ref('')
</script>
