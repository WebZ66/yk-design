export declare const YkTooltip: import('../../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        content: {
            type: import('vue').PropType<string>;
            default: string;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        placement: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
        trigger: {
            type: import('vue').PropType<"click" | "hover">;
            default: string;
        };
    }>> & {
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        "onClick-outside"?: ((value: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "visible-change": (value: boolean) => void;
        "click-outside": (value: boolean) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        content: {
            type: import('vue').PropType<string>;
            default: string;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        placement: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
        trigger: {
            type: import('vue').PropType<"click" | "hover">;
            default: string;
        };
    }>> & {
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        "onClick-outside"?: ((value: boolean) => any) | undefined;
    }, {
        content: string;
        placement: string;
        trigger: "click" | "hover";
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        content: {
            type: import('vue').PropType<string>;
            default: string;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        placement: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
        trigger: {
            type: import('vue').PropType<"click" | "hover">;
            default: string;
        };
    }>> & {
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        "onClick-outside"?: ((value: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        content: string;
        placement: string;
        trigger: "click" | "hover";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    content: {
        type: import('vue').PropType<string>;
        default: string;
    };
    manual: {
        type: import('vue').PropType<boolean>;
    };
    placement: {
        type: import('vue').PropType<string>;
        required: true;
        default: string;
    };
    trigger: {
        type: import('vue').PropType<"click" | "hover">;
        default: string;
    };
}>> & {
    "onVisible-change"?: ((value: boolean) => any) | undefined;
    "onClick-outside"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "visible-change": (value: boolean) => void;
    "click-outside": (value: boolean) => void;
}, string, {
    content: string;
    placement: string;
    trigger: "click" | "hover";
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default YkTooltip;
