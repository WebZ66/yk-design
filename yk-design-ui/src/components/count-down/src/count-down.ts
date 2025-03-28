export type TCountDownProps = {
  time: string | number
  isMilliSecond?: boolean //已s或ms为单位
  onStart?: () => any
  onFinish?: () => any
}

export type TTimeType = {
  dd?: number
  hh?: number
  mm?: number
  ss?: number
}

export const CountDownEmits = {
  change: (val: TTimeType) => val,
}
