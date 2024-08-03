import { SelectsProps, SelectEmits } from './select';

export declare const useSelect: (props: SelectsProps, $emit: SelectEmits) => {
    show: import('vue').Ref<boolean>;
    changeShow: () => void;
    compValue: import('vue').WritableComputedRef<string>;
};
