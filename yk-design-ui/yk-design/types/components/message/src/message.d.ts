import { VNode, ComponentInternalInstance, Ref } from 'vue';

export declare const MessageType: readonly ["info", "success", "warning", "danger", "error"];
export type MessageType = (typeof MessageType)[number];
export declare const messageTypeList: MessageType[];
export interface MessageHandler {
    close(): void;
}
export type MessageFn = {
    (props: CreateMessageProps | MessageParams): MessageHandler;
    closeAll(type: MessageType): void;
};
export type MessageTypeFn = (props: CreateMessageProps | MessageParams) => MessageHandler;
export interface Message extends MessageFn {
    success: MessageTypeFn;
    warning: MessageTypeFn;
    danger: MessageTypeFn;
    error: MessageTypeFn;
    info: MessageTypeFn;
}
export interface MessageProps {
    message?: string | VNode;
    type?: MessageType;
    icon?: string;
    duration?: number;
    showClose?: boolean;
    offset?: number;
    zIndex: number;
    onDestroy: () => void;
    id: string;
    transitionName?: string;
}
export type MessageOptions = Partial<Omit<MessageProps, 'id'>>;
export type MessageParams = string | VNode;
export interface MessageInstance {
    id: string;
    vnode: VNode;
    props: MessageProps;
    vm: ComponentInternalInstance;
    handler: MessageHandler;
}
export interface MessageCompInstance {
    close(): void;
    bottomOffset: Ref<number>;
}
export type CreateMessageProps = Omit<MessageProps, 'onDestroy' | 'id' | 'zIndex'>;
