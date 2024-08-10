import { Options, Placement } from '@popperjs/core';

export interface TooltipProps {
    placement?: Placement;
    content?: string;
    trigger?: 'hover' | 'click' | 'contextmenu';
    manual?: boolean;
    disabled?: boolean;
    popperOptions?: Partial<Options>;
    transition?: string;
    showTimeout?: number;
    hideTimeout?: number;
    type?: 'dark' | 'light';
}
export interface TooltipEmits {
    (e: 'visible-change', value: boolean): void;
    (e: 'click-outside'): void;
}
export interface TooltipInstance {
    show(): void;
    hide(): void;
}
export interface EventListener {
    (evt: Event): void;
}
