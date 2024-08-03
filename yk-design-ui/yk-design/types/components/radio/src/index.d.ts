export declare const YkRadio: import('../../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import('vue').PropType<"s" | "m" | "l" | "xl">;
            default: string;
        };
        type: {
            type: import('vue').PropType<"button" | "radio">;
            default: string;
        };
        name: {
            type: import('vue').PropType<string>;
        };
        modelValue: {
            type: import('vue').PropType<string | number | boolean>;
        };
        solid: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        value: {
            type: import('vue').PropType<string | number | boolean>;
            required: true;
        };
        border: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        onChange?: ((val: string | number | boolean | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string | number | boolean | undefined) => any) | undefined;
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (val: string | number | boolean | undefined) => void;
        change: (val: string | number | boolean | undefined) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import('vue').PropType<"s" | "m" | "l" | "xl">;
            default: string;
        };
        type: {
            type: import('vue').PropType<"button" | "radio">;
            default: string;
        };
        name: {
            type: import('vue').PropType<string>;
        };
        modelValue: {
            type: import('vue').PropType<string | number | boolean>;
        };
        solid: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        value: {
            type: import('vue').PropType<string | number | boolean>;
            required: true;
        };
        border: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        onChange?: ((val: string | number | boolean | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string | number | boolean | undefined) => any) | undefined;
    }, {
        disabled: boolean;
        size: "s" | "m" | "l" | "xl";
        type: "button" | "radio";
        solid: boolean;
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
            default: boolean;
        };
        size: {
            type: import('vue').PropType<"s" | "m" | "l" | "xl">;
            default: string;
        };
        type: {
            type: import('vue').PropType<"button" | "radio">;
            default: string;
        };
        name: {
            type: import('vue').PropType<string>;
        };
        modelValue: {
            type: import('vue').PropType<string | number | boolean>;
        };
        solid: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        value: {
            type: import('vue').PropType<string | number | boolean>;
            required: true;
        };
        border: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        onChange?: ((val: string | number | boolean | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string | number | boolean | undefined) => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean;
        size: "s" | "m" | "l" | "xl";
        type: "button" | "radio";
        solid: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('vue').PropType<"s" | "m" | "l" | "xl">;
        default: string;
    };
    type: {
        type: import('vue').PropType<"button" | "radio">;
        default: string;
    };
    name: {
        type: import('vue').PropType<string>;
    };
    modelValue: {
        type: import('vue').PropType<string | number | boolean>;
    };
    solid: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    value: {
        type: import('vue').PropType<string | number | boolean>;
        required: true;
    };
    border: {
        type: import('vue').PropType<boolean>;
    };
}>> & {
    onChange?: ((val: string | number | boolean | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string | number | boolean | undefined) => any) | undefined;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean | undefined) => void;
    change: (val: string | number | boolean | undefined) => void;
}, string, {
    disabled: boolean;
    size: "s" | "m" | "l" | "xl";
    type: "button" | "radio";
    solid: boolean;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const YkRadioGroup: import('../../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        type: {
            type: import('vue').PropType<"button" | "radio">;
        };
        modelValue: {
            type: import('vue').PropType<string | number | boolean>;
        };
        solid: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (val: any) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        type: {
            type: import('vue').PropType<"button" | "radio">;
        };
        modelValue: {
            type: import('vue').PropType<string | number | boolean>;
        };
        solid: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    }, {
        disabled: boolean;
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
            default: boolean;
        };
        type: {
            type: import('vue').PropType<"button" | "radio">;
        };
        modelValue: {
            type: import('vue').PropType<string | number | boolean>;
        };
        solid: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    type: {
        type: import('vue').PropType<"button" | "radio">;
    };
    modelValue: {
        type: import('vue').PropType<string | number | boolean>;
    };
    solid: {
        type: import('vue').PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (val: any) => void;
}, string, {
    disabled: boolean;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default YkRadio;
export * from './radio';
