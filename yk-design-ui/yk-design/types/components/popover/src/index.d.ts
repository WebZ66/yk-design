export declare const YkPopover: import('../../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        title: {
            type: import('vue').PropType<string>;
        };
        width: {
            type: import('vue').PropType<string | number>;
            default: string;
        };
        content: {
            type: import('vue').PropType<string>;
        };
        placement: {
            type: import('vue').PropType<"right" | "left" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end">;
            default: string;
        };
        trigger: {
            type: import('vue').PropType<"click" | "hover" | "manual">;
            default: string;
        };
        popoverClass: {
            type: import('vue').PropType<string>;
        };
    }>> & {
        onShow?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
    }, {
        show(): void;
        hide(): void;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        show: () => void;
        hide: () => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        title: {
            type: import('vue').PropType<string>;
        };
        width: {
            type: import('vue').PropType<string | number>;
            default: string;
        };
        content: {
            type: import('vue').PropType<string>;
        };
        placement: {
            type: import('vue').PropType<"right" | "left" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end">;
            default: string;
        };
        trigger: {
            type: import('vue').PropType<"click" | "hover" | "manual">;
            default: string;
        };
        popoverClass: {
            type: import('vue').PropType<string>;
        };
    }>> & {
        onShow?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
    }, {
        width: string | number;
        placement: "right" | "left" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
        trigger: "click" | "hover" | "manual";
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        title: {
            type: import('vue').PropType<string>;
        };
        width: {
            type: import('vue').PropType<string | number>;
            default: string;
        };
        content: {
            type: import('vue').PropType<string>;
        };
        placement: {
            type: import('vue').PropType<"right" | "left" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end">;
            default: string;
        };
        trigger: {
            type: import('vue').PropType<"click" | "hover" | "manual">;
            default: string;
        };
        popoverClass: {
            type: import('vue').PropType<string>;
        };
    }>> & {
        onShow?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
    }, {
        show(): void;
        hide(): void;
    }, {}, {}, {}, {
        width: string | number;
        placement: "right" | "left" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
        trigger: "click" | "hover" | "manual";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: import('vue').PropType<string>;
    };
    width: {
        type: import('vue').PropType<string | number>;
        default: string;
    };
    content: {
        type: import('vue').PropType<string>;
    };
    placement: {
        type: import('vue').PropType<"right" | "left" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end">;
        default: string;
    };
    trigger: {
        type: import('vue').PropType<"click" | "hover" | "manual">;
        default: string;
    };
    popoverClass: {
        type: import('vue').PropType<string>;
    };
}>> & {
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}, {
    show(): void;
    hide(): void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    show: () => void;
    hide: () => void;
}, string, {
    width: string | number;
    placement: "right" | "left" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
    trigger: "click" | "hover" | "manual";
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        reference?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default YkPopover;
