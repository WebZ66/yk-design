<template>
  <YkTooltip ref="tooltipRef" type="light" trigger="click" :hide-timeout="hideAfter" placement="bottom">
    <template #content>
      <div :class="bem()">
        <div :class="bem('main')" :style="computedStyle">
          <YkIcon :class="bem('icon')" v-if="!hideIcon" :icon="icon" :style="{ color: iconColor }"></YkIcon>
          {{ title }}
        </div>

        <div :class="bem('action')">
          <YkButton :type="cancelButtonType" @click="hidePopper">{{ cancelButtonText }}</YkButton>
          <YkButton :type="confirmButtonType" @click="confirm">{{ confirmButtonText }}</YkButton>
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
import { ref, reactive, computed } from 'vue'
import { createCssScope } from '@/utils/bem'
import { PopconfirmProps, PopconfirmEmits } from './popconfirm'
import { addUnit } from '@/utils/format'
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
  cancelButtonType: 'text',
  icon: () => ['fas', 'circle-question'],
  iconColor: '#f90',
  hideAfter: 200,
  width: 150,
})
const $emits = defineEmits<PopconfirmEmits>()

const computedStyle = computed(() => ({ width: addUnit(props.width, 'px') }))

const tooltipRef = ref<TooltipInstance>()

function hidePopper() {
  tooltipRef.value?.hide()
}
function confirm(e: MouseEvent) {
  $emits('confirm', e)
  hidePopper()
}
</script>

<style scoped></style>
