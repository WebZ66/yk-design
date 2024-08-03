import { NotificationProps, NotificationFn, Notification } from './notification';

export declare const notificationDefaults: {
    type: string;
    duration: number;
    message: string;
    offset: number;
    transitionName: string;
    showClose: boolean;
};
export declare const notification: NotificationFn & Partial<Notification>;
export declare function getLastBottomOffset(this: NotificationProps): any;
declare const _default: Notification;
export default _default;
