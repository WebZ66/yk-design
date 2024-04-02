import radio from './radio.vue'
import radioGroup from './radio-group.vue'
import { withInstall } from '@/utils'

export const YkRadio = withInstall(radio)
export const YkRadioGroup = withInstall(radioGroup)

export default YkRadio
export * from './radio'
