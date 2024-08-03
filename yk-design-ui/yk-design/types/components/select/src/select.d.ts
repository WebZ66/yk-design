import { VNode } from 'vue';

export type RenderLabelFunc = (option: SelectOption) => VNode;
export type CustomFilterFunc = (value: string) => SelectOption[];
export type CustomFilterRemoteFunc = (value: string) => Promise<SelectOption[]>;
export interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}
export interface SelectsProps {
    modelValue: string;
    options?: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    renderLabel?: RenderLabelFunc;
    filterable?: boolean;
    filterMethod?: CustomFilterFunc;
    remote?: boolean;
    remoteMethod?: CustomFilterRemoteFunc;
}
export interface SelectEmits {
    (e: 'change', value: string): void;
    (e: 'update:modelValue', value: string | number): void;
    (e: 'visible-change', value: boolean): void;
    (e: 'clear'): void;
}
