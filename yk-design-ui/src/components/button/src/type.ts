import { Shape, Size, ButtonType } from '@/utils/constant'

export type ButtonProps = {
  type?: ButtonType
  size?: Size
  shape?: Shape
  long?: boolean
  loading?: boolean
  disabled?: boolean
}
