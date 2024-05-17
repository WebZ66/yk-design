import { defineComponent as a, computed as u, openBlock as d, createElementBlock as i, normalizeClass as s, createElementVNode as c, renderSlot as l } from "vue";
const r = ["disabled"], p = /* @__PURE__ */ a({
  name: "YkButton",
  __name: "YkButton",
  props: {
    type: { default: "primary" },
    status: { default: "primary" },
    size: { default: "s" },
    shape: { default: "default" },
    long: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(o) {
    const t = o, n = u(() => ({
      "yk-button": !0,
      "yk-button--loading": t.loading,
      "yk-button--long": t.long,
      "yk-button--disabled": t.disabled || t.loading,
      [`yk-button--${t.status}`]: t.status,
      [`yk-button--${t.type}`]: t.type,
      [`yk-button--${t.size}`]: t.size,
      [`yk-button--${t.shape}`]: t.shape
    }));
    return (e, y) => (d(), i("button", {
      class: s(n.value),
      disabled: t.loading || t.disabled
    }, [
      c("div", {
        class: s({ circle: t.loading })
      }, null, 2),
      l(e.$slots, "icon"),
      l(e.$slots, "default")
    ], 10, r));
  }
}), f = (o, t) => {
  if (o.install = (n) => {
    for (const e of [o, ...Object.values(t ?? {})])
      n.component(e.name, e);
  }, t)
    for (const [n, e] of Object.entries(t))
      o[n] = e;
  return o;
}, k = f(p);
export {
  k as YkButton
};
