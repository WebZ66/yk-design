import { Ref, VNode } from 'vue'
import { MessageType, ButtonType } from '@/utils/constant'
import { MessageOptions } from '@/components/message/src/message'
export type MessageBoxAction = 'confirm' | 'cancel' | 'close'

export type MessageBoxType = 'prompt' | 'alert' | 'confirm'

export type MessageBoxCallback = (action: MessageBoxAction | { value: string; type: MessageBoxAction }) => void

export type MessageBoxInputData = {
  value: string
  action: MessageBoxAction
}

export type MessageBoxData = MessageBoxInputData & MessageBoxAction

export interface MessageBoxOptions {
  title?: string
  message?: string | VNode | (() => VNode)
  type?: MessageType
  boxType?: MessageBoxType
  icon?: string[]
  callback?: MessageBoxCallback
  customClass?: string //自定义class
  showClose?: boolean
  showInput?: boolean
  showCancelButton?: boolean
  showConfirmButton?: boolean
  cancelButtonText?: string
  confirmButtonText?: string
  confirmButtonDisabled?: boolean
  cancelButtonDisabled?: boolean

  cancelButtonType?: ButtonType
  confirmButtonType?: ButtonType

  lockScroll?: boolean
  closeOnClickModal?: boolean
  center?: boolean
  inputPlaceholder?: string
  inputValue?: string
  inputType?: 'text' | 'textarea' | 'password' | 'number'

  buttonSize?: 's' | 'm' | 'l' | 'xl'
  beforeClose?: (action: MessageBoxAction, instance: MessageBoxOptions, done: () => void) => void
}

export interface MessageBoxProps extends MessageBoxOptions {
  visible?: Ref<boolean>
  doClose(): void
  doAction(action: MessageBoxAction, inputVal?: string): void
  destroy(): void
}

export type MessageBoxShortcutMethod = ((
  message: MessageBoxOptions['message'],
  title: MessageBoxOptions['title'],
  options?: MessageBoxOptions
) => Promise<MessageBoxData>) &
  ((message: MessageBoxOptions['message'], options?: MessageOptions) => Promise<MessageBoxData>)

export interface IMessageBox {
  (options: MessageBoxOptions | string | VNode): Promise<any>
  alert: MessageBoxShortcutMethod
  confirm: MessageBoxShortcutMethod
  prompt: MessageBoxShortcutMethod
  close(): void
}
