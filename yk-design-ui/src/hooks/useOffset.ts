/**
 * @description:计算偏移量
 * @param {}
 * @return {*}
 */
import type { MessageProps } from '@/components/message/src/message'
import { computed, type Ref } from 'vue'
interface UseOffsetOptions {
  offset: MessageProps['offset']
  boxHeight: Ref<number>
  getLastBottomOffset(): number
}

interface UseOffsetResult {
  topOffset: Ref<number>
  bottomOffset: Ref<number>
}

export const useOffset = (opts: UseOffsetOptions): UseOffsetResult => {
  const lastBottomOffset = computed(() => opts.getLastBottomOffset())
  const topOffset = computed(() => (opts.offset || 0) + lastBottomOffset.value)
  const bottomOffset = computed(() => topOffset.value + opts.boxHeight.value)
  return {
    topOffset,
    bottomOffset,
  }
}

export default useOffset
