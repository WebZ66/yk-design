import { Dayjs } from 'dayjs'
import * as dayjs from 'dayjs'
export type TDaysInfo = {
  dateObj: Dayjs
  format: string
  currentMonth: boolean
  currentDate: boolean
  date: number
}

export function getAlldays(date: Dayjs) {
  const daysInMonth = date.daysInMonth() //获取当前月有多少天
  const startDate = date.startOf('month') //获取当前月第一天的date对象
  const dayOfWeek = startDate.day() //获取当前月第一天是周几

  const daysInfo: TDaysInfo[] = new Array(6 * 7)
  for (let i = 0; i < dayOfWeek; i++) {
    //填充empty
    const calcDate = startDate.subtract(dayOfWeek - i, 'day')
    daysInfo[i] = {
      dateObj: calcDate,
      format: calcDate.format('YYYY-MM-DD'),
      currentMonth: false,
      currentDate: isToday(calcDate),
      date: calcDate.date(),
    }
  }
  for (let i = dayOfWeek; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - dayOfWeek, 'day')
    daysInfo[i] = {
      dateObj: calcDate,
      format: calcDate.format('YYYY-MM-DD'),
      currentMonth: calcDate.month() == startDate.month(),
      currentDate: isToday(calcDate),
      date: calcDate.date(),
    }
  }
  const formatDaysInfo = formatDays(daysInfo)
  return formatDaysInfo as TDaysInfo[][]
}

export function formatDays(daysInfo: TDaysInfo[]) {
  let result = new Array(6).fill(null).map(() => new Array(7).fill(null))
  for (let i = 0; i < daysInfo.length; i++) {
    let row = Math.floor(i / 7)
    let col = Math.floor(i % 7)
    result[row][col] = daysInfo[i]
  }
  return result
}

export function isToday(date: Dayjs) {
  if (!date.isValid()) return false
  // 比较「年、月、日」是否与当天一致（单位'day'会自动校验到日）
  return date.isSame(dayjs(), 'day')
}
