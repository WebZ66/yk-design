import { VNode, ComponentInternalInstance, Ref } from 'vue';

export declare const NotificationTypes: readonly ["info", "success", "warning", "danger"];
export type NotificationType = (typeof NotificationTypes)[number];
export declare const NotificationPositions: readonly ["top-right", "top-left", "bottom-right", "bottom-left"];
export type NotificationPosition = (typeof NotificationPositions)[number];
export interface NotificationProps {
    title: string;
    id: string;
    zIndex: number;
    position: NotificationPosition;
    type?: NotificationType | 'error';
    message?: string | VNode;
    duration?: number;
    showClose?: boolean;
    offset?: number;
    transitionName?: string;
    icon?: string;
    onClick?(): void;
    onClose?(): void;
    onDestroy(): void;
}
export interface NotificationHandler {
    close(): void;
}
export interface NotificationInstance {
    id: string;
    vnode: VNode;
    vm: ComponentInternalInstance;
    props: NotificationProps;
    handler: NotificationHandler;
}
export type CreateNotificationProps = Omit<NotificationProps, 'onDestroy' | 'id' | 'zIndex'>;
export type NotificationOptions = Partial<Omit<NotificationProps, 'id'>>;
export type NotificationParams = string | VNode;
export type NotificationFn = {
    (props: NotificationParams | CreateNotificationProps): NotificationHandler;
    closeAll(type?: NotificationType): void;
};
export type NotificationTypeFn = (props: NotificationParams | CreateNotificationProps) => NotificationHandler;
export interface Notification extends NotificationFn {
    success: NotificationTypeFn;
    warning: NotificationTypeFn;
    info: NotificationTypeFn;
    danger: NotificationTypeFn;
}
export interface NotificationTypeComInstance {
    close(): void;
    bottomOffset: Ref<number>;
}
