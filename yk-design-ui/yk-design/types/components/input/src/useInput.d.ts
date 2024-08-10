import { InputProps, InputEmits } from './input';

export declare const useInput: (props: InputProps, $emits: InputEmits) => {
    isDisabled: import('vue').ComputedRef<boolean | undefined>;
    compValue: import('vue').WritableComputedRef<string>;
    clearValue: () => void;
    passwordVisible: import('vue').Ref<boolean>;
    isPassword: import('vue').ComputedRef<"text" | "password">;
    togglePasswordVisible: () => void;
    handleFocus: (e: FocusEvent) => void;
    handleBlur: (e: FocusEvent) => void;
    handleChange: () => void;
};
