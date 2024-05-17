import { default as Switch } from './switch.vue';

export declare const YkSwitch: import('../../../utils').SFCWithInstall<import('vue').DefineComponent<{
    loading: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    size: {
        type: import('vue').PropType<"s" | "m" | "M" | "S">;
        default: string;
    };
    modelValue: {
        type: import('vue').PropType<import('./type').valueType>;
        required: true;
    };
    checkedValue: {
        type: import('vue').PropType<import('./type').valueType>;
        default: boolean;
    };
    unCheckedValue: {
        type: import('vue').PropType<import('./type').valueType>;
        default: boolean;
    };
    checkedColor: {
        type: import('vue').PropType<string>;
        default: string;
    };
    uncheckedColor: {
        type: import('vue').PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: import('./type').valueType, event: Event) => void;
    change: (value: import('./type').valueType, event: Event) => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    loading: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    size: {
        type: import('vue').PropType<"s" | "m" | "M" | "S">;
        default: string;
    };
    modelValue: {
        type: import('vue').PropType<import('./type').valueType>;
        required: true;
    };
    checkedValue: {
        type: import('vue').PropType<import('./type').valueType>;
        default: boolean;
    };
    unCheckedValue: {
        type: import('vue').PropType<import('./type').valueType>;
        default: boolean;
    };
    checkedColor: {
        type: import('vue').PropType<string>;
        default: string;
    };
    uncheckedColor: {
        type: import('vue').PropType<string>;
        default: string;
    };
}>> & {
    onChange?: ((value: import('./type').valueType, event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./type').valueType, event: Event) => any) | undefined;
}, {
    loading: boolean;
    size: "s" | "m" | "M" | "S";
    checkedValue: import('./type').valueType;
    unCheckedValue: import('./type').valueType;
    checkedColor: string;
    uncheckedColor: string;
}, {}>> & Record<string, any>;
export default Switch;
