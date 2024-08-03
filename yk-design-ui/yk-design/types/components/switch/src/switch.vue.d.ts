import { ISwitchProps, valueType } from './type';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ISwitchProps>, {
    size: string;
    checkedValue: boolean;
    unCheckedValue: boolean;
    checkedColor: string;
    uncheckedColor: string;
    loading: boolean;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: valueType, event: Event) => void;
    change: (value: valueType, event: Event) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ISwitchProps>, {
    size: string;
    checkedValue: boolean;
    unCheckedValue: boolean;
    checkedColor: string;
    uncheckedColor: string;
    loading: boolean;
}>>> & {
    onChange?: ((value: valueType, event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: valueType, event: Event) => any) | undefined;
}, {
    loading: boolean;
    size: "s" | "m" | "M" | "S";
    checkedValue: valueType;
    unCheckedValue: valueType;
    checkedColor: string;
    uncheckedColor: string;
}, {}>;
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
