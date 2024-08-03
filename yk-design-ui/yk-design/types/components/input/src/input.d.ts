import { Ref } from 'vue';

export interface InputProps {
    id?: string;
    type?: string;
    modelValue: string;
    size?: 'large' | 'small';
    disabled?: boolean;
    clearable?: boolean;
    showPassword?: boolean;
    placeholder?: string;
    readonly?: boolean;
    autocomplete?: string;
    autofocus?: boolean;
    form?: string;
}
export interface InputEmits {
    (e: 'update:modelValue', value: InputProps['modelValue']): void;
    (e: 'clear'): void;
    (e: 'change', value: InputProps['modelValue']): void;
    (e: 'input', value: InputProps['modelValue']): void;
    (e: 'focus', event: FocusEvent): void;
    (e: 'blur', event: FocusEvent): void;
}
export interface InputInstance {
    ref: Ref<HTMLInputElement | HTMLTextAreaElement | void>;
    focus(): Promise<void>;
    blur(): void;
    clear(): void;
}
