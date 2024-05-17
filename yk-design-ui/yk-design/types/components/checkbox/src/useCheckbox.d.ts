import { SetupContext } from 'vue';
import { CheckboxProps, CheckboxEmits } from './checkbox-type';

export declare const useCheckbox: (props: CheckboxProps, emits: SetupContext<typeof CheckboxEmits>['emit']) => {
    compValue: import('vue').WritableComputedRef<string | number | boolean | undefined>;
    isChecked: import('vue').ComputedRef<boolean | undefined>;
    disabled: import('vue').ComputedRef<boolean | undefined>;
};
