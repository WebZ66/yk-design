export type CheckboxGroupProps = {
  modelValue?: (number | string | boolean | undefined)[]
  type?: 'checkbox' | 'button'
  solid?: boolean
  disabled?: boolean
}

export type CheckboxGroupInject = {
  props: CheckboxGroupProps
  changeEvent: (
    val: CheckboxGroupProps['modelValue']
  ) => CheckboxGroupProps['modelValue']
}
