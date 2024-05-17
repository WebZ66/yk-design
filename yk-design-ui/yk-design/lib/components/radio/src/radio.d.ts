import { Size } from '../../../utils/constant';

export type RadioBaseProps = {
    size?: Size;
    value: number | string | boolean;
    disabled?: boolean;
};
export type RadioProps = RadioBaseProps & {
    modelValue?: number | string | boolean;
    name?: string;
    border?: boolean;
    type?: 'radio' | 'button';
    solid?: boolean;
};
export declare const radioEmits: {
    "update:modelValue": (val: RadioProps['modelValue']) => string | number | boolean | undefined;
    change: (val: RadioProps['modelValue']) => string | number | boolean | undefined;
};
