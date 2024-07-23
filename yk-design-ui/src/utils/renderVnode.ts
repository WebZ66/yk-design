import { defineComponent } from 'vue'
/* defineComponent的方式定义一个组件 */
export const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object, Function],
      require: true,
    },
  },
  setup(props) {
    return () => {
      return props.vNode instanceof Function ? props.vNode() : props.vNode
    }
  },
})
