import { default as Button } from './YkButton.vue';

export declare const YkButton: import('../../../utils').SFCWithInstall<{
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            loading?: boolean | undefined;
            disabled?: boolean | undefined;
            shape?: "default" | "round" | "circle" | "square" | undefined;
            size?: "s" | "m" | "l" | "xl" | undefined;
            type?: "primary" | "secondary" | "outline" | undefined;
            status?: "primary" | "success" | "warning" | "danger" | undefined;
            long?: boolean | undefined;
            style?: unknown;
            ref?: import('vue').VNodeRef | undefined;
            class?: unknown;
            key?: string | number | symbol | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>, oldVNode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>, oldVNode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>, oldVNode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>, oldVNode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            loading: {
                type: import('vue').PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: import('vue').PropType<boolean>;
                default: boolean;
            };
            shape: {
                type: import('vue').PropType<"default" | "round" | "circle" | "square">;
                default: string;
            };
            size: {
                type: import('vue').PropType<"s" | "m" | "l" | "xl">;
                default: string;
            };
            type: {
                type: import('vue').PropType<"primary" | "secondary" | "outline">;
                default: string;
            };
            status: {
                type: import('vue').PropType<"primary" | "success" | "warning" | "danger">;
                default: string;
            };
            long: {
                type: import('vue').PropType<boolean>;
                default: boolean;
            };
        }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            loading: boolean;
            disabled: boolean;
            shape: "default" | "round" | "circle" | "square";
            size: "s" | "m" | "l" | "xl";
            type: "primary" | "secondary" | "outline";
            status: "primary" | "success" | "warning" | "danger";
            long: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import('vue').WatchOptions<boolean> | undefined): import('vue').WatchStopHandle;
    } & Readonly<import('vue').ExtractPropTypes<{
        loading: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        shape: {
            type: import('vue').PropType<"default" | "round" | "circle" | "square">;
            default: string;
        };
        size: {
            type: import('vue').PropType<"s" | "m" | "l" | "xl">;
            default: string;
        };
        type: {
            type: import('vue').PropType<"primary" | "secondary" | "outline">;
            default: string;
        };
        status: {
            type: import('vue').PropType<"primary" | "success" | "warning" | "danger">;
            default: string;
        };
        long: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    loading: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    shape: {
        type: import('vue').PropType<"default" | "round" | "circle" | "square">;
        default: string;
    };
    size: {
        type: import('vue').PropType<"s" | "m" | "l" | "xl">;
        default: string;
    };
    type: {
        type: import('vue').PropType<"primary" | "secondary" | "outline">;
        default: string;
    };
    status: {
        type: import('vue').PropType<"primary" | "success" | "warning" | "danger">;
        default: string;
    };
    long: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    loading: boolean;
    disabled: boolean;
    shape: "default" | "round" | "circle" | "square";
    size: "s" | "m" | "l" | "xl";
    type: "primary" | "secondary" | "outline";
    status: "primary" | "success" | "warning" | "danger";
    long: boolean;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default Button;
