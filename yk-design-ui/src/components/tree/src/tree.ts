export interface ITreeProps {
  data: Array<{ [key: string]: any }>
  labelField?: string
  keyField?: string
  childrenField?: string
}

export interface TreeNode {
  label?: string
  key?: string
}
