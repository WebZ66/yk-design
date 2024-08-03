import { MessageFn, Message, MessageProps } from './message';

export declare const messageDefaults: {
    type: string;
    duration: number;
    offset: number;
    transitionName: string;
};
export declare const message: MessageFn & Partial<Message>;
export declare function getLastBottomOffset(this: MessageProps): any;
declare const _default: Message;
export default _default;
