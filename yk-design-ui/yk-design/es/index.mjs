import { defineComponent as N, computed as h, openBlock as p, createElementBlock as w, normalizeClass as m, createElementVNode as v, renderSlot as C, ref as k, createVNode as I, unref as s, normalizeProps as ye, guardReactiveProps as ke, watch as O, normalizeStyle as M, inject as G, withDirectives as F, isRef as J, vModelRadio as ge, provide as j, vModelCheckbox as _e, getCurrentInstance as be, onMounted as ee, shallowRef as se, resolveComponent as H, Fragment as le, createCommentVNode as B, vModelDynamic as we, createBlock as E, reactive as U, toRef as $e, withCtx as z, toDisplayString as te, mergeProps as A, toHandlers as W, useSlots as Ve, Teleport as Ce, Transition as oe, vShow as ie, isVNode as ce, h as re, nextTick as ue, render as q, shallowReactive as Be } from "vue";
import { w as x, c as P, i as de, R as pe } from "./utils-ab66e7c2.js";
import { l as Ne, i as xe, F as Ee, c as Re, u as Se, o as Ye, f as Pe, a as Ie } from "./vendor-272ae1c3.js";
const ze = ["disabled"], De = /* @__PURE__ */ N({
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
  setup(t) {
    const o = t, e = h(() => ({
      "yk-button": !0,
      "yk-button--loading": o.loading,
      "yk-button--long": o.long,
      "yk-button--disabled": o.disabled || o.loading,
      [`yk-button--${o.status}`]: o.status,
      [`yk-button--${o.type}`]: o.type,
      [`yk-button--${o.size}`]: o.size,
      [`yk-button--${o.shape}`]: o.shape
    }));
    return (n, r) => (p(), w("button", {
      class: m(e.value),
      disabled: o.loading || o.disabled
    }, [
      v("div", {
        class: m({ circle: o.loading })
      }, null, 2),
      C(n.$slots, "icon"),
      C(n.$slots, "default")
    ], 10, ze));
  }
}), Te = x(De);
const Me = /* @__PURE__ */ N({
  name: "YkIcon",
  __name: "icon",
  props: {
    type: {},
    color: {},
    icon: {}
  },
  setup(t) {
    Ne.add(xe);
    const o = t, e = k();
    return (n, r) => (p(), w("i", {
      ref_key: "iconRef",
      ref: e,
      class: m(["yk-icon", [o.type ? `yk-icon--${o.type}` : ""]])
    }, [
      I(s(Ee), ye(ke(o)), null, 16)
    ], 2));
  }
}), L = x(Me), Ae = ["disabled"], Le = { class: "yk-switch__dot" }, Oe = /* @__PURE__ */ N({
  name: "YkSwitch",
  __name: "switch",
  props: {
    modelValue: { type: [Boolean, String, Number] },
    size: { default: "s" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    checkedValue: { type: [Boolean, String, Number], default: !0 },
    unCheckedValue: { type: [Boolean, String, Number], default: !1 },
    checkedColor: { default: "#67c23a" },
    uncheckedColor: { default: "#eee" }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: o }) {
    const e = t, n = k(e.modelValue);
    O(
      () => e.modelValue,
      (f) => {
        n.value = f;
      },
      { deep: !0 }
    );
    const r = (f) => {
      i.value || (n.value ? n.value = e.unCheckedValue : n.value = e.checkedValue, d("update:modelValue", n.value, f), d("change", n.value, f));
    }, a = h(() => n.value == e.checkedValue), i = h(() => e.disabled || e.loading), l = h(() => ({
      "yk-switch": !0,
      "yk-switch--isChecked": a.value,
      "yk-switch--loading": e.loading,
      "yk-switch--disabled": e.disabled || e.loading,
      [`yk-switch--${e.size}`]: !0
    })), c = h(() => ({
      backgroundColor: !!n.value == !!e.checkedValue ? e.checkedColor : e.uncheckedColor
    })), d = o;
    return (f, u) => (p(), w("button", {
      class: m(l.value),
      style: M(c.value),
      type: "button",
      role: "switch",
      disabled: i.value,
      onClick: r
    }, [
      v("div", Le, [
        v("div", {
          class: m({ circle: e.loading })
        }, null, 2)
      ])
    ], 14, Ae));
  }
});
const fe = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, r] of o)
    e[n] = r;
  return e;
}, Fe = /* @__PURE__ */ fe(Oe, [["__scopeId", "data-v-2f1f4f57"]]), He = x(Fe), Ue = "update:modelValue", qe = "change", Je = {
  [Ue]: (t) => t,
  [qe]: (t) => t
}, Ke = (t, o) => {
  const e = G("propsByRadioGroup", void 0), n = h(() => !!e), r = h(() => t.value == i.value), a = h(
    () => (e == null ? void 0 : e.props.disabled) || t.disabled
  ), i = h({
    get() {
      return n.value ? e == null ? void 0 : e.props.modelValue : t.modelValue;
    },
    set(l) {
      n.value ? e == null || e.changeEvent(l) : o("update:modelValue", l);
    }
  });
  return { compVModel: i, isChecked: r, disabled: a };
}, Qe = ["value", "disabled"], We = /* @__PURE__ */ N({
  name: "YkRadio",
  __name: "radio",
  props: {
    size: { default: "l" },
    value: { type: [Number, String, Boolean] },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: [Number, String, Boolean] },
    name: {},
    border: { type: Boolean },
    type: { default: "radio" },
    solid: { type: Boolean, default: !1 }
  },
  emits: Je,
  setup(t, { emit: o }) {
    const e = P("radio"), n = o, r = t, { compVModel: a, disabled: i, isChecked: l } = Ke(r, n);
    function c() {
    }
    return (d, f) => (p(), w("label", {
      role: "radio",
      class: m(s(e)([], { disabled: s(i), solid: d.solid }, { isChecked: s(l) }))
    }, [
      v("span", {
        class: m(s(e)("input", [], {}, { isChecked: s(l) }))
      }, [
        v("span", {
          class: m(s(e)("inner"))
        }, null, 2),
        F(v("input", {
          "onUpdate:modelValue": f[0] || (f[0] = (u) => J(a) ? a.value = u : null),
          value: r.value,
          disabled: s(i),
          type: "radio",
          class: m(s(e)("original")),
          onChange: c
        }, null, 42, Qe), [
          [ge, s(a)]
        ])
      ], 2),
      v("span", {
        class: m(s(e)("label"))
      }, [
        C(d.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
});
const Xe = /* @__PURE__ */ fe(We, [["__scopeId", "data-v-124cbae6"]]), Ze = /* @__PURE__ */ N({
  name: "YkRadioGroup",
  __name: "radio-group",
  props: {
    modelValue: { type: [Number, String, Boolean] },
    type: {},
    solid: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: {
    "update:modelValue": (t) => t
  },
  setup(t, { emit: o }) {
    const e = t, n = o;
    return j("propsByRadioGroup", {
      props: e,
      changeEvent: (a) => {
        n("update:modelValue", a);
      }
    }), (a, i) => (p(), w("div", null, [
      C(a.$slots, "default")
    ]));
  }
}), Ge = x(Xe);
x(Ze);
const je = {
  "update:modelValue": (t) => t
}, et = (t, o) => {
  const e = G(
    "propsByCheckboxGroup",
    void 0
  ), n = h(() => !!e), r = h({
    get() {
      var l;
      return n.value ? (l = e == null ? void 0 : e.props.modelValue) == null ? void 0 : l.includes(t.value) : t.modelValue;
    },
    set(l) {
      if (!n.value)
        o("update:modelValue", l);
      else {
        const c = [...e == null ? void 0 : e.props.modelValue];
        if (l)
          c.push(t.value);
        else {
          const f = c.findIndex((u) => u == t.value);
          c.splice(f, 1);
        }
        const d = new Set(c);
        e == null || e.changeEvent([...d]);
      }
    }
  }), a = h(() => {
    var l;
    return n.value ? (l = e == null ? void 0 : e.props.modelValue) == null ? void 0 : l.includes(t.value) : !!t.modelValue;
  }), i = h(() => n != null && n.value ? e == null ? void 0 : e.props.disabled : t.disabled);
  return { compValue: r, isChecked: a, disabled: i };
};
const tt = ["checked"], ot = /* @__PURE__ */ N({
  __name: "checkbox",
  props: {
    modelValue: { type: [Number, String, Boolean], default: !1 },
    disabled: { type: Boolean },
    indeterminate: { type: Boolean },
    value: {}
  },
  emits: je,
  setup(t, { emit: o }) {
    const e = P("checkbox"), n = t, r = o, { compValue: a, isChecked: i, disabled: l } = et(n, r);
    return (c, d) => (p(), w("label", {
      role: "checkbox",
      class: m(s(e)([], {}, { isChecked: s(i), disabled: s(l) }))
    }, [
      v("span", {
        class: m(s(e)("input", [], {}, { isChecked: s(i), disabled: s(l) }))
      }, [
        F(v("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (f) => J(a) ? a.value = f : null),
          type: "checkbox",
          checked: s(i),
          class: m(s(e)("original"))
        }, null, 10, tt), [
          [_e, s(a)]
        ]),
        v("span", {
          class: m(s(e)("inner"))
        }, null, 2)
      ], 2),
      v("span", {
        class: m(s(e)("label"))
      }, "备选项1", 2)
    ], 2));
  }
}), nt = /* @__PURE__ */ N({
  __name: "checkbox-group",
  props: {
    modelValue: {},
    type: {},
    solid: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const e = t, n = o;
    function r(a) {
      n("update:modelValue", a);
    }
    return j("propsByCheckboxGroup", {
      props: e,
      changeEvent: r
    }), (a, i) => (p(), w("div", null, [
      C(a.$slots, "default")
    ]));
  }
}), st = x(ot);
x(nt);
const lt = (t, o) => {
  const e = h(() => t.disabled), n = h({
    get() {
      return t.modelValue;
    },
    set(u) {
      o("input", u), o("update:modelValue", u);
    }
  });
  h(() => t.clearable && !!n.value.length && !e.value);
  function r() {
    o("update:modelValue", ""), o("clear");
  }
  const a = k(!0);
  function i() {
    a.value = !a.value;
  }
  const l = h(() => t.showPassword && a.value ? "password" : "text");
  function c(u) {
    o("focus", u);
  }
  function d(u) {
    o("blur", u);
  }
  function f() {
    o("change", n.value);
  }
  return {
    isDisabled: e,
    compValue: n,
    clearValue: r,
    passwordVisible: a,
    isPassword: l,
    togglePasswordVisible: i,
    handleFocus: c,
    handleBlur: d,
    handleChange: f
  };
}, me = (t) => {
  const o = h(() => t.getLastBottomOffset()), e = h(() => (t.offset || 0) + o.value), n = h(() => e.value + t.boxHeight.value);
  return {
    topOffset: e,
    bottomOffset: n
  };
};
function at(t, { afterFocus: o, beforeBlur: e, afterBlur: n } = {}) {
  const r = be(), { emit: a } = r, i = k(), l = k(!1), c = (u) => {
    l.value || (l.value = !0, a("focus", u), o == null || o());
  }, d = (u) => {
    e instanceof Function && e(u) || (l.value = !1, a("blur", u), n == null || n());
  }, f = () => {
    var u;
    (u = t.value) == null || u.focus();
  };
  return ee(() => {
    var u;
    (u = i.value) == null || u.addEventListener("click", f);
  }), {
    wrapperRef: i,
    isFocus: l,
    handleFocus: c,
    handleBlur: d
  };
}
const it = {
  key: 0,
  class: "yk-input-group__prepend"
}, ct = ["type", "placeholder", "readonly"], rt = { class: "yk-input__suffix-inner" }, ut = {
  key: 3,
  class: "yk-input-group__append"
}, dt = /* @__PURE__ */ N({
  name: "YkInput",
  __name: "input",
  props: {
    id: {},
    type: { default: "text" },
    modelValue: {},
    size: {},
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    showPassword: { type: Boolean },
    placeholder: { default: "请输入内容" },
    readonly: { type: Boolean },
    autocomplete: { default: "off" },
    autofocus: { type: Boolean },
    form: {}
  },
  emits: ["update:modelValue", "clear", "change", "input", "focus", "blur"],
  setup(t, { expose: o, emit: e }) {
    const n = P("input"), r = t, a = e, {
      isDisabled: i,
      compValue: l,
      clearValue: c,
      passwordVisible: d,
      isPassword: f,
      togglePasswordVisible: u,
      // handleFocus,
      // handleBlur,
      handleChange: $
    } = lt(r, a), V = se(), y = se(), b = h(() => V.value || y.value), { wrapperRef: g, isFocus: S, handleFocus: K, handleBlur: ne } = at(b);
    return o({
      ref: V
    }), (_, R) => {
      const Q = H("YkIcon");
      return p(), w("div", {
        class: m([
          s(n)(
            [],
            { prefix: !!_.$slots.prefix, suffix: !!_.$slots.suffix },
            {
              disabled: s(i),
              "yk-input-group": !!_.$slots.prepend || !!_.$slots.append,
              "yk-input-group--prepend": !!_.$slots.prepend,
              "yk-input-group--append": !!_.$slots.append
            }
          )
        ]),
        ref_key: "wrapperRef",
        ref: g
      }, [
        _.type !== "textarea" ? (p(), w(le, { key: 0 }, [
          _.$slots.prepend ? (p(), w("div", it, [
            C(_.$slots, "prepend")
          ])) : B("", !0),
          F(v("input", {
            ref_key: "inputRef",
            ref: V,
            type: s(f),
            "onUpdate:modelValue": R[0] || (R[0] = (Y) => J(l) ? l.value = Y : null),
            class: m([s(n)("inner")]),
            placeholder: r.placeholder,
            onFocus: R[1] || (R[1] = //@ts-ignore
            (...Y) => s(K) && s(K)(...Y)),
            onBlur: R[2] || (R[2] = //@ts-ignore
            (...Y) => s(ne) && s(ne)(...Y)),
            onChange: R[3] || (R[3] = //@ts-ignore
            (...Y) => s($) && s($)(...Y)),
            readonly: r.readonly
          }, null, 42, ct), [
            [we, s(l)]
          ]),
          _.$slots.prefix ? (p(), w("span", {
            key: 1,
            class: m(s(n)("prefix"))
          }, [
            v("span", null, [
              C(_.$slots, "prefix")
            ])
          ], 2)) : B("", !0),
          _.$slots.suffix || _.clearable || _.showPassword ? (p(), w("span", {
            key: 2,
            class: m(s(n)("suffix"))
          }, [
            v("span", rt, [
              C(_.$slots, "suffix"),
              s(l).length && _.clearable && !_.showPassword ? (p(), E(Q, {
                key: 0,
                icon: ["fas", "circle-xmark"],
                onClick: s(c)
              }, null, 8, ["onClick"])) : B("", !0),
              s(d) && _.showPassword ? (p(), E(Q, {
                key: 1,
                icon: ["fas", "eye"],
                onClick: s(u)
              }, null, 8, ["onClick"])) : B("", !0),
              !s(d) && _.showPassword ? (p(), E(Q, {
                key: 2,
                icon: ["fas", "eye-low-vision"],
                onClick: s(u)
              }, null, 8, ["onClick"])) : B("", !0)
            ])
          ], 2)) : B("", !0),
          _.$slots.append ? (p(), w("div", ut, [
            C(_.$slots, "append")
          ])) : B("", !0)
        ], 64)) : (p(), w(le, { key: 1 }, [], 64))
      ], 2);
    };
  }
}), pt = x(dt);
const ft = (t, o) => {
  const e = k(!1), n = k(""), r = h({
    get() {
      return n.value;
    },
    set(i) {
      n.value = i;
    }
  });
  return {
    show: e,
    changeShow: () => {
      e.value = !e.value;
    },
    compValue: r
  };
}, mt = { class: "yk-scrollbar" }, vt = /* @__PURE__ */ N({
  name: "yk-select",
  __name: "select",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    renderLabel: {},
    filterable: { type: Boolean },
    filterMethod: {},
    remote: { type: Boolean },
    remoteMethod: {}
  },
  emits: ["change", "update:modelValue", "visible-change", "clear"],
  setup(t, { emit: o }) {
    const e = P("select");
    k("");
    const n = t, r = o, { show: a, changeShow: i, compValue: l } = ft(), c = k();
    function d() {
    }
    function f($) {
      r("update:modelValue", $);
    }
    function u($) {
      l.value = $;
    }
    return j(
      "selectProvide",
      U({
        value: $e(n, "modelValue"),
        changeValue: f,
        changeCompValue: u
      })
    ), ($, V) => {
      const y = H("YkIcon"), b = H("yk-input"), g = H("YkPopover");
      return p(), w("div", {
        class: m(s(e)({}, [], { "is-expanded": s(a) })),
        onClick: V[1] || (V[1] = //@ts-ignore
        (...S) => s(i) && s(i)(...S))
      }, [
        I(g, {
          popoverClass: "yk-select-popover",
          width: "240px",
          ref_key: "popoverRef",
          ref: c,
          trigger: "click",
          placement: "bottom-end"
        }, {
          reference: z(() => [
            I(b, {
              onBlur: d,
              placeholder: n.placeholder,
              modelValue: s(l),
              "onUpdate:modelValue": V[0] || (V[0] = (S) => J(l) ? l.value = S : null),
              readonly: ""
            }, {
              suffix: z(() => [
                I(y, {
                  class: m({ "is-reverse": s(a), "yk-icon__cart": !0 }),
                  icon: ["fas", "chevron-down"]
                }, null, 8, ["class"])
              ]),
              _: 1
            }, 8, ["placeholder", "modelValue"])
          ]),
          default: z(() => [
            v("div", mt, [
              C($.$slots, "default")
            ])
          ]),
          _: 3
        }, 512)
      ], 2);
    };
  }
}), ht = /* @__PURE__ */ N({
  __name: "option",
  props: {
    label: {},
    value: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const e = t, n = G("selectProvide");
    function r() {
      n == null || n.changeValue(e.value), n == null || n.changeCompValue(e.label);
    }
    return (a, i) => {
      var l;
      return p(), w("div", null, [
        v("li", {
          class: m(["yk-select-dropdown__item", { select: e.value == ((l = s(n)) == null ? void 0 : l.value) }]),
          onClick: r
        }, te(e.label), 3)
      ]);
    };
  }
}), yt = x(vt), kt = x(ht);
const gt = { name: "content" }, _t = /* @__PURE__ */ v("div", {
  id: "arrow",
  "data-popper-arrow": ""
}, null, -1), bt = /* @__PURE__ */ N({
  name: "YkTooltip",
  __name: "tooltip",
  props: {
    placement: { default: "top" },
    content: { default: "触发的一段文字" },
    trigger: { default: "hover" },
    manual: { type: Boolean }
  },
  emits: ["visible-change", "click-outside"],
  setup(t, { emit: o }) {
    const e = P("tooltip"), n = k(), r = k();
    let a = null;
    const i = t, l = o, c = k(!1);
    function d() {
      c.value = !0, l("visible-change", c.value);
    }
    function f() {
      c.value = !1, l("visible-change", c.value), console.log("value", c.value);
    }
    O(
      c,
      (y) => {
        if (y)
          if (r.value && n.value) {
            const b = document.querySelector("#arrow");
            a = Re(r.value, n.value, {
              placement: i.placement,
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 0]
                  }
                },
                {
                  name: "flip",
                  options: { allowedAutoPlacements: ["bottom"] }
                },
                {
                  name: "arrow",
                  options: {
                    element: b
                  }
                }
              ]
            });
          } else
            a == null || a.destroy();
      },
      { flush: "post" }
    );
    const u = U({}), $ = U({}), V = () => {
      i.trigger === "hover" ? (u.mouseenter = d, $.mouseleave = f) : u.click = () => {
      };
    };
    return i.manual || V(), (y, b) => (p(), w("div", A({
      class: s(e)(),
      ref: "popperContainNode"
    }, W($, !0)), [
      v("div", A({
        class: s(e)("trigger"),
        ref_key: "triggerNode",
        ref: r
      }, W(u, !0)), [
        C(y.$slots, "default")
      ], 16),
      c.value ? (p(), w("div", {
        key: 0,
        ref_key: "popperNode",
        ref: n
      }, [
        v("div", {
          class: m(s(e)("popper"))
        }, [
          v("div", gt, te(y.content), 1)
        ], 2),
        _t
      ], 512)) : B("", !0)
    ], 16));
  }
}), wt = x(bt);
const $t = ["x-placement"], Vt = ["x-placement"], Ct = ["x-placement"], Bt = /* @__PURE__ */ N({
  __name: "popover",
  props: {
    title: {},
    content: {},
    width: { default: "150px" },
    placement: { default: "top" },
    trigger: { default: "hover" },
    popoverClass: {}
  },
  emits: ["show", "hide"],
  setup(t, { expose: o, emit: e }) {
    const n = k(), r = k(), a = k(), i = t;
    Ve();
    const l = e, c = k(!1), d = U({});
    function f() {
      i.trigger == "hover" ? (d.mouseover = u, d.mouseleave = $) : i.trigger == "click" ? d.click = () => {
        c.value = !c.value, c.value ? l("show") : l("hide");
      } : d.click = (b) => {
        const g = b.target;
        n.value.contains(g) && (c.value = !c.value), c.value ? l("show") : l("hide");
      };
    }
    f();
    function u() {
      c.value = !0, l("show");
    }
    function $() {
      c.value = !1, l("hide");
    }
    const { floatingStyles: V, middlewareData: y } = Se(n, r, {
      placement: i.placement,
      middleware: [Ye(0), Pe(), Ie({ element: a })]
    });
    return O(
      y,
      (b) => {
        a.value.style.left = b.arrow.x + "px";
      },
      { deep: !0 }
    ), o({
      show() {
        c.value = !0;
      },
      hide() {
        c.value = !1;
      }
    }), (b, g) => (p(), w("div", A({
      class: "main",
      "x-placement": i.placement
    }, W(d, !0)), [
      v("div", {
        "data-reference": "reference",
        ref_key: "reference",
        ref: n
      }, [
        C(b.$slots, "reference")
      ], 512),
      (p(), E(Ce, { to: "body" }, [
        I(oe, { name: "fade" }, {
          default: z(() => [
            c.value ? (p(), w("div", {
              key: 0,
              class: m(["yk-popper", i.popoverClass]),
              ref_key: "floating",
              ref: r,
              style: M(s(V))
            }, [
              v("div", {
                ref_key: "floatingArrow",
                ref: a,
                class: "arrow",
                "x-placement": i.placement,
                style: {
                  position: "absolute"
                }
              }, null, 8, Vt),
              v("div", {
                class: "content",
                "x-placement": i.placement,
                style: M({ width: i.width })
              }, [
                C(b.$slots, "default")
              ], 12, Ct)
            ], 6)) : B("", !0)
          ]),
          _: 3
        })
      ]))
    ], 16, $t));
  }
}), Nt = x(Bt);
const xt = /* @__PURE__ */ N({
  name: "YkMessage",
  __name: "message",
  props: {
    message: {},
    type: { default: "success" },
    icon: {},
    duration: { default: 3e3 },
    showClose: { type: Boolean, default: !1 },
    offset: { default: 10 },
    zIndex: {},
    onDestroy: {},
    id: {},
    transitionName: { default: "fade-up" }
  },
  setup(t, { expose: o }) {
    const e = P("message"), n = t, r = h(() => de[n.type]), a = h(() => ({ top: f.value + "px" })), i = k(!1), l = k(), c = k(0);
    function d() {
      c.value = l.value.getBoundingClientRect().height;
    }
    O(i, (y) => {
      y || (c.value = -n.offset);
    });
    const { topOffset: f, bottomOffset: u } = me({
      offset: n.offset,
      boxHeight: c,
      getLastBottomOffset: It.bind(n)
    });
    function $() {
      n.duration !== 0 && setTimeout(V, n.duration);
    }
    function V() {
      i.value = !1;
    }
    return ee(() => {
      i.value = !0, $();
    }), o({
      close: V,
      bottomOffset: u
    }), (y, b) => (p(), E(oe, {
      name: y.transitionName,
      onEnter: d,
      onAfterLeave: b[0] || (b[0] = (g) => !i.value && y.onDestroy())
    }, {
      default: z(() => [
        F(v("div", {
          ref_key: "messageRef",
          ref: l,
          class: m({
            "yk-message": !0,
            [`yk-message--${y.type}`]: y.type,
            "is-close": y.showClose
          }),
          role: "alert",
          style: M(a.value)
        }, [
          I(s(L), A({
            class: s(e)("icon")
          }, r.value), null, 16, ["class"]),
          v("div", {
            class: m(s(e)("content"))
          }, [
            C(y.$slots, "default", {}, () => [
              y.message ? (p(), E(s(pe), {
                key: 0,
                vNode: y.message
              }, null, 8, ["vNode"])) : B("", !0)
            ])
          ], 2),
          y.showClose ? (p(), E(s(L), {
            key: 0,
            class: "yk-icon__close",
            icon: ["fas", "xmark"],
            onClick: V
          })) : B("", !0)
        ], 6), [
          [ie, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), Et = [
  "info",
  "success",
  "warning",
  "danger",
  "error"
];
let Rt = 0;
const D = [], St = {
  type: "success",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, ve = (t) => {
  const o = !t || ce(t) || typeof t == "string" ? { message: t } : t;
  return { ...St, ...o };
}, Yt = (t) => {
  const o = `message_${Rt++}`, e = document.createElement("div"), r = {
    ...t,
    id: o,
    onDestroy: () => {
      const c = D.findIndex((d) => d.id === o);
      c != -1 && (D.splice(c, 1), q(null, e));
    },
    zIndex: 200
  }, a = re(xt, r);
  ue(() => {
    q(a, e), document.body.appendChild(e.firstElementChild);
  });
  const i = {
    close: () => a.component.exposed.close()
  }, l = {
    props: r,
    id: o,
    vm: a.component,
    vnode: a,
    handler: i
  };
  return D.push(l), l;
}, X = (t = "") => {
  const o = ve(t);
  return Yt(o).handler;
};
Et.forEach((t) => {
  X[t] = (o) => {
    const e = ve(o);
    return X({ ...e, type: t });
  };
});
function Pt(t) {
  D.forEach((o) => {
    t ? o.props.type === t && o.handler.close() : o.handler.close();
  });
}
X.closeAll = Pt;
function It() {
  var o;
  const t = D.findIndex((e) => e.id == this.id);
  return t <= 0 ? 0 : (o = D[t - 1].vnode.component) == null ? void 0 : o.exposed.bottomOffset.value;
}
const zt = [
  "info",
  "success",
  "warning",
  "danger"
];
const Dt = /* @__PURE__ */ N({
  name: "YkNotification",
  __name: "notification",
  props: {
    title: {},
    id: {},
    zIndex: {},
    position: {},
    type: {},
    message: { default: "123" },
    duration: { default: 0 },
    showClose: { type: Boolean, default: !0 },
    offset: { default: 20 },
    transitionName: { default: "fade-up" },
    icon: {},
    onClick: {},
    onClose: {},
    onDestroy: {}
  },
  setup(t, { expose: o }) {
    const e = P("notification"), n = t, r = h(() => n.type && de[n.type]), a = h(() => ({ top: f.value + "px" })), i = k(!1), l = k(), c = k(0);
    function d() {
      c.value = l.value.getBoundingClientRect().height;
    }
    O(i, (g) => {
      g || (c.value = -n.offset);
    });
    const { topOffset: f, bottomOffset: u } = me({
      offset: n.offset,
      boxHeight: c,
      getLastBottomOffset: Ot.bind(n)
    });
    let $;
    function V() {
      n.duration !== 0 && ($ = setTimeout(b, n.duration));
    }
    function y() {
      clearTimeout($);
    }
    function b() {
      i.value = !1, y();
    }
    return ee(() => {
      i.value = !0, V();
    }), o({
      close: b,
      bottomOffset: u
    }), (g, S) => (p(), E(oe, {
      name: g.transitionName,
      onEnter: d,
      onAfterLeave: S[0] || (S[0] = (K) => !i.value && g.onDestroy())
    }, {
      default: z(() => [
        F(v("div", {
          ref_key: "notifyRef",
          ref: l,
          class: m({
            "yk-notification": !0,
            [`yk-notification--${g.type}`]: g.type,
            "is-close": g.showClose
          }),
          role: "alert",
          style: M(a.value)
        }, [
          g.type ? (p(), E(s(L), A({
            key: 0,
            class: s(e)("icon")
          }, r.value), null, 16, ["class"])) : B("", !0),
          v("div", {
            class: m(s(e)("text"))
          }, [
            v("div", {
              class: m(s(e)("title"))
            }, te(g.title), 3),
            v("div", {
              class: m(s(e)("content"))
            }, [
              C(g.$slots, "default", {}, () => [
                g.message ? (p(), E(s(pe), {
                  key: 0,
                  vNode: g.message
                }, null, 8, ["vNode"])) : B("", !0)
              ])
            ], 2)
          ], 2),
          g.showClose ? (p(), E(s(L), {
            key: 1,
            class: "yk-notification__icon--close",
            icon: ["fas", "xmark"],
            onClick: b
          })) : B("", !0)
        ], 6), [
          [ie, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), T = Be([]);
let Tt = 0;
const Mt = {
  type: "info",
  duration: 3e3,
  message: "123",
  offset: 20,
  transitionName: "fade-up",
  showClose: !0
}, he = (t) => {
  const o = !t || ce(t) || typeof t == "string" ? { message: t } : t;
  return { ...Mt, ...o };
}, At = (t) => {
  var c;
  const o = `notification_${Tt++}`, e = document.createElement("div"), r = {
    ...t,
    id: o,
    onDestroy: () => {
      const d = T.findIndex((f) => f.id === o);
      d !== -1 && (T.splice(d, 1), q(null, e));
    },
    zIndex: 200
  }, a = re(Dt, r);
  ue(() => {
    q(a, e), document.body.appendChild(e.firstElementChild);
  });
  const i = {
    close: (c = a.component) == null ? void 0 : c.exposed.close()
  }, l = {
    id: o,
    props: r,
    vnode: a,
    vm: a.component,
    handler: i
  };
  return T.push(l), l;
}, Z = (t) => {
  const o = he(t);
  return At(o).handler;
};
zt.forEach((t) => {
  Z[t] = (o) => {
    const e = he(o);
    return Z({ ...e, type: t });
  };
});
function Lt() {
}
Z.closeAll = Lt;
function Ot() {
  var o;
  const t = T.findIndex((e) => e.id == this.id);
  return t <= 0 ? 0 : (o = T[t - 1].vnode.component) == null ? void 0 : o.exposed.bottomOffset.value;
}
const ae = {
  YkButton: Te,
  YkIcon: L,
  YkSelect: yt,
  YkSwitch: He,
  YkRadio: Ge,
  YkCheckbox: st,
  YkInput: pt,
  YkOption: kt,
  YkTooltip: wt,
  YkPopover: Nt
}, qt = {
  install(t) {
    Object.keys(ae).forEach((o) => {
      t.component(o, ae[o]);
    });
  }
};
export {
  X as Message,
  Z as Notification,
  Te as YkButton,
  st as YkCheckbox,
  L as YkIcon,
  pt as YkInput,
  kt as YkOption,
  Nt as YkPopover,
  Ge as YkRadio,
  yt as YkSelect,
  He as YkSwitch,
  wt as YkTooltip,
  qt as default
};
