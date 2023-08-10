import TestVue from '@/components/test/src/TestVue.vue'
import { withInstall } from '@/utils'

export const YkTest = withInstall<typeof TestVue>(TestVue)

export default YkTest
