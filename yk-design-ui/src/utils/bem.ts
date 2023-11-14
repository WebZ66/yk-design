const isString = (val: unknown): val is string => {
  return typeof val === 'string'
}
const isObject = (val: unknown): val is object => {
  return val !== null && typeof val === 'object'
}

export const isArray = (val: unknown): val is string[] => {
  return val instanceof Array
}

type BEMElement = string
type BEMModifier =
  | (string | undefined | number)[]
  | Record<string, boolean | undefined | number | string>

/**
 * @description:
 * @param prefixClass:接收的类名前缀
 * @param modifierObject:状态对象 (可以是数组也可以是对象)
 * @return {*}
 */
const createModifier = (prefixClass: string, modifierObject: object) => {
  let modifiers: string[] = []
  if (isArray(modifierObject)) {
    modifiers = modifierObject
      .map((modifier) => {
        if (!modifier) return ''
        return `${prefixClass}--${modifier}`
      })
      .filter(Boolean)
  } else if (isObject(modifierObject)) {
    /*
     * bem([type, status, shape, size], {loading: loading,long: long,disabled: disabled}),
     * 解构对象 过滤出值为true的键值对
     */
    modifiers = Object.entries(modifierObject)
      .map(([modifier, value]) => {
        if (!value) return ''
        return `${prefixClass}--${modifier}`
      })
      .filter(Boolean)
  }
  return modifiers
}

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

export const createCssScope = (prefix: string, identity = 'yk') => {
  //定义组件前缀
  const prefixClass = `${identity}-${prefix.replace(identity, '')}`
  return (
    elementOrModifier?: BEMElement | BEMModifier,
    modifier?: BEMModifier,
    modifierLater?: BEMModifier
  ) => {
    //bem() 如果不传入元素或者状态，直接返回块名
    if (!elementOrModifier) return prefixClass
    //如果首个元素是字符，那么确定传入的是元素，需要配合__拼接
    if (isString(elementOrModifier)) {
      const element = `${prefixClass}__${elementOrModifier}`
      //如果没有状态 直接返回
      if (!modifier) {
        return element
      }
      /*
       * bem('label', { disabled }) // button__label button__label--disabled
       */
      return [
        element,
        ...createModifier(element, modifier),
        ...createModifier(element, modifierLater!),
      ]
    }
    /*
     * bem({ disabled }) // button button--disabled
     */
    //如果首个元素不是字符，确定传入的是状态，需要返回块名 + 块名--状态名
    else {
      return [
        prefixClass,
        ...createModifier(prefixClass, elementOrModifier),
        ...createModifier(prefixClass, modifier!),
      ]
    }
  }
}
