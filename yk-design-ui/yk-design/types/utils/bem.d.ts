export declare const isString: (val: unknown) => boolean;
export declare const isObject: (val: unknown) => val is object;
export declare const isArray: (val: unknown) => val is string[];
type BEMElement = string;
type BEMModifier = (string | undefined | number)[] | Record<string, boolean | undefined | number | string>;
type ExtraStatus = Record<string, boolean | undefined | string>;
/**
 * CSS BEM
 * @example
 * const bem = createCssScope('button')
 * bem() // button
 * bem('label') // button__label
 * bem({ disabled }) // button button--disabled
 * bem('label', { disabled }) // button__label button__label--disabled
 * bem(['disabled', 'primary']) // button button--disabled button--primary
 * bem(['disabled', 'primary']) // button button--disabled button--primary
 * bem([type, status, shape, size], {loading: loading,long: long,disabled: disabled}),
 * bem('main',[type, status, shape, size], {loading: loading,long: long,disabled: disabled}),
 */
export declare const createCssScope: (prefix: string, identity?: string) => (elementOrModifier?: BEMElement | BEMModifier, modifier?: BEMModifier, modifierLater?: BEMModifier, extraStatus?: ExtraStatus) => string | string[];
export {};
