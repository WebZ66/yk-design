export interface TooltipProps {
  placement: string
  // 显示内容
  content?: string
  // 触发方式
  trigger?: 'hover' | 'click'
  // 手动控制
  manual?: boolean
}
export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
  // 点击空白处隐藏
  (e: 'click-outside', value: boolean): void
}
export interface TooltipInstance {
  show: () => void
  hide: () => void
}
