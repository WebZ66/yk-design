export type TCountDownCardProps = {
  time: number
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

export type TDataTimeItem = {
  id: number
  text: string
  type: 'days' | 'hours' | 'minutes' | 'seconds'
}

export const countDownCardEmits = {
  change: (value: CurrentTime) => value,
}
