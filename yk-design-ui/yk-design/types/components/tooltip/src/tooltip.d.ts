export interface TooltipProps {
    placement: string;
    content?: string;
    trigger?: 'hover' | 'click';
    manual?: boolean;
}
export interface TooltipEmits {
    (e: 'visible-change', value: boolean): void;
    (e: 'click-outside', value: boolean): void;
}
export interface TooltipInstance {
    show: () => void;
    hide: () => void;
}
