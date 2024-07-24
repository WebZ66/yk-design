import { shallowReactive, isVNode, render, h, nextTick } from 'vue'
import type {
  NotificationInstance,
  NotificationParams,
  NotificationProps,
  CreateNotificationProps,
  NotificationFn,
  Notification,
} from './notification'
import { NotificationTypes } from './notification'
import NotificationVue from './notification.vue'

const instances: NotificationInstance[] = shallowReactive([])
let seed = 0
export const notificationDefaults = {
  type: 'info',
  duration: 3000,
  message: '123',
  offset: 20,
  transitionName: 'fade-up',
  showClose: true,
}

/* 
参数转化 
   直接传入字符串 返回{message:'xxx'}
*/
const normalizeOptions = (
  opts: NotificationParams | CreateNotificationProps
): CreateNotificationProps => {
  const result =
    !opts || isVNode(opts) || typeof opts == 'string' ? { message: opts } : opts
  return { ...notificationDefaults, ...result } as CreateNotificationProps
}

const createNotification = (props: CreateNotificationProps) => {
  const id = `notification_${seed++}`
  const container = document.createElement('div')
  //实例销毁方法，重渲染
  const destroy = () => {
    const idx = instances.findIndex((item) => item.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    render(null, container)
  }
  //内部props，外部传来的是无destroy、id和zIndex的
  const _props: NotificationProps = {
    ...props,
    id,
    onDestroy: destroy,
    zIndex: 200,
  }
  //创建组件的虚拟节点
  const vnode = h(NotificationVue, _props)
  //渲染节点到container上
  nextTick(() => {
    render(vnode, container)
    document.body.appendChild(container.firstElementChild!)
  })
  const handler = {
    close: vnode.component?.exposed!.close(),
  }
  const instance: NotificationInstance = {
    id,
    props: _props,
    vnode,
    vm: vnode.component!,
    handler,
  }
  instances.push(instance)
  return instance
}

export const notification: NotificationFn & Partial<Notification> = (opts) => {
  const normalized = normalizeOptions(opts)
  const instance = createNotification(normalized)

  return instance.handler
}

NotificationTypes.forEach((type) => {
  notification[type] = (opts) => {
    const normalized = normalizeOptions(opts)
    return notification({ ...normalized, type })
  }
})

function closeAll() {}
notification.closeAll = closeAll

export function getLastBottomOffset(this: NotificationProps) {
  const idx = instances.findIndex((item) => item.id == this.id)
  if (idx <= 0) {
    return 0
  } else {
    return instances[idx - 1].vnode.component?.exposed!.bottomOffset.value
  }
}

export default notification as Notification
