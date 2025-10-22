import { Dayjs } from 'dayjs'
import { VNode } from 'vue'
export interface CalendarProps {
  value: Dayjs
  customRender?: (date: Dayjs) => VNode
}
