import type { VNode } from 'vue'
// 自定义渲染选项节点
export type RenderLabelFunc = (option: SelectOption) => VNode
// 支持筛选方法
export type CustomFilterFunc = (value: string) => SelectOption[]
// 支持远程搜索方法
export type CustomFilterRemoteFunc = (value: string) => Promise<SelectOption[]>

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface SelectsProps {
  // v-model
  modelValue: string
  // 选项
  options?: SelectOption[]
  //   表单属性
  placeholder?: string
  disabled?: boolean
  // 可清除已选中的选项
  clearable?: boolean
  // 自定义渲染节点
  renderLabel?: RenderLabelFunc
  // 是否开启筛选
  filterable?: boolean
  filterMethod?: CustomFilterFunc

  // 是否开启远程搜索
  remote?: boolean
  remoteMethod?: CustomFilterRemoteFunc
}

export interface SelectEmits {
  // 选项改变时
  (e: 'change', value: string): void
  // 与modelValue结合支持v-model
  (e: 'update:modelValue', value: string | number): void
  // 菜单展示隐藏
  (e: 'visible-change', value: boolean): void
  // 清除选项
  (e: 'clear'): void
}
