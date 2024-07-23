export interface OptionProps {
  label: number | string
  value: number | string
}

export interface OptionEmits {
  (e: 'update:modelValue', value: OptionProps['value']): void
}

export type SelectInject =
  | {
      value: OptionProps['value']
      changeValue: (value: OptionProps['value']) => OptionProps['value']
      changeCompValue: (value: OptionProps['label']) => void
    }
  | undefined
