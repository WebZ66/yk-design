import { default as Input } from './input.vue';

export declare const YkInput: import('../../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        size: {
            type: import('vue').PropType<"small" | "large">;
        };
        type: {
            type: import('vue').PropType<string>;
            default: string;
        };
        form: {
            type: import('vue').PropType<string>;
        };
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        id: {
            type: import('vue').PropType<string>;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        showPassword: {
            type: import('vue').PropType<boolean>;
        };
        placeholder: {
            type: import('vue').PropType<string>;
            default: string;
        };
        readonly: {
            type: import('vue').PropType<boolean>;
        };
        autocomplete: {
            type: import('vue').PropType<string>;
            default: string;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
    }, {
        ref: import('vue').ShallowRef<HTMLInputElement | undefined>;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string) => void;
        clear: () => void;
        change: (value: string) => void;
        input: (value: string) => void;
        focus: (event: FocusEvent) => void;
        blur: (event: FocusEvent) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        size: {
            type: import('vue').PropType<"small" | "large">;
        };
        type: {
            type: import('vue').PropType<string>;
            default: string;
        };
        form: {
            type: import('vue').PropType<string>;
        };
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        id: {
            type: import('vue').PropType<string>;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        showPassword: {
            type: import('vue').PropType<boolean>;
        };
        placeholder: {
            type: import('vue').PropType<string>;
            default: string;
        };
        readonly: {
            type: import('vue').PropType<boolean>;
        };
        autocomplete: {
            type: import('vue').PropType<string>;
            default: string;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
    }, {
        type: string;
        placeholder: string;
        autocomplete: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        size: {
            type: import('vue').PropType<"small" | "large">;
        };
        type: {
            type: import('vue').PropType<string>;
            default: string;
        };
        form: {
            type: import('vue').PropType<string>;
        };
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        id: {
            type: import('vue').PropType<string>;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        showPassword: {
            type: import('vue').PropType<boolean>;
        };
        placeholder: {
            type: import('vue').PropType<string>;
            default: string;
        };
        readonly: {
            type: import('vue').PropType<boolean>;
        };
        autocomplete: {
            type: import('vue').PropType<string>;
            default: string;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
    }, {
        ref: import('vue').ShallowRef<HTMLInputElement | undefined>;
    }, {}, {}, {}, {
        type: string;
        placeholder: string;
        autocomplete: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    size: {
        type: import('vue').PropType<"small" | "large">;
    };
    type: {
        type: import('vue').PropType<string>;
        default: string;
    };
    form: {
        type: import('vue').PropType<string>;
    };
    modelValue: {
        type: import('vue').PropType<string>;
        required: true;
    };
    id: {
        type: import('vue').PropType<string>;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
    };
    showPassword: {
        type: import('vue').PropType<boolean>;
    };
    placeholder: {
        type: import('vue').PropType<string>;
        default: string;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
        default: string;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
    };
}>> & {
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
}, {
    ref: import('vue').ShallowRef<HTMLInputElement | undefined>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    clear: () => void;
    change: (value: string) => void;
    input: (value: string) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, {
    type: string;
    placeholder: string;
    autocomplete: string;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        prepend?(_: {}): any;
        prefix?(_: {}): any;
        suffix?(_: {}): any;
        append?(_: {}): any;
    };
})> & Record<string, any>;
export default Input;
