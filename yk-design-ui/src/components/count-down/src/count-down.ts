export type TCountDownProps = {
  time: number
  isMilliSecond?: boolean //已s或ms为单位
  autoPlay?: boolean
  onChange?: (current: CurrentTime) => void
  onFinish?: () => void
}

export type CurrentTime = {
  days: number
  hours: number
  total: number
  minutes: number
  seconds: number
  milliseconds: number
}
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

// 解析时间
export function parseTime(time: number): CurrentTime {
  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  }
}



