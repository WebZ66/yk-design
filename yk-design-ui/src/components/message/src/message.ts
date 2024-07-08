import type { VNode, ComponentInternalInstance, Ref } from 'vue'
export const MessageType = [
  'info',
  'success',
  'warning',
  'danger',
  'error',
] as const

export type MessageType = (typeof MessageType)[number]
export const messageTypeList: MessageType[] = [
  'info',
  'success',
  'warning',
  'danger',
  'error',
]
export interface MessageHandler {
  close(): void
}

export type MessageFn = {
  (props: CreateMessageProps | MessageParams): MessageHandler
  closeAll(type: MessageType): void
}

export type MessageTypeFn = (
  props: CreateMessageProps | MessageParams
) => MessageHandler

export interface Message extends MessageFn {
  success: MessageTypeFn
  warning: MessageTypeFn
  danger: MessageTypeFn
  error: MessageTypeFn
  info: MessageTypeFn
}

export interface MessageProps {
  // 信息文本，可以是简单字符串，也可以是复杂节点
  message?: string | VNode
  type?: MessageType
  icon?: string
  // 信息显示持续时间
  duration?: number
  // 手动关闭
  showClose?: boolean
  // 偏移
  offset?: number
  // 添加z-index
  zIndex: number
  // 手动关闭的方法
  onDestroy: () => void
  id: string
  // 过渡动画的名称
  transitionName?: string
}

export type MessageOptions = Partial<Omit<MessageProps, 'id'>>
export type MessageParams = string | VNode

export interface MessageInstance {
  id: string
  vnode: VNode
  props: MessageProps
  vm: ComponentInternalInstance
  handler: MessageHandler
}

export interface MessageCompInstance {
  close(): void
  bottomOffset: Ref<number>
}

// 用户创建Message时，被过滤掉的属性是必选的，但是不是由用户添加，而是由内部处理
// 所以将必选的过滤掉
export type CreateMessageProps = Omit<
  MessageProps,
  'onDestroy' | 'id' | 'zIndex'
>
