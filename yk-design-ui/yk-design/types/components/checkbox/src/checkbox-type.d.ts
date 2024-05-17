export type CheckboxProps = {
    modelValue?: number | string | boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    value?: string | number;
};
export declare const CheckboxEmits: {
    'update:modelValue': (val: CheckboxProps['modelValue']) => string | number | boolean | undefined;
};
