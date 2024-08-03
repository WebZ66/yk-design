export declare const YkSelect: import('../../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        placeholder: {
            type: import('vue').PropType<string>;
        };
        options: {
            type: import('vue').PropType<import('./select').SelectOption[]>;
        };
        renderLabel: {
            type: import('vue').PropType<import('./select').RenderLabelFunc>;
        };
        filterable: {
            type: import('vue').PropType<boolean>;
        };
        filterMethod: {
            type: import('vue').PropType<import('./select').CustomFilterFunc>;
        };
        remote: {
            type: import('vue').PropType<boolean>;
        };
        remoteMethod: {
            type: import('vue').PropType<import('./select').CustomFilterRemoteFunc>;
        };
    }>> & {
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onVisible-change"?: ((value: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (value: string) => void;
        "update:modelValue": (value: string | number) => void;
        "visible-change": (value: boolean) => void;
        clear: () => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        placeholder: {
            type: import('vue').PropType<string>;
        };
        options: {
            type: import('vue').PropType<import('./select').SelectOption[]>;
        };
        renderLabel: {
            type: import('vue').PropType<import('./select').RenderLabelFunc>;
        };
        filterable: {
            type: import('vue').PropType<boolean>;
        };
        filterMethod: {
            type: import('vue').PropType<import('./select').CustomFilterFunc>;
        };
        remote: {
            type: import('vue').PropType<boolean>;
        };
        remoteMethod: {
            type: import('vue').PropType<import('./select').CustomFilterRemoteFunc>;
        };
    }>> & {
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onVisible-change"?: ((value: boolean) => any) | undefined;
    }, {}, true, {}, {}, {
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
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        placeholder: {
            type: import('vue').PropType<string>;
        };
        options: {
            type: import('vue').PropType<import('./select').SelectOption[]>;
        };
        renderLabel: {
            type: import('vue').PropType<import('./select').RenderLabelFunc>;
        };
        filterable: {
            type: import('vue').PropType<boolean>;
        };
        filterMethod: {
            type: import('vue').PropType<import('./select').CustomFilterFunc>;
        };
        remote: {
            type: import('vue').PropType<boolean>;
        };
        remoteMethod: {
            type: import('vue').PropType<import('./select').CustomFilterRemoteFunc>;
        };
    }>> & {
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onVisible-change"?: ((value: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    modelValue: {
        type: import('vue').PropType<string>;
        required: true;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    options: {
        type: import('vue').PropType<import('./select').SelectOption[]>;
    };
    renderLabel: {
        type: import('vue').PropType<import('./select').RenderLabelFunc>;
    };
    filterable: {
        type: import('vue').PropType<boolean>;
    };
    filterMethod: {
        type: import('vue').PropType<import('./select').CustomFilterFunc>;
    };
    remote: {
        type: import('vue').PropType<boolean>;
    };
    remoteMethod: {
        type: import('vue').PropType<import('./select').CustomFilterRemoteFunc>;
    };
}>> & {
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onVisible-change"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: string) => void;
    "update:modelValue": (value: string | number) => void;
    "visible-change": (value: boolean) => void;
    clear: () => void;
}, string, {}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const YkOption: import('../../../utils').SFCWithInstall<import('vue').DefineComponent<{
    label: {
        type: import('vue').PropType<string>;
        required: true;
    };
    value: {
        type: import('vue').PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: import('vue').PropType<string>;
        required: true;
    };
    value: {
        type: import('vue').PropType<string>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {}, {}>> & Record<string, any>;
