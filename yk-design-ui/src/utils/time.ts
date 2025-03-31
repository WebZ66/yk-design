// vant/packages/vant/src/count-down/utils.ts
import { padZero } from './format'
import { CurrentTime } from '@/components/count-down/src/count-down'
/**
 * @description  时间转化
 * @param  time:number
 */
export function parseFormat(format: string, currentTime: CurrentTime): string {
  const { days } = currentTime
  let { hours, minutes, seconds, milliseconds } = currentTime

  // 有 DD 参数，补零替换，没有则小时数加上天数
  if (format.includes('DD')) {
    format = format.replace('DD', padZero(days))
  } else {
    hours += days * 24
  }

  // 有 HH 参数，补零替换，没有则分钟数加上小时数
  if (format.includes('HH')) {
    format = format.replace('HH', padZero(hours))
  } else {
    minutes += hours * 60
  }

  // 有 mm 参数，补零替换，没有则秒数加上分钟数
  if (format.includes('mm')) {
    format = format.replace('mm', padZero(minutes))
  } else {
    seconds += minutes * 60
  }

  // 有 mm 参数，补零替换，没有则毫秒数加上秒数
  if (format.includes('ss')) {
    format = format.replace('ss', padZero(seconds))
  } else {
    milliseconds += seconds * 1000
  }

  // 毫秒数 默认补三位数，按照格式最终给出对应的位数
  if (format.includes('S')) {
    const ms = padZero(milliseconds, 3)

    if (format.includes('SSS')) {
      format = format.replace('SSS', ms)
    } else if (format.includes('SS')) {
      format = format.replace('SS', ms.slice(0, 2))
    } else {
      format = format.replace('S', ms.charAt(0))
    }
  }

  // 最终返回格式化的数据
  return format
}
