import type { Options, Placement } from '@popperjs/core'
export interface TooltipProps {
  placement?: Placement
  // 显示内容
  content?: string
  // 触发方式
  trigger?: 'hover' | 'click' | 'contextmenu'
  // 手动控制
  manual?: boolean
  disabled?: boolean
  popperOptions?: Partial<Options>
  //自定义动画
  transition?: string
  showTimeout?: number
  hideTimeout?: number
}
export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
  // 点击空白处隐藏
  (e: 'click-outside'): void
}
export interface TooltipInstance {
  show(): void
  hide(): void
}

export interface EventListener {
  (evt: Event): void
}
