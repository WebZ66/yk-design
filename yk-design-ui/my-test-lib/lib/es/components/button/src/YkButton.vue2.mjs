import { defineComponent as s, computed as d, openBlock as u, createElementBlock as i, normalizeClass as o, createElementVNode as r, renderSlot as a } from "vue";
const p = ["disabled"], f = /* @__PURE__ */ s({
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
  setup(l) {
    const t = l, n = d(() => ({
      "yk-button": !0,
      "yk-button--loading": t.loading,
      "yk-button--long": t.long,
      "yk-button--disabled": t.disabled || t.loading,
      [`yk-button--${t.status}`]: t.status,
      [`yk-button--${t.type}`]: t.type,
      [`yk-button--${t.size}`]: t.size,
      [`yk-button--${t.shape}`]: t.shape
    }));
    return (e, y) => (u(), i("button", {
      class: o(n.value),
      disabled: t.loading || t.disabled
    }, [
      r("div", {
        class: o({ circle: t.loading })
      }, null, 2),
      a(e.$slots, "icon", {}, void 0, !0),
      a(e.$slots, "default", {}, void 0, !0)
    ], 10, p));
  }
});
export {
  f as default
};
