import { PopoverProps } from './popover';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PopoverProps>, {
    placement: string;
    width: string;
    trigger: string;
}>, {
    show(): void;
    hide(): void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    show: () => void;
    hide: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PopoverProps>, {
    placement: string;
    width: string;
    trigger: string;
}>>> & {
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}, {
    width: string | number;
    placement: "right" | "left" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
    trigger: "click" | "hover" | "manual";
}, {}>, {
    reference?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
