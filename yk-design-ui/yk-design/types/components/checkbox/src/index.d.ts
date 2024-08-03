export declare const YkCheckbox: import('../../../utils').SFCWithInstall<import('vue').DefineComponent<{
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    modelValue: {
        type: import('vue').PropType<string | number | boolean>;
        default: boolean;
    };
    value: {
        type: import('vue').PropType<string | number>;
    };
    indeterminate: {
        type: import('vue').PropType<boolean>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean | undefined) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    modelValue: {
        type: import('vue').PropType<string | number | boolean>;
        default: boolean;
    };
    value: {
        type: import('vue').PropType<string | number>;
    };
    indeterminate: {
        type: import('vue').PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: string | number | boolean | undefined) => any) | undefined;
}, {
    modelValue: string | number | boolean;
}, {}>> & Record<string, any>;
export declare const YkCheckboxGroup: import('../../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        type: {
            type: import('vue').PropType<"button" | "checkbox">;
        };
        modelValue: {
            type: import('vue').PropType<(string | number | boolean | undefined)[]>;
        };
        solid: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        type: {
            type: import('vue').PropType<"button" | "checkbox">;
        };
        modelValue: {
            type: import('vue').PropType<(string | number | boolean | undefined)[]>;
        };
        solid: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
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
            type: import('vue').PropType<"button" | "checkbox">;
        };
        modelValue: {
            type: import('vue').PropType<(string | number | boolean | undefined)[]>;
        };
        solid: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
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
        type: import('vue').PropType<"button" | "checkbox">;
    };
    modelValue: {
        type: import('vue').PropType<(string | number | boolean | undefined)[]>;
    };
    solid: {
        type: import('vue').PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {
    disabled: boolean;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
