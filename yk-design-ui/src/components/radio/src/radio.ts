import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from './constant'
import { Size } from '@/utils/constant'

export type RadioBaseProps = {
  size?: Size
  label: number | string | boolean
  disabled?: boolean
}

//value是传递的label值，modelValue是当前选中值
export type RadioProps = RadioBaseProps & {
  modelValue?: number | string | boolean
  name?: string
  border?: boolean
  type?: 'radio' | 'button'
  solid?: boolean
}

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: RadioProps['modelValue']) => val,
  [CHANGE_EVENT]: (val: RadioProps['modelValue']) => val,
}
