<template>
  <div :class="bem()">
    <yk-button type="primary" @click="handleNextMonthClick">+1</yk-button>
    <yk-button type="danger" @click="handlePreMonthClick">-1</yk-button>
    <yk-button @click="selectToday">今日</yk-button>
    当前时间{{ currentMonth.format('YYYY-MM') }}
    <div :class="bem('header')">
      <div :class="bem('week-item')" v-for="weekItem in weekList" :key="weekItem">{{ weekItem }}</div>
    </div>
    <div :class="bem('body')">
      <div class="calendar-row" v-for="(row, idx) in daysInfo" :key="idx">
        <div :class="calendarDayItemClasses(col)" v-for="col in row" :key="col.format"
          @click="onChangeValue(col.dateObj)">
          <component v-if="props.customRender" :is="props.customRender(col.dateObj)"></component>
          <span v-else>{{ col.currentDate ? '' : col.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, h, computed } from 'vue'
import { createCssScope } from '@/utils/bem'
import '../style'
import { CalendarProps } from './calendar'
import { getAlldays, TDaysInfo } from '@/utils/day'
import { Dayjs } from 'dayjs'
import * as dayjs from 'dayjs'

const bem = createCssScope('calendar')
defineOptions({
  name: 'Calendar',
})

const props = withDefaults(defineProps<CalendarProps>(), {})
const $emits = defineEmits(['onChange'])
const weekList = ref(['周日', '周一', '周二', '周三', '周四', '周五', '周六'])
const calendarDayItemClasses = (dateInfo: TDaysInfo) => {
  return {
    'calendar-day-item': true,
    'current-month': dateInfo.currentMonth,
    'current-date': dateInfo.currentDate,
    'is-selected': props.value.isSame(dateInfo.dateObj, 'day')
  }
}

const currentMonth = ref(props.value)
const daysInfo = ref(getAlldays(currentMonth.value))

const onChangeValue = (date: Dayjs) => {
  $emits('onChange', date)
}

const handleNextMonthClick = () => {
  currentMonth.value = currentMonth.value.add(1, 'month')
  daysInfo.value = getAlldays(currentMonth.value)
}

const handlePreMonthClick = () => {
  currentMonth.value = currentMonth.value.subtract(1, 'month')
  daysInfo.value = getAlldays(currentMonth.value)
}

const selectToday = () => {
  currentMonth.value = dayjs()
  daysInfo.value = getAlldays(currentMonth.value)
  onChangeValue(currentMonth.value)
}

</script>
