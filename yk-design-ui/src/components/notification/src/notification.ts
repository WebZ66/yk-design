import type { VNode, ComponentInternalInstance, Ref } from 'vue'

export const NotificationTypes = [
  'info',
  'success',
  'warning',
  'danger',
] as const

export type NotificationType = (typeof NotificationTypes)[number]

export const NotificationPositions = [
  'top-right',
  'top-left',
  'bottom-right',
  'bottom-left',
] as const

export type NotificationPosition = (typeof NotificationPositions)[number]

export interface NotificationProps {
  title: string
  id: string
  zIndex: number
  position: NotificationPosition
  type?: NotificationType | 'error'
  message?: string | VNode
  duration?: number
  showClose?: boolean
  offset?: number
  transitionName?: string
  icon?: string
  onClick?(): void
  onClose?(): void
  onDestroy(): void
}

export interface NotificationHandler {
  close(): void
}

export interface NotificationInstance {
  id: string
  vnode: VNode
  vm: ComponentInternalInstance
  props: NotificationProps
  handler: NotificationHandler
}

export type CreateNotificationProps = Omit<
  NotificationProps,
  'onDestroy' | 'id' | 'zIndex'
>

export type NotificationOptions = Partial<Omit<NotificationProps, 'id'>>

export type NotificationParams = string | VNode

export type NotificationFn = {
  (props: NotificationParams | CreateNotificationProps): NotificationHandler
  closeAll(type?: NotificationType): void
}

/* 返回close方法 */
export type NotificationTypeFn = (
  props: NotificationParams | CreateNotificationProps
) => NotificationHandler

/* 通过method.success 调用 */
export interface Notification extends NotificationFn {
  success: NotificationTypeFn
  warning: NotificationTypeFn
  info: NotificationTypeFn
  danger: NotificationTypeFn
}

export interface NotificationTypeComInstance {
  close(): void
  bottomOffset: Ref<number>
}
