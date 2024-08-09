import { isNumber, isString } from 'lodash-es'

const isStringNumber = (val: string): boolean => {
  if (!isString(val)) return false
  return !Number.isNaN(Number(val))
}

export function addUnit(val?: string | number, defaultUnit = 'px'): string {
  if (!val) return ''
  if (isNumber(val) || isStringNumber(val)) {
    return `${val}${defaultUnit}`
  }
  if (isString(val)) {
    return val
  }
  return val + ''
}
