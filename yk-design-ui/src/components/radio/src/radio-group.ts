export type RadioGroupProps = {
  modelValue?: number | string | boolean
  type?: 'radio' | 'button'
  solid?: boolean
  disabled?: boolean
}

export type RadioGroupInject =
  | {
      props: RadioGroupProps
      changeEvent: (
        val: RadioGroupProps['modelValue']
      ) => RadioGroupProps['modelValue']
    }
  | undefined
