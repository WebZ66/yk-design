import { SetupContext } from 'vue';
import { RadioProps, radioEmits } from './radio';

export declare const useRadio: (props: RadioProps, emits: SetupContext<typeof radioEmits>['emit']) => {
    compVModel: import('vue').WritableComputedRef<string | number | boolean | undefined>;
    isChecked: import('vue').ComputedRef<boolean>;
    disabled: import('vue').ComputedRef<boolean | undefined>;
};
