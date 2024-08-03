import { defineComponent as u } from "vue";
const g = (n, t) => {
  if (n.install = (r) => {
    for (const e of [n, ...Object.values(t ?? {})])
      r.component(e.name, e);
  }, t)
    for (const [r, e] of Object.entries(t))
      n[r] = e;
  return n;
}, f = (n) => typeof n == "string", l = (n) => n !== null && typeof n == "object", p = (n) => n instanceof Array, s = (n, t, r) => {
  let e = [];
  if (p(t) ? e = t.map((o) => o ? `${n}--${o}` : "").filter(Boolean) : l(t) && (e = Object.entries(t).map(([o, c]) => c ? `${n}--${o}` : "").filter(Boolean)), l(r)) {
    const o = Object.entries(r).map(([c, i]) => i ? c : "").filter(Boolean);
    e.push(...o);
  }
  return e;
}, y = (n, t = "yk") => {
  const r = `${t}-${n.replace(t, "")}`;
  return (e, o, c, i) => {
    if (!e)
      return r;
    if (f(e)) {
      const a = `${r}__${e}`;
      return o ? [
        a,
        ...s(a, o),
        ...s(a, c),
        ...s(a, {}, i)
      ] : a;
    } else
      return [
        r,
        ...s(r, e),
        ...s(r, o),
        ...s(r, {}, c)
      ];
  };
}, N = {
  info: {
    icon: ["fas", "circle-info"],
    color: "#909399"
  },
  success: {
    icon: ["fas", "circle-check"],
    color: "#68c23c"
  },
  warning: {
    icon: ["fas", "triangle-exclamation"],
    color: "#e6a23c"
  },
  error: {
    icon: ["fas", "triangle-xmark"],
    color: "#f57879"
  },
  danger: {
    icon: ["fas", "circle-exclamation"],
    color: "#f57879"
  }
}, b = u({
  props: {
    vNode: {
      type: [String, Object, Function],
      require: !0
    }
  },
  setup(n) {
    return () => n.vNode instanceof Function ? n.vNode() : n.vNode;
  }
});
export {
  b as R,
  y as c,
  N as i,
  g as w
};
