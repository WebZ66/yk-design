export interface PopoverProps {
  title?: string
  content?: string
  width?: string | number
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  trigger?: 'hover' | 'click' | 'manual'
  popoverClass?: string
}

export interface PopoverEmit {
  (e: 'show'): void
  (e: 'hide'): void
}
