import { TCountDownProps, parseTime } from './count-down'
import { computed, ref } from 'vue'
function isSameSecond(time1: number, time2: number) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000)
}
export function useCountDown(options: TCountDownProps) {
  let endTime: number
  let counting: boolean = true
  const remain = ref(options.time)
  const current = computed(() => parseTime(remain.value))
  let rafId
  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0)
  const start = () => {
    if (counting) {
      endTime = Date.now() + remain.value
      counting = true
      tick()
    }
  }

  const setRemain = (value: number) => {
    remain.value = value
    if (options.onChange) {
      options.onChange(parseTime(value))
    }
  }

  const microTick = () => {
    //毫秒
    rafId = setTimeout(() => {
      if (counting) {
        setRemain(getCurrentRemain())
        if (remain.value > 0) {
          microTick()
        } else {
          options.onFinish && options.onFinish()
        }
      }
    }, 16.67)
  }
  const macroTick = () => {
    //秒
    rafId = setTimeout(() => {
      if (counting) {
        const remainRemain = getCurrentRemain()
        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          //获取当前剩余时间，如果和之前的剩余时间不是同一秒，说明过了1s，重新赋值remain
          setRemain(remainRemain)
        }

        if (remain.value > 0) {
          macroTick()
        } else {
          options.onFinish && options.onFinish()
        }
      }
    }, 16.67)
  }

  const tick = () => {
    //是否开启毫秒级渲染
    if (options.isMilliSecond) {
      microTick()
    } else {
      macroTick()
    }
  }

  const pause = () => {
    counting = !counting
    if (counting) start()
  }

  const reset = () => {
    setRemain(options.time)
    start()
  }
  //是否立即执行
  options.autoPlay && start()
  return { start, current, pause, reset }
}
