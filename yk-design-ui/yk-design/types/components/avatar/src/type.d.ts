import { Size } from '../../../utils/constant';

export interface IAvatarProps {
    size?: Size | number;
    shape?: 'circle' | 'square' | number;
    imgUrl: string;
    text: string;
}
export type AvatarGroupProps = {
    shape?: 'circle' | 'square' | number;
    size?: number | Size;
    max?: number;
};
