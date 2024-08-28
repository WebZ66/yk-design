<template>
  <div class="yk-rate">
    <span
      v-for="(item, key) in max"
      :key="key"
      class="yk-rate__item"
      :style="{ cursor: rateDisabled ? 'auto' : 'pointer' }"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <YkIcon
        class="yk-rate__icon"
        :icon="classes[item - 1]"
        :style="getIconStyle(item)"
        :class="[{ hover: hoverIndex === item }]"
      >
        <YkIcon
          v-if="showDecimalIcon(item)"
          class="yk-rate__decimal"
          :style="decimalStyle"
          :icon="'fa-solid fa-star'"
        />
      </YkIcon>
    </span>
    <span class="yk-rate__text">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'
import { RateEmits, RateProps } from './rate'

import '../style'
defineOptions({
  name: 'YkRate',
})
const props = withDefaults(defineProps<RateProps>(), {
  max: 5,
  modelValue: 0,
  disabled: false,
  allowHalf: false,
  lowThreshold: 2,
  highThreshold: 4,
  iconClasses: () => ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'], //实心
  colors: () => ['#F7BA2A', 'red', 'blue'],
  voidIconClass: 'fa-regular fa-star', //空心
  voidColor: '#C6D1DE',
  disabledVoidIconClass: 'fa-solid fa-star',
  disabledVoidColor: '#EFF2F7',
})
const $emits = defineEmits<RateEmits>()
const rateDisabled = computed(() => {
  return props.disabled
})
const text = computed(() => {
  return ''
})

const currentValue = ref(props.value ?? props.modelValue)

//classMap 如果是数组转化为三个区间对应的icon对象
const classMap = computed(() => {
  return Array.isArray(props.iconClasses)
    ? {
        [props.lowThreshold]: props.iconClasses[0],
        [props.highThreshold]: { value: props.iconClasses[1], excluded: true },
        [props.max]: props.iconClasses[2],
      }
    : props.iconClasses
})

const colorMap = computed(() => {
  return Array.isArray(props.colors)
    ? {
        [props.lowThreshold]: props.colors[0],
        [props.highThreshold]: { value: props.colors[1], excluded: true },
        [props.max]: props.colors[2],
      }
    : props.colors
})

//基于组件的绑定值，生成不同的icon图标类名数组
//activeClass 根据不同的currentValue，返回不同区间段的高亮图标icon名
const activeClass = computed(() => {
  return getValueFromMap(currentValue.value, classMap.value)
})
//未选中的icon图标名
const voidClass = computed(() => {
  return rateDisabled.value ? props.disabledVoidIconClass : props.voidIconClass
})
const classes = computed(() => {
  const result: string[] = []
  let i = 0
  let threshold = currentValue.value
  //半选逻辑 2.2
  if (props.allowHalf && currentValue.value !== Math.floor(currentValue.value)) {
    threshold--
  }
  for (; i < threshold; i++) {
    result.push(activeClass.value)
  }
  for (; i < props.max; i++) {
    result.push(voidClass.value)
  }
  return result
})

const activeColor = computed(() => {
  return getValueFromMap(currentValue.value, colorMap.value)
})

//color
function getIconStyle(item: number) {
  const voidColor = rateDisabled.value ? props.disabledVoidColor : props.voidColor
  return {
    color: item <= currentValue.value ? activeColor.value : voidColor,
  }
}

//根据currentValue值返回对应map中的值  主要用于判断是否被排除 exclude
function getValueFromMap(value: number, map: any) {
  //先找到符合条件的键，然后取第一个键对应的值
  const matchedKeys = Object.keys(map)
    .filter((key: string | number) => {
      const val = map[key]
      // 判断是哪个 如果是第一个和第三个就肯定不包括
      const excluded = val instanceof Object ? val.excluded : false
      //判断当前的currentValue属于哪个区间  如果是4 return 4<4 false所以不返回，
      return excluded ? value < (key as number) : value <= (key as number)
    })
    .sort((a: any, b: any) => a - b)
  const matchedValue = map[matchedKeys[0]]
  return matchedValue instanceof Object ? matchedValue.value : matchedValue || ''
}

/* 半选 */
//用于非只读模式下控制半星展示，当绑定之包含小数且大于0.5时为true
const pointerAtLeftHalf = ref(true)

const valueDecimal = computed(() => {
  return currentValue.value * 100 - Math.floor(currentValue.value) * 100
})
watch(
  currentValue,
  (newValue) => {
    pointerAtLeftHalf.value = newValue !== Math.floor(newValue)
  },
  {
    immediate: true,
    flush: 'post',
  }
)

function showDecimalIcon(item: number) {
  //只读模式disabled下，默认支持半选效果,且只有那一个有半选
  let showWhenDisabled =
    rateDisabled.value && valueDecimal.value > 0 && item - 1 < currentValue.value && item > currentValue.value
  //非只读模式下，小数位要不小于0.5才会显示半选效果。
  let showWhenAllowHalf =
    pointerAtLeftHalf.value && props.allowHalf && item - 0.5 <= currentValue.value && item > currentValue.value
  return showWhenAllowHalf || showWhenDisabled
}

const decimalStyle = computed(() => {
  let width = ''
  //只读模式
  if (rateDisabled.value) {
    width = `${valueDecimal.value}%`
  } else if (props.allowHalf) {
    width = '50%'
  }
  return {
    color: activeColor.value,
    width,
  }
})

/* 事件处理 */
const hoverIndex = ref(0)

function setCurrentValue(item: number, $event: MouseEvent) {
  if (rateDisabled.value) return
  if (props.allowHalf) {
    //半选
    const YkRate = document.querySelector('.yk-rate')
    let target = YkRate?.querySelector('.yk-rate__icon') as HTMLElement
    pointerAtLeftHalf.value = $event.offsetX * 2 <= target?.clientWidth
    currentValue.value = pointerAtLeftHalf.value ? item - 0.5 : item
  } else {
    currentValue.value = item
  }
  hoverIndex.value = item
}

function resetCurrentValue() {
  if (rateDisabled.value) {
    return
  }
  if (props.allowHalf) {
    pointerAtLeftHalf.value = currentValue.value !== Math.floor(currentValue.value)
  }
  currentValue.value = props.value ?? props.modelValue
  hoverIndex.value = -1
}

function selectValue(item: number) {
  if (rateDisabled.value) {
    return
  }
  if (props.allowHalf) {
    $emits('update:modelValue', currentValue.value)
    $emits('change', currentValue.value)
  } else {
    $emits('update:modelValue', item)
    $emits('change', item)
  }
}
</script>
