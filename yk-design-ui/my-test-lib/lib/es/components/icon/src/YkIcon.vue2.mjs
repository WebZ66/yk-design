import { defineComponent as o, openBlock as t, createElementBlock as c, createElementVNode as l } from "vue";
const a = {
  class: "icon",
  "aria-hidden": "true"
}, r = ["xlink:href", "fill"], m = /* @__PURE__ */ o({
  name: "YkIcon",
  __name: "YkIcon",
  props: {
    name: { default: "biyan" },
    color: { default: "black" }
  },
  setup(n) {
    const e = n;
    return (s, i) => (t(), c("svg", a, [
      l("use", {
        "xlink:href": `#icon-${e.name}`,
        fill: e.color
      }, null, 8, r)
    ]));
  }
});
export {
  m as default
};
