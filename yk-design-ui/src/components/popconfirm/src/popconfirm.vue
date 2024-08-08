<template>
  <YkTooltip ref="tooltipRef" type="light" trigger="click" :hide-timeout="hideAfter" placement="bottom">
    <template #content>
      <div :class="bem()">
        <div :class="bem('main')">
          <YkIcon :class="bem('icon')" v-if="!hideIcon" :icon="icon" :style="{ color: iconColor }"></YkIcon>
          {{ title }}
        </div>

        <div :class="bem('action')">
          <YkButton type="outline">取消</YkButton>
          <YkButton>确定</YkButton>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #reference>
      <slot name="reference"></slot>
    </template>
  </YkTooltip>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { createCssScope } from '@/utils/bem'
import { PopconfirmProps, PopconfirmEmits } from './popconfirm'
import { YkTooltip, type TooltipInstance } from '@/components/tooltip/src/index'
import { YkIcon } from '@/components/icon/src/index'
import { YkButton } from '@/packages'
import '../style/index'
const bem = createCssScope('popconfirm')
defineOptions({
  name: 'YkPopconfirm',
})

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: '这是一段提示文字',
  confirmButtonType: 'primary',
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
  icon: () => ['fas', 'circle-question'],
  iconColor: '#f90',
  hideAfter: 200,
  width: 150,
})
const $emits = defineEmits<PopconfirmEmits>()

const tooltipRef = ref<TooltipInstance>()
</script>

<style scoped></style>
