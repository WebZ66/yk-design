export declare const YkTooltip: import('../../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        type: {
            type: import('vue').PropType<"light" | "dark">;
            default: string;
        };
        transition: {
            type: import('vue').PropType<string>;
            default: string;
        };
        content: {
            type: import('vue').PropType<string>;
            default: string;
        };
        placement: {
            type: import('vue').PropType<import('@popperjs/core').Placement>;
            default: string;
        };
        trigger: {
            type: import('vue').PropType<"click" | "contextmenu" | "hover">;
            default: string;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        popperOptions: {
            type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
        };
        showTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
        hideTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & {
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        "onClick-outside"?: (() => any) | undefined;
    }, {
        show(): void;
        hide(): void;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "visible-change": (value: boolean) => void;
        "click-outside": () => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        type: {
            type: import('vue').PropType<"light" | "dark">;
            default: string;
        };
        transition: {
            type: import('vue').PropType<string>;
            default: string;
        };
        content: {
            type: import('vue').PropType<string>;
            default: string;
        };
        placement: {
            type: import('vue').PropType<import('@popperjs/core').Placement>;
            default: string;
        };
        trigger: {
            type: import('vue').PropType<"click" | "contextmenu" | "hover">;
            default: string;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        popperOptions: {
            type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
        };
        showTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
        hideTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & {
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        "onClick-outside"?: (() => any) | undefined;
    }, {
        type: "light" | "dark";
        transition: string;
        content: string;
        placement: import('@popperjs/core').Placement;
        trigger: "click" | "contextmenu" | "hover";
        showTimeout: number;
        hideTimeout: number;
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
        type: {
            type: import('vue').PropType<"light" | "dark">;
            default: string;
        };
        transition: {
            type: import('vue').PropType<string>;
            default: string;
        };
        content: {
            type: import('vue').PropType<string>;
            default: string;
        };
        placement: {
            type: import('vue').PropType<import('@popperjs/core').Placement>;
            default: string;
        };
        trigger: {
            type: import('vue').PropType<"click" | "contextmenu" | "hover">;
            default: string;
        };
        manual: {
            type: import('vue').PropType<boolean>;
        };
        popperOptions: {
            type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
        };
        showTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
        hideTimeout: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & {
        "onVisible-change"?: ((value: boolean) => any) | undefined;
        "onClick-outside"?: (() => any) | undefined;
    }, {
        show(): void;
        hide(): void;
    }, {}, {}, {}, {
        type: "light" | "dark";
        transition: string;
        content: string;
        placement: import('@popperjs/core').Placement;
        trigger: "click" | "contextmenu" | "hover";
        showTimeout: number;
        hideTimeout: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    type: {
        type: import('vue').PropType<"light" | "dark">;
        default: string;
    };
    transition: {
        type: import('vue').PropType<string>;
        default: string;
    };
    content: {
        type: import('vue').PropType<string>;
        default: string;
    };
    placement: {
        type: import('vue').PropType<import('@popperjs/core').Placement>;
        default: string;
    };
    trigger: {
        type: import('vue').PropType<"click" | "contextmenu" | "hover">;
        default: string;
    };
    manual: {
        type: import('vue').PropType<boolean>;
    };
    popperOptions: {
        type: import('vue').PropType<Partial<import('@popperjs/core').Options>>;
    };
    showTimeout: {
        type: import('vue').PropType<number>;
        default: number;
    };
    hideTimeout: {
        type: import('vue').PropType<number>;
        default: number;
    };
}>> & {
    "onVisible-change"?: ((value: boolean) => any) | undefined;
    "onClick-outside"?: (() => any) | undefined;
}, {
    show(): void;
    hide(): void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "visible-change": (value: boolean) => void;
    "click-outside": () => void;
}, string, {
    type: "light" | "dark";
    transition: string;
    content: string;
    placement: import('@popperjs/core').Placement;
    trigger: "click" | "contextmenu" | "hover";
    showTimeout: number;
    hideTimeout: number;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
})> & Record<string, any>;
export default YkTooltip;
export * from './tooltip';
