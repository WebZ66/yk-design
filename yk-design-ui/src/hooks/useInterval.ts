type TUseInterval = (callback: () => any, delay: number, immediate?: boolean) => () => void
export const useInterval: TUseInterval = (callback, delay, immediate = false) => {
  const start = Date.now()
  let timerId: NodeJS.Timeout | number | null = null
  let count = -1
  if (immediate) {
    callback()
  }
  function loop() {
    count++
    const targetNextTime = start + count * delay
    const current = Date.now()
    const deviation = current - targetNextTime //计算偏差
    const nextDelay = Math.max(0, delay - deviation)
    timerId = setTimeout(() => {
      callback()
      loop()
    }, nextDelay)
  }
  loop()
  return () => {
    clearTimeout(timerId as number)
  }
}
