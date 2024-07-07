/* 以指令方式将message挂载至页面 */
import { isVNode, render, h, shallowReactive } from 'vue'
import MessageVue from './message.vue'
import type {
  CreateMessageProps,
  MessageFn,
  MessageInstance,
  Message,
  MessageParams,
  MessageProps,
  MessageHandler,
  MessageType,
} from './message'
import { messageTypeList } from './message'
let seed = 0
const instances: MessageInstance[] = []

export const messageDefaults = {
  type: 'success',
  duration: 3000,
  offset: 10,
  transitionName: 'fade-up',
}

//对参数进行转化
const normalizeOptions = (
  opts: MessageParams | CreateMessageProps
): CreateMessageProps => {
  const result =
    !opts || isVNode(opts) || typeof opts == 'string' ? { message: opts } : opts
  return { ...messageDefaults, ...result } as CreateMessageProps
}

const createMessage = (props: CreateMessageProps): MessageInstance => {
  const id = `message_${seed++}`
  /* 创造容器 */
  const container = document.createElement('div')
  const destroy = () => {
    const idx = instances.findIndex((item) => item.id === id)
    if (idx == -1) return
    instances.splice(idx, 1)
    render(null, container)
  }
  /* 通过h函数，创建message vnode。通过render函数，渲染到container容器种，但是我们添加不是添加container，而是
    第一个子节点，即message的DOM
  */
  const _props: MessageProps = {
    ...props,
    id,
    onDestroy: destroy,
    zIndex: 200,
  }
  const vnode = h(MessageVue, _props)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!
  const handler: MessageHandler = {
    close: () => vm.exposed!.close(),
  }
  const instance: MessageInstance = {
    props: _props,
    id,
    vm,
    vnode,
    handler,
  }
  instances.push(instance)
  return instance
}

export const message: MessageFn & Partial<Message> = (options = '') => {
  const normalized = normalizeOptions(options)
  const instance = createMessage(normalized)
  return instance.handler
}

messageTypeList.forEach((type) => {
  message[type] = (opts: MessageParams | CreateMessageProps) => {
    const normalized = normalizeOptions(opts)
    return message({ ...normalized, type })
  }
})

function closeAll(type?: MessageType) {
  instances.forEach((instance) => {
    if (type) {
      instance.props.type === type && instance.handler.close()
    } else {
      instance.handler.close()
    }
  })
}
message.closeAll = closeAll

export default message as Message
