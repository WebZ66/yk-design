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
      </YkIcon>
    </span>
    <span class="yk-rate__text">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
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
  return rateDisabled.value ? '' : props.voidIconClass
})
const classes = computed(() => {
  const result: string[] = []
  let i = 0
  let threshold = currentValue.value
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

function getIconStyle(item: number) {
  const voidColor = rateDisabled.value ? '' : props.voidColor
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

/* 事件处理 */
const hoverIndex = ref(0)

function setCurrentValue(item: number, $event: Event) {
  if (rateDisabled.value) return
  if (props.allowHalf) {
    console.log('半选情况')
  } else {
    currentValue.value = item
  }

  hoverIndex.value = item
}

function resetCurrentValue() {
  if (rateDisabled.value) {
    return
  }
  currentValue.value = props.value ?? props.modelValue
  hoverIndex.value = -1
}

function selectValue(item: number) {
  if (rateDisabled.value) {
    return
  }
  if (props.allowHalf) {
    console.log('半选情况')
  } else {
    $emits('update:modelValue', item)
    $emits('change', item)
  }
}
</script>
