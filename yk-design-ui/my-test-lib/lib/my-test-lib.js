import {
  defineComponent as d,
  openBlock as c,
  createElementBlock as u,
  createElementVNode as r,
  computed as p,
  normalizeClass as a,
  renderSlot as l,
} from 'vue'
const f = {
    class: 'icon',
    'aria-hidden': 'true',
  },
  k = ['xlink:href', 'fill'],
  y = /* @__PURE__ */ d({
    name: 'YkIcon',
    __name: 'YkIcon',
    props: {
      name: { default: 'biyan' },
      color: { default: 'black' },
    },
    setup(e) {
      const t = e
      return (o, n) => (
        c(),
        u('svg', f, [
          r(
            'use',
            {
              'xlink:href': `#icon-${t.name}`,
              fill: t.color,
            },
            null,
            8,
            k
          ),
        ])
      )
    },
  })
const _ = (e, t) => {
    const o = e.__vccOpts || e
    for (const [n, s] of t) o[n] = s
    return o
  },
  b = /* @__PURE__ */ _(y, [['__scopeId', 'data-v-8a7fdf3d']]),
  i = (e) => (
    (e.install = (t) => {
      t.component(e.name, e)
    }),
    e
  ),
  B = i(b),
  m = ['disabled'],
  g = /* @__PURE__ */ d({
    name: 'YkButton',
    __name: 'YkButton',
    props: {
      type: { default: 'primary' },
      status: { default: 'primary' },
      size: { default: 's' },
      shape: { default: 'default' },
      long: { type: Boolean, default: !1 },
      loading: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = e,
        o = p(() => ({
          'yk-button': !0,
          'yk-button--loading': t.loading,
          'yk-button--long': t.long,
          'yk-button--disabled': t.disabled || t.loading,
          [`yk-button--${t.status}`]: t.status,
          [`yk-button--${t.type}`]: t.type,
          [`yk-button--${t.size}`]: t.size,
          [`yk-button--${t.shape}`]: t.shape,
        }))
      return (n, s) => (
        c(),
        u(
          'button',
          {
            class: a(o.value),
            disabled: t.loading || t.disabled,
          },
          [
            r(
              'div',
              {
                class: a({ circle: t.loading }),
              },
              null,
              2
            ),
            l(n.$slots, 'icon', {}, void 0, !0),
            l(n.$slots, 'default', {}, void 0, !0),
          ],
          10,
          m
        )
      )
    },
  })
const v = /* @__PURE__ */ _(g, [['__scopeId', 'data-v-602d08f0']]),
  $ = i(v)
export { $ as YkButton, B as YkIcon }
