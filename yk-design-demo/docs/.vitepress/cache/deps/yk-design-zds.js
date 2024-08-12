import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  isRef,
  isVNode,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  openBlock,
  provide,
  reactive,
  ref,
  render,
  renderSlot,
  resolveComponent,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toDisplayString,
  toHandlers,
  toRef,
  unref,
  useSlots,
  vModelCheckbox,
  vModelDynamic,
  vModelRadio,
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-IUZBPNKP.js";

// node_modules/.pnpm/yk-design-zds@1.0.0/node_modules/yk-design-zds/es/utils-e5a4f070.js
var $ = (n, t) => {
  if (n.install = (r) => {
    for (const e of [n, ...Object.values(t ?? {})])
      r.component(e.name, e);
  }, t)
    for (const [r, e] of Object.entries(t))
      n[r] = e;
  return n;
};
var i = (n) => typeof n == "string";
var l = (n) => n !== null && typeof n == "object";
var p = (n) => n instanceof Array;
var s = (n, t, r) => {
  let e = [];
  if (p(t) ? e = t.map((o) => o ? `${n}--${o}` : "").filter(Boolean) : l(t) && (e = Object.entries(t).map(([o, c]) => c ? `${n}--${o}` : "").filter(Boolean)), l(r)) {
    const o = Object.entries(r).map(([c, u]) => u ? c : "").filter(Boolean);
    e.push(...o);
  }
  return e;
};
var j = (n, t = "yk") => {
  const r = `${t}-${n.replace(t, "")}`;
  return (e, o, c, u) => {
    if (!e)
      return r;
    if (i(e)) {
      const a = `${r}__${e}`;
      return o ? [
        a,
        ...s(a, o),
        ...s(a, c),
        ...s(a, {}, u)
      ] : a;
    } else
      return [
        r,
        ...s(r, e),
        ...s(r, o),
        ...s(r, {}, c)
      ];
  };
};
var y = {
  info: {
    name: "jinggao",
    color: "#909399"
  },
  success: {
    name: "quangou",
    color: "#68c23c"
  },
  warning: {
    name: "jinggao3",
    color: "#e6a23c"
  },
  error: {
    name: "quancha",
    color: "#f57879"
  },
  danger: {
    name: "quancha",
    color: "#f57879"
  }
};
var m = defineComponent({
  props: {
    vNode: {
      type: [String, Object, Function],
      require: true
    }
  },
  setup(n) {
    return () => n.vNode instanceof Function ? n.vNode() : n.vNode;
  }
});

// node_modules/.pnpm/yk-design-zds@1.0.0/node_modules/yk-design-zds/es/vendor-d80b3ed7.js
var B = "top";
var N = "bottom";
var H = "right";
var j2 = "left";
var ee = "auto";
var Ct = [B, N, H, j2];
var ut = "start";
var At = "end";
var pn = "clippingParents";
var Ve = "viewport";
var xt = "popper";
var dn = "reference";
var Ee = Ct.reduce(function(t, e) {
  return t.concat([e + "-" + ut, e + "-" + At]);
}, []);
var Ne = [].concat(Ct, [ee]).reduce(function(t, e) {
  return t.concat([e, e + "-" + ut, e + "-" + At]);
}, []);
var vn = "beforeRead";
var mn = "read";
var hn = "afterRead";
var gn = "beforeMain";
var yn = "main";
var wn = "afterMain";
var xn = "beforeWrite";
var bn = "write";
var On = "afterWrite";
var An = [vn, mn, hn, gn, yn, wn, xn, bn, On];
function Y(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function W(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function rt(t) {
  var e = W(t).Element;
  return t instanceof e || t instanceof Element;
}
function V(t) {
  var e = W(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function ne(t) {
  if (typeof ShadowRoot > "u")
    return false;
  var e = W(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function En(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, o = e.attributes[n] || {}, i2 = e.elements[n];
    !V(i2) || !Y(i2) || (Object.assign(i2.style, r), Object.keys(o).forEach(function(a) {
      var s2 = o[a];
      s2 === false ? i2.removeAttribute(a) : i2.setAttribute(a, s2 === true ? "" : s2);
    }));
  });
}
function Rn(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var o = e.elements[r], i2 = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), s2 = a.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !V(o) || !Y(o) || (Object.assign(o.style, s2), Object.keys(i2).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
var Pn = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: En,
  effect: Rn,
  requires: ["computeStyles"]
};
function X(t) {
  return t.split("-")[0];
}
var nt = Math.max;
var Wt = Math.min;
var pt = Math.round;
function Jt() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function He() {
  return !/^((?!chrome|android).)*safari/i.test(Jt());
}
function dt(t, e, n) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  var r = t.getBoundingClientRect(), o = 1, i2 = 1;
  e && V(t) && (o = t.offsetWidth > 0 && pt(r.width) / t.offsetWidth || 1, i2 = t.offsetHeight > 0 && pt(r.height) / t.offsetHeight || 1);
  var a = rt(t) ? W(t) : window, s2 = a.visualViewport, c = !He() && n, f = (r.left + (c && s2 ? s2.offsetLeft : 0)) / o, l2 = (r.top + (c && s2 ? s2.offsetTop : 0)) / i2, p2 = r.width / o, h2 = r.height / i2;
  return {
    width: p2,
    height: h2,
    top: l2,
    right: f + p2,
    bottom: l2 + h2,
    left: f,
    x: f,
    y: l2
  };
}
function re(t) {
  var e = dt(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function Fe(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return true;
  if (n && ne(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function z(t) {
  return W(t).getComputedStyle(t);
}
function Cn(t) {
  return ["table", "td", "th"].indexOf(Y(t)) >= 0;
}
function Q(t) {
  return ((rt(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function Ft(t) {
  return Y(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (ne(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Q(t)
  );
}
function Re(t) {
  return !V(t) || // https://github.com/popperjs/popper-core/issues/837
  z(t).position === "fixed" ? null : t.offsetParent;
}
function $n(t) {
  var e = /firefox/i.test(Jt()), n = /Trident/i.test(Jt());
  if (n && V(t)) {
    var r = z(t);
    if (r.position === "fixed")
      return null;
  }
  var o = Ft(t);
  for (ne(o) && (o = o.host); V(o) && ["html", "body"].indexOf(Y(o)) < 0; ) {
    var i2 = z(o);
    if (i2.transform !== "none" || i2.perspective !== "none" || i2.contain === "paint" || ["transform", "perspective"].indexOf(i2.willChange) !== -1 || e && i2.willChange === "filter" || e && i2.filter && i2.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function $t(t) {
  for (var e = W(t), n = Re(t); n && Cn(n) && z(n).position === "static"; )
    n = Re(n);
  return n && (Y(n) === "html" || Y(n) === "body" && z(n).position === "static") ? e : n || $n(t) || e;
}
function oe(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function bt(t, e, n) {
  return nt(t, Wt(e, n));
}
function Dn(t, e, n) {
  var r = bt(t, e, n);
  return r > n ? n : r;
}
function Xe() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ye(t) {
  return Object.assign({}, Xe(), t);
}
function Ie(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var Tn = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, Ye(typeof e != "number" ? e : Ie(e, Ct));
};
function Ln(t) {
  var e, n = t.state, r = t.name, o = t.options, i2 = n.elements.arrow, a = n.modifiersData.popperOffsets, s2 = X(n.placement), c = oe(s2), f = [j2, H].indexOf(s2) >= 0, l2 = f ? "height" : "width";
  if (!(!i2 || !a)) {
    var p2 = Tn(o.padding, n), h2 = re(i2), u = c === "y" ? B : j2, v = c === "y" ? N : H, d = n.rects.reference[l2] + n.rects.reference[c] - a[c] - n.rects.popper[l2], m2 = a[c] - n.rects.reference[c], x = $t(i2), O = x ? c === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, b = d / 2 - m2 / 2, y2 = p2[u], w = O - h2[l2] - p2[v], A = O / 2 - h2[l2] / 2 + b, g = bt(y2, A, w), E = c;
    n.modifiersData[r] = (e = {}, e[E] = g, e.centerOffset = g - A, e);
  }
}
function Sn(t) {
  var e = t.state, n = t.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || Fe(e.elements.popper, o) && (e.elements.arrow = o));
}
var kn = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: Ln,
  effect: Sn,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function vt(t) {
  return t.split("-")[1];
}
var Bn = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function jn(t, e) {
  var n = t.x, r = t.y, o = e.devicePixelRatio || 1;
  return {
    x: pt(n * o) / o || 0,
    y: pt(r * o) / o || 0
  };
}
function Pe(t) {
  var e, n = t.popper, r = t.popperRect, o = t.placement, i2 = t.variation, a = t.offsets, s2 = t.position, c = t.gpuAcceleration, f = t.adaptive, l2 = t.roundOffsets, p2 = t.isFixed, h2 = a.x, u = h2 === void 0 ? 0 : h2, v = a.y, d = v === void 0 ? 0 : v, m2 = typeof l2 == "function" ? l2({
    x: u,
    y: d
  }) : {
    x: u,
    y: d
  };
  u = m2.x, d = m2.y;
  var x = a.hasOwnProperty("x"), O = a.hasOwnProperty("y"), b = j2, y2 = B, w = window;
  if (f) {
    var A = $t(n), g = "clientHeight", E = "clientWidth";
    if (A === W(n) && (A = Q(n), z(A).position !== "static" && s2 === "absolute" && (g = "scrollHeight", E = "scrollWidth")), A = A, o === B || (o === j2 || o === H) && i2 === At) {
      y2 = N;
      var R = p2 && A === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[g]
      );
      d -= R - r.height, d *= c ? 1 : -1;
    }
    if (o === j2 || (o === B || o === N) && i2 === At) {
      b = H;
      var P = p2 && A === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[E]
      );
      u -= P - r.width, u *= c ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s2
  }, f && Bn), C = l2 === true ? jn({
    x: u,
    y: d
  }, W(n)) : {
    x: u,
    y: d
  };
  if (u = C.x, d = C.y, c) {
    var T;
    return Object.assign({}, D, (T = {}, T[y2] = O ? "0" : "", T[b] = x ? "0" : "", T.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + d + "px)" : "translate3d(" + u + "px, " + d + "px, 0)", T));
  }
  return Object.assign({}, D, (e = {}, e[y2] = O ? d + "px" : "", e[b] = x ? u + "px" : "", e.transform = "", e));
}
function Mn(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, i2 = n.adaptive, a = i2 === void 0 ? true : i2, s2 = n.roundOffsets, c = s2 === void 0 ? true : s2, f = {
    placement: X(e.placement),
    variation: vt(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Pe(Object.assign({}, f, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Pe(Object.assign({}, f, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
var Wn = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: Mn,
  data: {}
};
var jt = {
  passive: true
};
function Vn(t) {
  var e = t.state, n = t.instance, r = t.options, o = r.scroll, i2 = o === void 0 ? true : o, a = r.resize, s2 = a === void 0 ? true : a, c = W(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i2 && f.forEach(function(l2) {
    l2.addEventListener("scroll", n.update, jt);
  }), s2 && c.addEventListener("resize", n.update, jt), function() {
    i2 && f.forEach(function(l2) {
      l2.removeEventListener("scroll", n.update, jt);
    }), s2 && c.removeEventListener("resize", n.update, jt);
  };
}
var Nn = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: Vn,
  data: {}
};
var Hn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mt(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Hn[e];
  });
}
var Fn = {
  start: "end",
  end: "start"
};
function Ce(t) {
  return t.replace(/start|end/g, function(e) {
    return Fn[e];
  });
}
function ie(t) {
  var e = W(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ae(t) {
  return dt(Q(t)).left + ie(t).scrollLeft;
}
function Xn(t, e) {
  var n = W(t), r = Q(t), o = n.visualViewport, i2 = r.clientWidth, a = r.clientHeight, s2 = 0, c = 0;
  if (o) {
    i2 = o.width, a = o.height;
    var f = He();
    (f || !f && e === "fixed") && (s2 = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i2,
    height: a,
    x: s2 + ae(t),
    y: c
  };
}
function Yn(t) {
  var e, n = Q(t), r = ie(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i2 = nt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = nt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s2 = -r.scrollLeft + ae(t), c = -r.scrollTop;
  return z(o || n).direction === "rtl" && (s2 += nt(n.clientWidth, o ? o.clientWidth : 0) - i2), {
    width: i2,
    height: a,
    x: s2,
    y: c
  };
}
function se(t) {
  var e = z(t), n = e.overflow, r = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function qe(t) {
  return ["html", "body", "#document"].indexOf(Y(t)) >= 0 ? t.ownerDocument.body : V(t) && se(t) ? t : qe(Ft(t));
}
function Ot(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = qe(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i2 = W(r), a = o ? [i2].concat(i2.visualViewport || [], se(r) ? r : []) : r, s2 = e.concat(a);
  return o ? s2 : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s2.concat(Ot(Ft(a)))
  );
}
function Qt(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function In(t, e) {
  var n = dt(t, false, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function $e(t, e, n) {
  return e === Ve ? Qt(Xn(t, n)) : rt(e) ? In(e, n) : Qt(Yn(Q(t)));
}
function qn(t) {
  var e = Ot(Ft(t)), n = ["absolute", "fixed"].indexOf(z(t).position) >= 0, r = n && V(t) ? $t(t) : t;
  return rt(r) ? e.filter(function(o) {
    return rt(o) && Fe(o, r) && Y(o) !== "body";
  }) : [];
}
function zn(t, e, n, r) {
  var o = e === "clippingParents" ? qn(t) : [].concat(e), i2 = [].concat(o, [n]), a = i2[0], s2 = i2.reduce(function(c, f) {
    var l2 = $e(t, f, r);
    return c.top = nt(l2.top, c.top), c.right = Wt(l2.right, c.right), c.bottom = Wt(l2.bottom, c.bottom), c.left = nt(l2.left, c.left), c;
  }, $e(t, a, r));
  return s2.width = s2.right - s2.left, s2.height = s2.bottom - s2.top, s2.x = s2.left, s2.y = s2.top, s2;
}
function ze(t) {
  var e = t.reference, n = t.element, r = t.placement, o = r ? X(r) : null, i2 = r ? vt(r) : null, a = e.x + e.width / 2 - n.width / 2, s2 = e.y + e.height / 2 - n.height / 2, c;
  switch (o) {
    case B:
      c = {
        x: a,
        y: e.y - n.height
      };
      break;
    case N:
      c = {
        x: a,
        y: e.y + e.height
      };
      break;
    case H:
      c = {
        x: e.x + e.width,
        y: s2
      };
      break;
    case j2:
      c = {
        x: e.x - n.width,
        y: s2
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var f = o ? oe(o) : null;
  if (f != null) {
    var l2 = f === "y" ? "height" : "width";
    switch (i2) {
      case ut:
        c[f] = c[f] - (e[l2] / 2 - n[l2] / 2);
        break;
      case At:
        c[f] = c[f] + (e[l2] / 2 - n[l2] / 2);
        break;
    }
  }
  return c;
}
function Et(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = r === void 0 ? t.placement : r, i2 = n.strategy, a = i2 === void 0 ? t.strategy : i2, s2 = n.boundary, c = s2 === void 0 ? pn : s2, f = n.rootBoundary, l2 = f === void 0 ? Ve : f, p2 = n.elementContext, h2 = p2 === void 0 ? xt : p2, u = n.altBoundary, v = u === void 0 ? false : u, d = n.padding, m2 = d === void 0 ? 0 : d, x = Ye(typeof m2 != "number" ? m2 : Ie(m2, Ct)), O = h2 === xt ? dn : xt, b = t.rects.popper, y2 = t.elements[v ? O : h2], w = zn(rt(y2) ? y2 : y2.contextElement || Q(t.elements.popper), c, l2, a), A = dt(t.elements.reference), g = ze({
    reference: A,
    element: b,
    strategy: "absolute",
    placement: o
  }), E = Qt(Object.assign({}, b, g)), R = h2 === xt ? E : A, P = {
    top: w.top - R.top + x.top,
    bottom: R.bottom - w.bottom + x.bottom,
    left: w.left - R.left + x.left,
    right: R.right - w.right + x.right
  }, D = t.modifiersData.offset;
  if (h2 === xt && D) {
    var C = D[o];
    Object.keys(P).forEach(function(T) {
      var L2 = [H, N].indexOf(T) >= 0 ? 1 : -1, k = [B, N].indexOf(T) >= 0 ? "y" : "x";
      P[T] += C[k] * L2;
    });
  }
  return P;
}
function Un(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = n.boundary, i2 = n.rootBoundary, a = n.padding, s2 = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? Ne : c, l2 = vt(r), p2 = l2 ? s2 ? Ee : Ee.filter(function(v) {
    return vt(v) === l2;
  }) : Ct, h2 = p2.filter(function(v) {
    return f.indexOf(v) >= 0;
  });
  h2.length === 0 && (h2 = p2);
  var u = h2.reduce(function(v, d) {
    return v[d] = Et(t, {
      placement: d,
      boundary: o,
      rootBoundary: i2,
      padding: a
    })[X(d)], v;
  }, {});
  return Object.keys(u).sort(function(v, d) {
    return u[v] - u[d];
  });
}
function Gn(t) {
  if (X(t) === ee)
    return [];
  var e = Mt(t);
  return [Ce(t), e, Ce(e)];
}
function Kn(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i2 = o === void 0 ? true : o, a = n.altAxis, s2 = a === void 0 ? true : a, c = n.fallbackPlacements, f = n.padding, l2 = n.boundary, p2 = n.rootBoundary, h2 = n.altBoundary, u = n.flipVariations, v = u === void 0 ? true : u, d = n.allowedAutoPlacements, m2 = e.options.placement, x = X(m2), O = x === m2, b = c || (O || !v ? [Mt(m2)] : Gn(m2)), y2 = [m2].concat(b).reduce(function(at2, U) {
      return at2.concat(X(U) === ee ? Un(e, {
        placement: U,
        boundary: l2,
        rootBoundary: p2,
        padding: f,
        flipVariations: v,
        allowedAutoPlacements: d
      }) : U);
    }, []), w = e.rects.reference, A = e.rects.popper, g = /* @__PURE__ */ new Map(), E = true, R = y2[0], P = 0; P < y2.length; P++) {
      var D = y2[P], C = X(D), T = vt(D) === ut, L2 = [B, N].indexOf(C) >= 0, k = L2 ? "width" : "height", $2 = Et(e, {
        placement: D,
        boundary: l2,
        rootBoundary: p2,
        altBoundary: h2,
        padding: f
      }), S = L2 ? T ? H : j2 : T ? N : B;
      w[k] > A[k] && (S = Mt(S));
      var it2 = Mt(S), _ = [];
      if (i2 && _.push($2[C] <= 0), s2 && _.push($2[S] <= 0, $2[it2] <= 0), _.every(function(at2) {
        return at2;
      })) {
        R = D, E = false;
        break;
      }
      g.set(D, _);
    }
    if (E)
      for (var Lt = v ? 3 : 1, It2 = function(U) {
        var yt2 = y2.find(function(kt2) {
          var tt2 = g.get(kt2);
          if (tt2)
            return tt2.slice(0, U).every(function(qt) {
              return qt;
            });
        });
        if (yt2)
          return R = yt2, "break";
      }, gt2 = Lt; gt2 > 0; gt2--) {
        var St2 = It2(gt2);
        if (St2 === "break")
          break;
      }
    e.placement !== R && (e.modifiersData[r]._skip = true, e.placement = R, e.reset = true);
  }
}
var Jn = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: Kn,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function De(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function Te(t) {
  return [B, H, N, j2].some(function(e) {
    return t[e] >= 0;
  });
}
function Qn(t) {
  var e = t.state, n = t.name, r = e.rects.reference, o = e.rects.popper, i2 = e.modifiersData.preventOverflow, a = Et(e, {
    elementContext: "reference"
  }), s2 = Et(e, {
    altBoundary: true
  }), c = De(a, r), f = De(s2, o, i2), l2 = Te(c), p2 = Te(f);
  e.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: f,
    isReferenceHidden: l2,
    hasPopperEscaped: p2
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": l2,
    "data-popper-escaped": p2
  });
}
var Zn = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Qn
};
function _n(t, e, n) {
  var r = X(t), o = [j2, B].indexOf(r) >= 0 ? -1 : 1, i2 = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, a = i2[0], s2 = i2[1];
  return a = a || 0, s2 = (s2 || 0) * o, [j2, H].indexOf(r) >= 0 ? {
    x: s2,
    y: a
  } : {
    x: a,
    y: s2
  };
}
function tr(t) {
  var e = t.state, n = t.options, r = t.name, o = n.offset, i2 = o === void 0 ? [0, 0] : o, a = Ne.reduce(function(l2, p2) {
    return l2[p2] = _n(p2, e.rects, i2), l2;
  }, {}), s2 = a[e.placement], c = s2.x, f = s2.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += f), e.modifiersData[r] = a;
}
var er = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: tr
};
function nr(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = ze({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
var rr = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: nr,
  data: {}
};
function or(t) {
  return t === "x" ? "y" : "x";
}
function ir(t) {
  var e = t.state, n = t.options, r = t.name, o = n.mainAxis, i2 = o === void 0 ? true : o, a = n.altAxis, s2 = a === void 0 ? false : a, c = n.boundary, f = n.rootBoundary, l2 = n.altBoundary, p2 = n.padding, h2 = n.tether, u = h2 === void 0 ? true : h2, v = n.tetherOffset, d = v === void 0 ? 0 : v, m2 = Et(e, {
    boundary: c,
    rootBoundary: f,
    padding: p2,
    altBoundary: l2
  }), x = X(e.placement), O = vt(e.placement), b = !O, y2 = oe(x), w = or(y2), A = e.modifiersData.popperOffsets, g = e.rects.reference, E = e.rects.popper, R = typeof d == "function" ? d(Object.assign({}, e.rects, {
    placement: e.placement
  })) : d, P = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), D = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (A) {
    if (i2) {
      var T, L2 = y2 === "y" ? B : j2, k = y2 === "y" ? N : H, $2 = y2 === "y" ? "height" : "width", S = A[y2], it2 = S + m2[L2], _ = S - m2[k], Lt = u ? -E[$2] / 2 : 0, It2 = O === ut ? g[$2] : E[$2], gt2 = O === ut ? -E[$2] : -g[$2], St2 = e.elements.arrow, at2 = u && St2 ? re(St2) : {
        width: 0,
        height: 0
      }, U = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Xe(), yt2 = U[L2], kt2 = U[k], tt2 = bt(0, g[$2], at2[$2]), qt = b ? g[$2] / 2 - Lt - tt2 - yt2 - P.mainAxis : It2 - tt2 - yt2 - P.mainAxis, nn = b ? -g[$2] / 2 + Lt + tt2 + kt2 + P.mainAxis : gt2 + tt2 + kt2 + P.mainAxis, zt2 = e.elements.arrow && $t(e.elements.arrow), rn = zt2 ? y2 === "y" ? zt2.clientTop || 0 : zt2.clientLeft || 0 : 0, me2 = (T = D == null ? void 0 : D[y2]) != null ? T : 0, on = S + qt - me2 - rn, an = S + nn - me2, he2 = bt(u ? Wt(it2, on) : it2, S, u ? nt(_, an) : _);
      A[y2] = he2, C[y2] = he2 - S;
    }
    if (s2) {
      var ge, sn = y2 === "x" ? B : j2, cn = y2 === "x" ? N : H, et2 = A[w], Bt2 = w === "y" ? "height" : "width", ye = et2 + m2[sn], we = et2 - m2[cn], Ut = [B, j2].indexOf(x) !== -1, xe = (ge = D == null ? void 0 : D[w]) != null ? ge : 0, be = Ut ? ye : et2 - g[Bt2] - E[Bt2] - xe + P.altAxis, Oe2 = Ut ? et2 + g[Bt2] + E[Bt2] - xe - P.altAxis : we, Ae2 = u && Ut ? Dn(be, et2, Oe2) : bt(u ? be : ye, et2, u ? Oe2 : we);
      A[w] = Ae2, C[w] = Ae2 - et2;
    }
    e.modifiersData[r] = C;
  }
}
var ar = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: ir,
  requiresIfExists: ["offset"]
};
function sr(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function cr(t) {
  return t === W(t) || !V(t) ? ie(t) : sr(t);
}
function lr(t) {
  var e = t.getBoundingClientRect(), n = pt(e.width) / t.offsetWidth || 1, r = pt(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function fr(t, e, n) {
  n === void 0 && (n = false);
  var r = V(e), o = V(e) && lr(e), i2 = Q(e), a = dt(t, o, n), s2 = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Y(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  se(i2)) && (s2 = cr(e)), V(e) ? (c = dt(e, true), c.x += e.clientLeft, c.y += e.clientTop) : i2 && (c.x = ae(i2))), {
    x: a.left + s2.scrollLeft - c.x,
    y: a.top + s2.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function ur(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(i2) {
    e.set(i2.name, i2);
  });
  function o(i2) {
    n.add(i2.name);
    var a = [].concat(i2.requires || [], i2.requiresIfExists || []);
    a.forEach(function(s2) {
      if (!n.has(s2)) {
        var c = e.get(s2);
        c && o(c);
      }
    }), r.push(i2);
  }
  return t.forEach(function(i2) {
    n.has(i2.name) || o(i2);
  }), r;
}
function pr(t) {
  var e = ur(t);
  return An.reduce(function(n, r) {
    return n.concat(e.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function dr(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function vr(t) {
  var e = t.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var Le = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Se() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function mr(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, o = e.defaultOptions, i2 = o === void 0 ? Le : o;
  return function(s2, c, f) {
    f === void 0 && (f = i2);
    var l2 = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Le, i2),
      modifiersData: {},
      elements: {
        reference: s2,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p2 = [], h2 = false, u = {
      state: l2,
      setOptions: function(x) {
        var O = typeof x == "function" ? x(l2.options) : x;
        d(), l2.options = Object.assign({}, i2, l2.options, O), l2.scrollParents = {
          reference: rt(s2) ? Ot(s2) : s2.contextElement ? Ot(s2.contextElement) : [],
          popper: Ot(c)
        };
        var b = pr(vr([].concat(r, l2.options.modifiers)));
        return l2.orderedModifiers = b.filter(function(y2) {
          return y2.enabled;
        }), v(), u.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h2) {
          var x = l2.elements, O = x.reference, b = x.popper;
          if (Se(O, b)) {
            l2.rects = {
              reference: fr(O, $t(b), l2.options.strategy === "fixed"),
              popper: re(b)
            }, l2.reset = false, l2.placement = l2.options.placement, l2.orderedModifiers.forEach(function(P) {
              return l2.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var y2 = 0; y2 < l2.orderedModifiers.length; y2++) {
              if (l2.reset === true) {
                l2.reset = false, y2 = -1;
                continue;
              }
              var w = l2.orderedModifiers[y2], A = w.fn, g = w.options, E = g === void 0 ? {} : g, R = w.name;
              typeof A == "function" && (l2 = A({
                state: l2,
                options: E,
                name: R,
                instance: u
              }) || l2);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: dr(function() {
        return new Promise(function(m2) {
          u.forceUpdate(), m2(l2);
        });
      }),
      destroy: function() {
        d(), h2 = true;
      }
    };
    if (!Se(s2, c))
      return u;
    u.setOptions(f).then(function(m2) {
      !h2 && f.onFirstUpdate && f.onFirstUpdate(m2);
    });
    function v() {
      l2.orderedModifiers.forEach(function(m2) {
        var x = m2.name, O = m2.options, b = O === void 0 ? {} : O, y2 = m2.effect;
        if (typeof y2 == "function") {
          var w = y2({
            state: l2,
            name: x,
            instance: u,
            options: b
          }), A = function() {
          };
          p2.push(w || A);
        }
      });
    }
    function d() {
      p2.forEach(function(m2) {
        return m2();
      }), p2 = [];
    }
    return u;
  };
}
var hr = [Nn, rr, Wn, Pn, er, Jn, ar, kn, Zn];
var _r = mr({
  defaultModifiers: hr
});
var Rt = Math.min;
var lt = Math.max;
var Vt = Math.round;
var K = (t) => ({
  x: t,
  y: t
});
var gr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var yr = {
  start: "end",
  end: "start"
};
function wr(t, e, n) {
  return lt(t, Rt(e, n));
}
function Xt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function mt(t) {
  return t.split("-")[0];
}
function Dt(t) {
  return t.split("-")[1];
}
function xr(t) {
  return t === "x" ? "y" : "x";
}
function ce(t) {
  return t === "y" ? "height" : "width";
}
function le(t) {
  return ["top", "bottom"].includes(mt(t)) ? "y" : "x";
}
function fe(t) {
  return xr(le(t));
}
function br(t, e, n) {
  n === void 0 && (n = false);
  const r = Dt(t), o = fe(t), i2 = ce(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i2] > e.floating[i2] && (a = Nt(a)), [a, Nt(a)];
}
function Or(t) {
  const e = Nt(t);
  return [Zt(t), e, Zt(e)];
}
function Zt(t) {
  return t.replace(/start|end/g, (e) => yr[e]);
}
function Ar(t, e, n) {
  const r = ["left", "right"], o = ["right", "left"], i2 = ["top", "bottom"], a = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? o : r : e ? r : o;
    case "left":
    case "right":
      return e ? i2 : a;
    default:
      return [];
  }
}
function Er(t, e, n, r) {
  const o = Dt(t);
  let i2 = Ar(mt(t), n === "start", r);
  return o && (i2 = i2.map((a) => a + "-" + o), e && (i2 = i2.concat(i2.map(Zt)))), i2;
}
function Nt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => gr[e]);
}
function Rr(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ue(t) {
  return typeof t != "number" ? Rr(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ht(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function ke(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i2 = le(e), a = fe(e), s2 = ce(a), c = mt(e), f = i2 === "y", l2 = r.x + r.width / 2 - o.width / 2, p2 = r.y + r.height / 2 - o.height / 2, h2 = r[s2] / 2 - o[s2] / 2;
  let u;
  switch (c) {
    case "top":
      u = {
        x: l2,
        y: r.y - o.height
      };
      break;
    case "bottom":
      u = {
        x: l2,
        y: r.y + r.height
      };
      break;
    case "right":
      u = {
        x: r.x + r.width,
        y: p2
      };
      break;
    case "left":
      u = {
        x: r.x - o.width,
        y: p2
      };
      break;
    default:
      u = {
        x: r.x,
        y: r.y
      };
  }
  switch (Dt(e)) {
    case "start":
      u[a] -= h2 * (n && f ? -1 : 1);
      break;
    case "end":
      u[a] += h2 * (n && f ? -1 : 1);
      break;
  }
  return u;
}
var Pr = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i2 = [],
    platform: a
  } = n, s2 = i2.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(e));
  let f = await a.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: l2,
    y: p2
  } = ke(f, r, c), h2 = r, u = {}, v = 0;
  for (let d = 0; d < s2.length; d++) {
    const {
      name: m2,
      fn: x
    } = s2[d], {
      x: O,
      y: b,
      data: y2,
      reset: w
    } = await x({
      x: l2,
      y: p2,
      initialPlacement: r,
      placement: h2,
      strategy: o,
      middlewareData: u,
      rects: f,
      platform: a,
      elements: {
        reference: t,
        floating: e
      }
    });
    l2 = O ?? l2, p2 = b ?? p2, u = {
      ...u,
      [m2]: {
        ...u[m2],
        ...y2
      }
    }, w && v <= 50 && (v++, typeof w == "object" && (w.placement && (h2 = w.placement), w.rects && (f = w.rects === true ? await a.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : w.rects), {
      x: l2,
      y: p2
    } = ke(f, h2, c)), d = -1);
  }
  return {
    x: l2,
    y: p2,
    placement: h2,
    strategy: o,
    middlewareData: u
  };
};
async function Cr(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: i2,
    rects: a,
    elements: s2,
    strategy: c
  } = t, {
    boundary: f = "clippingAncestors",
    rootBoundary: l2 = "viewport",
    elementContext: p2 = "floating",
    altBoundary: h2 = false,
    padding: u = 0
  } = Xt(e, t), v = Ue(u), m2 = s2[h2 ? p2 === "floating" ? "reference" : "floating" : p2], x = Ht(await i2.getClippingRect({
    element: (n = await (i2.isElement == null ? void 0 : i2.isElement(m2))) == null || n ? m2 : m2.contextElement || await (i2.getDocumentElement == null ? void 0 : i2.getDocumentElement(s2.floating)),
    boundary: f,
    rootBoundary: l2,
    strategy: c
  })), O = p2 === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (i2.getOffsetParent == null ? void 0 : i2.getOffsetParent(s2.floating)), y2 = await (i2.isElement == null ? void 0 : i2.isElement(b)) ? await (i2.getScale == null ? void 0 : i2.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ht(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? await i2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s2,
    rect: O,
    offsetParent: b,
    strategy: c
  }) : O);
  return {
    top: (x.top - w.top + v.top) / y2.y,
    bottom: (w.bottom - x.bottom + v.bottom) / y2.y,
    left: (x.left - w.left + v.left) / y2.x,
    right: (w.right - x.right + v.right) / y2.x
  };
}
var $r = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i2,
      platform: a,
      elements: s2,
      middlewareData: c
    } = e, {
      element: f,
      padding: l2 = 0
    } = Xt(t, e) || {};
    if (f == null)
      return {};
    const p2 = Ue(l2), h2 = {
      x: n,
      y: r
    }, u = fe(o), v = ce(u), d = await a.getDimensions(f), m2 = u === "y", x = m2 ? "top" : "left", O = m2 ? "bottom" : "right", b = m2 ? "clientHeight" : "clientWidth", y2 = i2.reference[v] + i2.reference[u] - h2[u] - i2.floating[v], w = h2[u] - i2.reference[u], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(f));
    let g = A ? A[b] : 0;
    (!g || !await (a.isElement == null ? void 0 : a.isElement(A))) && (g = s2.floating[b] || i2.floating[v]);
    const E = y2 / 2 - w / 2, R = g / 2 - d[v] / 2 - 1, P = Rt(p2[x], R), D = Rt(p2[O], R), C = P, T = g - d[v] - D, L2 = g / 2 - d[v] / 2 + E, k = wr(C, L2, T), $2 = !c.arrow && Dt(o) != null && L2 !== k && i2.reference[v] / 2 - (L2 < C ? P : D) - d[v] / 2 < 0, S = $2 ? L2 < C ? L2 - C : L2 - T : 0;
    return {
      [u]: h2[u] + S,
      data: {
        [u]: k,
        centerOffset: L2 - k - S,
        ...$2 && {
          alignmentOffset: S
        }
      },
      reset: $2
    };
  }
});
var Dr = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: i2,
        rects: a,
        initialPlacement: s2,
        platform: c,
        elements: f
      } = e, {
        mainAxis: l2 = true,
        crossAxis: p2 = true,
        fallbackPlacements: h2,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: d = true,
        ...m2
      } = Xt(t, e);
      if ((n = i2.arrow) != null && n.alignmentOffset)
        return {};
      const x = mt(o), O = mt(s2) === s2, b = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), y2 = h2 || (O || !d ? [Nt(s2)] : Or(s2));
      !h2 && v !== "none" && y2.push(...Er(s2, d, v, b));
      const w = [s2, ...y2], A = await Cr(e, m2), g = [];
      let E = ((r = i2.flip) == null ? void 0 : r.overflows) || [];
      if (l2 && g.push(A[x]), p2) {
        const C = br(o, a, b);
        g.push(A[C[0]], A[C[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: g
      }], !g.every((C) => C <= 0)) {
        var R, P;
        const C = (((R = i2.flip) == null ? void 0 : R.index) || 0) + 1, T = w[C];
        if (T)
          return {
            data: {
              index: C,
              overflows: E
            },
            reset: {
              placement: T
            }
          };
        let L2 = (P = E.filter((k) => k.overflows[0] <= 0).sort((k, $2) => k.overflows[1] - $2.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!L2)
          switch (u) {
            case "bestFit": {
              var D;
              const k = (D = E.map(($2) => [$2.placement, $2.overflows.filter((S) => S > 0).reduce((S, it2) => S + it2, 0)]).sort(($2, S) => $2[1] - S[1])[0]) == null ? void 0 : D[0];
              k && (L2 = k);
              break;
            }
            case "initialPlacement":
              L2 = s2;
              break;
          }
        if (o !== L2)
          return {
            reset: {
              placement: L2
            }
          };
      }
      return {};
    }
  };
};
async function Tr(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i2 = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = mt(n), s2 = Dt(n), c = le(n) === "y", f = ["left", "top"].includes(a) ? -1 : 1, l2 = i2 && c ? -1 : 1, p2 = Xt(e, t);
  let {
    mainAxis: h2,
    crossAxis: u,
    alignmentAxis: v
  } = typeof p2 == "number" ? {
    mainAxis: p2,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p2
  };
  return s2 && typeof v == "number" && (u = s2 === "end" ? v * -1 : v), c ? {
    x: u * l2,
    y: h2 * f
  } : {
    x: h2 * f,
    y: u * l2
  };
}
var Lr = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: i2,
        placement: a,
        middlewareData: s2
      } = e, c = await Tr(e, t);
      return a === ((n = s2.offset) == null ? void 0 : n.placement) && (r = s2.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i2 + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
};
function ot(t) {
  return ue(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function M(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Z(t) {
  var e;
  return (e = (ue(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function ue(t) {
  return t instanceof Node || t instanceof M(t).Node;
}
function I(t) {
  return t instanceof Element || t instanceof M(t).Element;
}
function q(t) {
  return t instanceof HTMLElement || t instanceof M(t).HTMLElement;
}
function Be(t) {
  return typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof M(t).ShadowRoot;
}
function Tt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = F(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function Sr(t) {
  return ["table", "td", "th"].includes(ot(t));
}
function pe(t) {
  const e = de(), n = F(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : false) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !e && (n.filter ? n.filter !== "none" : false) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function kr(t) {
  let e = J(t);
  for (; q(e) && !ht(e); ) {
    if (pe(e))
      return e;
    e = J(e);
  }
  return null;
}
function de() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function ht(t) {
  return ["html", "body", "#document"].includes(ot(t));
}
function F(t) {
  return M(t).getComputedStyle(t);
}
function Yt(t) {
  return I(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function J(t) {
  if (ot(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Be(t) && t.host || // Fallback.
    Z(t)
  );
  return Be(e) ? e.host : e;
}
function Ge(t) {
  const e = J(t);
  return ht(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : q(e) && Tt(e) ? e : Ge(e);
}
function _t(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const o = Ge(t), i2 = o === ((r = t.ownerDocument) == null ? void 0 : r.body), a = M(o);
  return i2 ? e.concat(a, a.visualViewport || [], Tt(o) ? o : [], a.frameElement && n ? _t(a.frameElement) : []) : e.concat(o, _t(o, [], n));
}
function Ke(t) {
  const e = F(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = q(t), i2 = o ? t.offsetWidth : n, a = o ? t.offsetHeight : r, s2 = Vt(n) !== i2 || Vt(r) !== a;
  return s2 && (n = i2, r = a), {
    width: n,
    height: r,
    $: s2
  };
}
function Je(t) {
  return I(t) ? t : t.contextElement;
}
function ft(t) {
  const e = Je(t);
  if (!q(e))
    return K(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i2
  } = Ke(e);
  let a = (i2 ? Vt(n.width) : n.width) / r, s2 = (i2 ? Vt(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s2 || !Number.isFinite(s2)) && (s2 = 1), {
    x: a,
    y: s2
  };
}
var Br = K(0);
function Qe(t) {
  const e = M(t);
  return !de() || !e.visualViewport ? Br : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function jr(t, e, n) {
  return e === void 0 && (e = false), !n || e && n !== M(t) ? false : e;
}
function Pt(t, e, n, r) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const o = t.getBoundingClientRect(), i2 = Je(t);
  let a = K(1);
  e && (r ? I(r) && (a = ft(r)) : a = ft(t));
  const s2 = jr(i2, n, r) ? Qe(i2) : K(0);
  let c = (o.left + s2.x) / a.x, f = (o.top + s2.y) / a.y, l2 = o.width / a.x, p2 = o.height / a.y;
  if (i2) {
    const h2 = M(i2), u = r && I(r) ? M(r) : r;
    let v = h2, d = v.frameElement;
    for (; d && r && u !== v; ) {
      const m2 = ft(d), x = d.getBoundingClientRect(), O = F(d), b = x.left + (d.clientLeft + parseFloat(O.paddingLeft)) * m2.x, y2 = x.top + (d.clientTop + parseFloat(O.paddingTop)) * m2.y;
      c *= m2.x, f *= m2.y, l2 *= m2.x, p2 *= m2.y, c += b, f += y2, v = M(d), d = v.frameElement;
    }
  }
  return Ht({
    width: l2,
    height: p2,
    x: c,
    y: f
  });
}
var Mr = [":popover-open", ":modal"];
function ve(t) {
  return Mr.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return false;
    }
  });
}
function Wr(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i2 = o === "fixed", a = Z(r), s2 = e ? ve(e.floating) : false;
  if (r === a || s2 && i2)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = K(1);
  const l2 = K(0), p2 = q(r);
  if ((p2 || !p2 && !i2) && ((ot(r) !== "body" || Tt(a)) && (c = Yt(r)), q(r))) {
    const h2 = Pt(r);
    f = ft(r), l2.x = h2.x + r.clientLeft, l2.y = h2.y + r.clientTop;
  }
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + l2.x,
    y: n.y * f.y - c.scrollTop * f.y + l2.y
  };
}
function Vr(t) {
  return Array.from(t.getClientRects());
}
function Ze(t) {
  return Pt(Z(t)).left + Yt(t).scrollLeft;
}
function Nr(t) {
  const e = Z(t), n = Yt(t), r = t.ownerDocument.body, o = lt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i2 = lt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Ze(t);
  const s2 = -n.scrollTop;
  return F(r).direction === "rtl" && (a += lt(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i2,
    x: a,
    y: s2
  };
}
function Hr(t, e) {
  const n = M(t), r = Z(t), o = n.visualViewport;
  let i2 = r.clientWidth, a = r.clientHeight, s2 = 0, c = 0;
  if (o) {
    i2 = o.width, a = o.height;
    const f = de();
    (!f || f && e === "fixed") && (s2 = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i2,
    height: a,
    x: s2,
    y: c
  };
}
function Fr(t, e) {
  const n = Pt(t, true, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i2 = q(t) ? ft(t) : K(1), a = t.clientWidth * i2.x, s2 = t.clientHeight * i2.y, c = o * i2.x, f = r * i2.y;
  return {
    width: a,
    height: s2,
    x: c,
    y: f
  };
}
function je(t, e, n) {
  let r;
  if (e === "viewport")
    r = Hr(t, n);
  else if (e === "document")
    r = Nr(Z(t));
  else if (I(e))
    r = Fr(e, n);
  else {
    const o = Qe(t);
    r = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return Ht(r);
}
function _e(t, e) {
  const n = J(t);
  return n === e || !I(n) || ht(n) ? false : F(n).position === "fixed" || _e(n, e);
}
function Xr(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = _t(t, [], false).filter((s2) => I(s2) && ot(s2) !== "body"), o = null;
  const i2 = F(t).position === "fixed";
  let a = i2 ? J(t) : t;
  for (; I(a) && !ht(a); ) {
    const s2 = F(a), c = pe(a);
    !c && s2.position === "fixed" && (o = null), (i2 ? !c && !o : !c && s2.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Tt(a) && !c && _e(t, a)) ? r = r.filter((l2) => l2 !== a) : o = s2, a = J(a);
  }
  return e.set(t, r), r;
}
function Yr(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const a = [...n === "clippingAncestors" ? ve(e) ? [] : Xr(e, this._c) : [].concat(n), r], s2 = a[0], c = a.reduce((f, l2) => {
    const p2 = je(e, l2, o);
    return f.top = lt(p2.top, f.top), f.right = Rt(p2.right, f.right), f.bottom = Rt(p2.bottom, f.bottom), f.left = lt(p2.left, f.left), f;
  }, je(e, s2, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ir(t) {
  const {
    width: e,
    height: n
  } = Ke(t);
  return {
    width: e,
    height: n
  };
}
function qr(t, e, n) {
  const r = q(e), o = Z(e), i2 = n === "fixed", a = Pt(t, true, i2, e);
  let s2 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = K(0);
  if (r || !r && !i2)
    if ((ot(e) !== "body" || Tt(o)) && (s2 = Yt(e)), r) {
      const p2 = Pt(e, true, i2, e);
      c.x = p2.x + e.clientLeft, c.y = p2.y + e.clientTop;
    } else
      o && (c.x = Ze(o));
  const f = a.left + s2.scrollLeft - c.x, l2 = a.top + s2.scrollTop - c.y;
  return {
    x: f,
    y: l2,
    width: a.width,
    height: a.height
  };
}
function Kt(t) {
  return F(t).position === "static";
}
function Me(t, e) {
  return !q(t) || F(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function tn(t, e) {
  const n = M(t);
  if (ve(t))
    return n;
  if (!q(t)) {
    let o = J(t);
    for (; o && !ht(o); ) {
      if (I(o) && !Kt(o))
        return o;
      o = J(o);
    }
    return n;
  }
  let r = Me(t, e);
  for (; r && Sr(r) && Kt(r); )
    r = Me(r, e);
  return r && ht(r) && Kt(r) && !pe(r) ? n : r || kr(t) || n;
}
var zr = async function(t) {
  const e = this.getOffsetParent || tn, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: qr(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ur(t) {
  return F(t).direction === "rtl";
}
var Gr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wr,
  getDocumentElement: Z,
  getClippingRect: Yr,
  getOffsetParent: tn,
  getElementRects: zr,
  getClientRects: Vr,
  getDimensions: Ir,
  getScale: ft,
  isElement: I,
  isRTL: Ur
};
var to = Lr;
var eo = Dr;
var Kr = $r;
var Jr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Gr,
    ...n
  }, i2 = {
    ...o.platform,
    _c: r
  };
  return Pr(t, e, {
    ...o,
    platform: i2
  });
};
function Qr(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function te(t) {
  if (Qr(t)) {
    const e = t.$el;
    return ue(e) && ot(e) === "#comment" ? null : e;
  }
  return t;
}
function no(t) {
  return {
    name: "arrow",
    options: t,
    fn(e) {
      const n = te(unref(t.element));
      return n == null ? {} : Kr({
        element: n,
        padding: t.padding
      }).fn(e);
    }
  };
}
function en(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function We(t, e) {
  const n = en(t);
  return Math.round(e * n) / n;
}
function ro(t, e, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = computed(() => {
    var g;
    return (g = unref(n.open)) != null ? g : true;
  }), i2 = computed(() => unref(n.middleware)), a = computed(() => {
    var g;
    return (g = unref(n.placement)) != null ? g : "bottom";
  }), s2 = computed(() => {
    var g;
    return (g = unref(n.strategy)) != null ? g : "absolute";
  }), c = computed(() => {
    var g;
    return (g = unref(n.transform)) != null ? g : true;
  }), f = computed(() => te(t.value)), l2 = computed(() => te(e.value)), p2 = ref(0), h2 = ref(0), u = ref(s2.value), v = ref(a.value), d = shallowRef({}), m2 = ref(false), x = computed(() => {
    const g = {
      position: u.value,
      left: "0",
      top: "0"
    };
    if (!l2.value)
      return g;
    const E = We(l2.value, p2.value), R = We(l2.value, h2.value);
    return c.value ? {
      ...g,
      transform: "translate(" + E + "px, " + R + "px)",
      ...en(l2.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: u.value,
      left: E + "px",
      top: R + "px"
    };
  });
  let O;
  function b() {
    f.value == null || l2.value == null || Jr(f.value, l2.value, {
      middleware: i2.value,
      placement: a.value,
      strategy: s2.value
    }).then((g) => {
      p2.value = g.x, h2.value = g.y, u.value = g.strategy, v.value = g.placement, d.value = g.middlewareData, m2.value = true;
    });
  }
  function y2() {
    typeof O == "function" && (O(), O = void 0);
  }
  function w() {
    if (y2(), r === void 0) {
      b();
      return;
    }
    if (f.value != null && l2.value != null) {
      O = r(f.value, l2.value, b);
      return;
    }
  }
  function A() {
    o.value || (m2.value = false);
  }
  return watch([i2, a, s2], b, {
    flush: "sync"
  }), watch([f, l2], w, {
    flush: "sync"
  }), watch(o, A, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(y2), {
    x: shallowReadonly(p2),
    y: shallowReadonly(h2),
    strategy: shallowReadonly(u),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(d),
    isPositioned: shallowReadonly(m2),
    floatingStyles: x,
    update: b
  };
}

// node_modules/.pnpm/yk-design-zds@1.0.0/node_modules/yk-design-zds/es/index.mjs
var Se2 = ["disabled"];
var Re2 = defineComponent({
  name: "YkButton",
  __name: "YkButton",
  props: {
    type: { default: "primary" },
    status: { default: "primary" },
    size: { default: "s" },
    shape: { default: "default" },
    long: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(t) {
    const o = t, e = computed(() => ({
      "yk-button": true,
      "yk-button--loading": o.loading,
      "yk-button--long": o.long,
      "yk-button--disabled": o.disabled || o.loading,
      [`yk-button--${o.status}`]: o.status,
      [`yk-button--${o.type}`]: o.type,
      [`yk-button--${o.size}`]: o.size,
      [`yk-button--${o.shape}`]: o.shape
    }));
    return (n, u) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(e.value),
      disabled: o.loading || o.disabled
    }, [
      createBaseVNode("div", {
        class: normalizeClass({ circle: o.loading })
      }, null, 2),
      renderSlot(n.$slots, "icon"),
      renderSlot(n.$slots, "default")
    ], 10, Se2));
  }
});
var Ye2 = $(Re2);
var Ie2 = {
  class: "yk-icon",
  "aria-hidden": "true"
};
var Pe2 = ["xlink:href", "fill"];
var ze2 = defineComponent({
  name: "YkIcon",
  __name: "YkIcon",
  props: {
    name: { default: "biyan" },
    color: { default: "black" }
  },
  setup(t) {
    const o = t;
    return (e, n) => (openBlock(), createElementBlock("svg", Ie2, [
      createBaseVNode("use", {
        "xlink:href": `#icon-${o.name}`,
        fill: o.color
      }, null, 8, Pe2)
    ]));
  }
});
var L = $(ze2);
var De2 = ["disabled"];
var Te2 = { class: "yk-switch__dot" };
var Me2 = defineComponent({
  name: "YkSwitch",
  __name: "switch",
  props: {
    modelValue: { type: [Boolean, String, Number] },
    size: { default: "s" },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean },
    checkedValue: { type: [Boolean, String, Number], default: true },
    unCheckedValue: { type: [Boolean, String, Number], default: false },
    checkedColor: { default: "#67c23a" },
    uncheckedColor: { default: "#eee" }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: o }) {
    const e = t, n = ref(e.modelValue);
    watch(
      () => e.modelValue,
      (f) => {
        n.value = f;
      },
      { deep: true }
    );
    const u = (f) => {
      c.value || (n.value ? n.value = e.unCheckedValue : n.value = e.checkedValue, r("update:modelValue", n.value, f), r("change", n.value, f));
    }, a = computed(() => n.value == e.checkedValue), c = computed(() => e.disabled || e.loading), s2 = computed(() => ({
      "yk-switch": true,
      "yk-switch--isChecked": a.value,
      "yk-switch--loading": e.loading,
      "yk-switch--disabled": e.disabled || e.loading,
      [`yk-switch--${e.size}`]: true
    })), i2 = computed(() => ({
      backgroundColor: !!n.value == !!e.checkedValue ? e.checkedColor : e.uncheckedColor
    })), r = o;
    return (f, d) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(s2.value),
      style: normalizeStyle(i2.value),
      type: "button",
      role: "switch",
      disabled: c.value,
      onClick: u
    }, [
      createBaseVNode("div", Te2, [
        createBaseVNode("div", {
          class: normalizeClass({ circle: e.loading })
        }, null, 2)
      ])
    ], 14, De2));
  }
});
var fe2 = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, u] of o)
    e[n] = u;
  return e;
};
var Ae = fe2(Me2, [["__scopeId", "data-v-2f1f4f57"]]);
var Le2 = $(Ae);
var Oe = "update:modelValue";
var Fe2 = "change";
var He2 = {
  [Oe]: (t) => t,
  [Fe2]: (t) => t
};
var Ue2 = (t, o) => {
  const e = inject("propsByRadioGroup", void 0), n = computed(() => !!e), u = computed(() => t.value == c.value), a = computed(
    () => (e == null ? void 0 : e.props.disabled) || t.disabled
  ), c = computed({
    get() {
      return n.value ? e == null ? void 0 : e.props.modelValue : t.modelValue;
    },
    set(s2) {
      n.value ? e == null || e.changeEvent(s2) : o("update:modelValue", s2);
    }
  });
  return { compVModel: c, isChecked: u, disabled: a };
};
var qe2 = ["value", "disabled"];
var Je2 = defineComponent({
  name: "YkRadio",
  __name: "radio",
  props: {
    size: { default: "l" },
    value: { type: [Number, String, Boolean] },
    disabled: { type: Boolean, default: false },
    modelValue: { type: [Number, String, Boolean] },
    name: {},
    border: { type: Boolean },
    type: { default: "radio" },
    solid: { type: Boolean, default: false }
  },
  emits: He2,
  setup(t, { emit: o }) {
    const e = j("radio"), n = o, u = t, { compVModel: a, disabled: c, isChecked: s2 } = Ue2(u, n);
    function i2() {
    }
    return (r, f) => (openBlock(), createElementBlock("label", {
      role: "radio",
      class: normalizeClass(unref(e)([], { disabled: unref(c), solid: r.solid }, { isChecked: unref(s2) }))
    }, [
      createBaseVNode("span", {
        class: normalizeClass(unref(e)("input", [], {}, { isChecked: unref(s2) }))
      }, [
        createBaseVNode("span", {
          class: normalizeClass(unref(e)("inner"))
        }, null, 2),
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": f[0] || (f[0] = (d) => isRef(a) ? a.value = d : null),
          value: u.value,
          disabled: unref(c),
          type: "radio",
          class: normalizeClass(unref(e)("original")),
          onChange: i2
        }, null, 42, qe2), [
          [vModelRadio, unref(a)]
        ])
      ], 2),
      createBaseVNode("span", {
        class: normalizeClass(unref(e)("label"))
      }, [
        renderSlot(r.$slots, "default", {}, void 0, true)
      ], 2)
    ], 2));
  }
});
var Ke2 = fe2(Je2, [["__scopeId", "data-v-124cbae6"]]);
var Qe2 = defineComponent({
  name: "YkRadioGroup",
  __name: "radio-group",
  props: {
    modelValue: { type: [Number, String, Boolean] },
    type: {},
    solid: { type: Boolean },
    disabled: { type: Boolean, default: false }
  },
  emits: {
    "update:modelValue": (t) => t
  },
  setup(t, { emit: o }) {
    const e = t, n = o;
    return provide("propsByRadioGroup", {
      props: e,
      changeEvent: (a) => {
        n("update:modelValue", a);
      }
    }), (a, c) => (openBlock(), createElementBlock("div", null, [
      renderSlot(a.$slots, "default")
    ]));
  }
});
var We2 = $(Ke2);
$(Qe2);
var Xe2 = {
  "update:modelValue": (t) => t
};
var Ze2 = (t, o) => {
  const e = inject(
    "propsByCheckboxGroup",
    void 0
  ), n = computed(() => !!e), u = computed({
    get() {
      var s2;
      return n.value ? (s2 = e == null ? void 0 : e.props.modelValue) == null ? void 0 : s2.includes(t.value) : t.modelValue;
    },
    set(s2) {
      if (!n.value)
        o("update:modelValue", s2);
      else {
        const i2 = [...e == null ? void 0 : e.props.modelValue];
        if (s2)
          i2.push(t.value);
        else {
          const f = i2.findIndex((d) => d == t.value);
          i2.splice(f, 1);
        }
        const r = new Set(i2);
        e == null || e.changeEvent([...r]);
      }
    }
  }), a = computed(() => {
    var s2;
    return n.value ? (s2 = e == null ? void 0 : e.props.modelValue) == null ? void 0 : s2.includes(t.value) : !!t.modelValue;
  }), c = computed(() => n != null && n.value ? e == null ? void 0 : e.props.disabled : t.disabled);
  return { compValue: u, isChecked: a, disabled: c };
};
var Ge2 = ["checked"];
var je2 = defineComponent({
  __name: "checkbox",
  props: {
    modelValue: { type: [Number, String, Boolean], default: false },
    disabled: { type: Boolean },
    indeterminate: { type: Boolean },
    value: {}
  },
  emits: Xe2,
  setup(t, { emit: o }) {
    const e = j("checkbox"), n = t, u = o, { compValue: a, isChecked: c, disabled: s2 } = Ze2(n, u);
    return (i2, r) => (openBlock(), createElementBlock("label", {
      role: "checkbox",
      class: normalizeClass(unref(e)([], {}, { isChecked: unref(c), disabled: unref(s2) }))
    }, [
      createBaseVNode("span", {
        class: normalizeClass(unref(e)("input", [], {}, { isChecked: unref(c), disabled: unref(s2) }))
      }, [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": r[0] || (r[0] = (f) => isRef(a) ? a.value = f : null),
          type: "checkbox",
          checked: unref(c),
          class: normalizeClass(unref(e)("original"))
        }, null, 10, Ge2), [
          [vModelCheckbox, unref(a)]
        ]),
        createBaseVNode("span", {
          class: normalizeClass(unref(e)("inner"))
        }, null, 2)
      ], 2),
      createBaseVNode("span", {
        class: normalizeClass(unref(e)("label"))
      }, "备选项1", 2)
    ], 2));
  }
});
var et = defineComponent({
  __name: "checkbox-group",
  props: {
    modelValue: {},
    type: {},
    solid: { type: Boolean },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const e = t, n = o;
    function u(a) {
      n("update:modelValue", a);
    }
    return provide("propsByCheckboxGroup", {
      props: e,
      changeEvent: u
    }), (a, c) => (openBlock(), createElementBlock("div", null, [
      renderSlot(a.$slots, "default")
    ]));
  }
});
var tt = $(je2);
$(et);
var ot2 = (t, o) => {
  const e = computed(() => t.disabled), n = computed({
    get() {
      return t.modelValue;
    },
    set(d) {
      o("input", d), o("update:modelValue", d);
    }
  });
  computed(() => t.clearable && !!n.value.length && !e.value);
  function u() {
    o("update:modelValue", ""), o("clear");
  }
  const a = ref(true);
  function c() {
    a.value = !a.value;
  }
  const s2 = computed(() => t.showPassword && a.value ? "password" : "text");
  function i2(d) {
    o("focus", d);
  }
  function r(d) {
    o("blur", d);
  }
  function f() {
    o("change", n.value);
  }
  return {
    isDisabled: e,
    compValue: n,
    clearValue: u,
    passwordVisible: a,
    isPassword: s2,
    togglePasswordVisible: c,
    handleFocus: i2,
    handleBlur: r,
    handleChange: f
  };
};
var me = (t) => {
  const o = computed(() => t.getLastBottomOffset()), e = computed(() => (t.offset || 0) + o.value), n = computed(() => e.value + t.boxHeight.value);
  return {
    topOffset: e,
    bottomOffset: n
  };
};
function nt2(t, { afterFocus: o, beforeBlur: e, afterBlur: n } = {}) {
  const u = getCurrentInstance(), { emit: a } = u, c = ref(), s2 = ref(false), i2 = (d) => {
    s2.value || (s2.value = true, a("focus", d), o == null || o());
  }, r = (d) => {
    e instanceof Function && e(d) || (s2.value = false, a("blur", d), n == null || n());
  }, f = () => {
    var d;
    (d = t.value) == null || d.focus();
  };
  return onMounted(() => {
    var d;
    (d = c.value) == null || d.addEventListener("click", f);
  }), {
    wrapperRef: c,
    isFocus: s2,
    handleFocus: i2,
    handleBlur: r
  };
}
var st = {
  key: 0,
  class: "yk-input-group__prepend"
};
var lt2 = ["type", "placeholder", "readonly"];
var at = { class: "yk-input__suffix-inner" };
var ct = {
  key: 3,
  class: "yk-input-group__append"
};
var it = defineComponent({
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
    const n = j("input"), u = t, a = e, {
      isDisabled: c,
      compValue: s2,
      clearValue: i2,
      passwordVisible: r,
      isPassword: f,
      togglePasswordVisible: d,
      // handleFocus,
      // handleBlur,
      handleChange: w
    } = ot2(u, a), $2 = shallowRef(), V2 = shallowRef(), y2 = computed(() => $2.value || V2.value), { wrapperRef: N2, isFocus: b, handleFocus: D, handleBlur: Q2 } = nt2(y2);
    return o({
      ref: $2
    }), (k, R) => {
      const W2 = resolveComponent("YkIcon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(n)(
            [],
            { prefix: !!k.$slots.prefix, suffix: !!k.$slots.suffix },
            {
              disabled: unref(c),
              "yk-input-group": !!k.$slots.prepend || !!k.$slots.append,
              "yk-input-group--prepend": !!k.$slots.prepend,
              "yk-input-group--append": !!k.$slots.append
            }
          )
        ]),
        ref_key: "wrapperRef",
        ref: N2
      }, [
        k.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          k.$slots.prepend ? (openBlock(), createElementBlock("div", st, [
            renderSlot(k.$slots, "prepend")
          ])) : createCommentVNode("", true),
          withDirectives(createBaseVNode("input", {
            ref_key: "inputRef",
            ref: $2,
            type: unref(f),
            "onUpdate:modelValue": R[0] || (R[0] = (Y2) => isRef(s2) ? s2.value = Y2 : null),
            class: normalizeClass([unref(n)("inner")]),
            placeholder: u.placeholder,
            onFocus: R[1] || (R[1] = //@ts-ignore
            (...Y2) => unref(D) && unref(D)(...Y2)),
            onBlur: R[2] || (R[2] = //@ts-ignore
            (...Y2) => unref(Q2) && unref(Q2)(...Y2)),
            onChange: R[3] || (R[3] = //@ts-ignore
            (...Y2) => unref(w) && unref(w)(...Y2)),
            readonly: u.readonly
          }, null, 42, lt2), [
            [vModelDynamic, unref(s2)]
          ]),
          k.$slots.prefix ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(unref(n)("prefix"))
          }, [
            createBaseVNode("span", null, [
              renderSlot(k.$slots, "prefix")
            ])
          ], 2)) : createCommentVNode("", true),
          k.$slots.suffix || k.clearable || k.showPassword ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass(unref(n)("suffix"))
          }, [
            createBaseVNode("span", at, [
              renderSlot(k.$slots, "suffix"),
              unref(s2).length && k.clearable ? (openBlock(), createBlock(W2, {
                key: 0,
                name: "cha_1",
                color: "#c0c4cc",
                onClick: unref(i2)
              }, null, 8, ["onClick"])) : createCommentVNode("", true),
              unref(r) && k.showPassword ? (openBlock(), createBlock(W2, {
                key: 1,
                name: "yanjing",
                color: "#c0c4cc",
                onClick: unref(d)
              }, null, 8, ["onClick"])) : createCommentVNode("", true),
              !unref(r) && k.showPassword ? (openBlock(), createBlock(W2, {
                key: 2,
                name: "biyan",
                color: "#c0c4cc",
                onClick: unref(d)
              }, null, 8, ["onClick"])) : createCommentVNode("", true)
            ])
          ], 2)) : createCommentVNode("", true),
          k.$slots.append ? (openBlock(), createElementBlock("div", ct, [
            renderSlot(k.$slots, "append")
          ])) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
      ], 2);
    };
  }
});
var ut2 = $(it);
var rt2 = (t, o) => {
  const e = ref(false), n = ref(""), u = computed({
    get() {
      return n.value;
    },
    set(c) {
      n.value = c;
    }
  });
  return {
    show: e,
    changeShow: () => {
      e.value = !e.value;
    },
    compValue: u
  };
};
var dt2 = { class: "yk-scrollbar" };
var pt2 = defineComponent({
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
    const e = j("select");
    ref("");
    const n = t, u = o, { show: a, changeShow: c, compValue: s2 } = rt2(), i2 = ref();
    function r() {
      c(), i2.value.hide();
    }
    function f(w) {
      u("update:modelValue", w);
    }
    function d(w) {
      s2.value = w;
    }
    return provide(
      "selectProvide",
      reactive({
        value: toRef(n, "modelValue"),
        changeValue: f,
        changeCompValue: d
      })
    ), (w, $2) => {
      const V2 = resolveComponent("YkIcon"), y2 = resolveComponent("yk-input"), N2 = resolveComponent("YkPopover");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(e)({}, [], { "is-expanded": unref(a) })),
        onClick: $2[1] || ($2[1] = //@ts-ignore
        (...b) => unref(c) && unref(c)(...b))
      }, [
        createVNode(N2, {
          width: "240px",
          ref_key: "popoverRef",
          ref: i2,
          trigger: "click",
          placement: "bottom-end"
        }, {
          reference: withCtx(() => [
            createVNode(y2, {
              onBlur: r,
              placeholder: n.placeholder,
              modelValue: unref(s2),
              "onUpdate:modelValue": $2[0] || ($2[0] = (b) => isRef(s2) ? s2.value = b : null),
              readonly: ""
            }, {
              suffix: withCtx(() => [
                createVNode(V2, {
                  class: normalizeClass({ "is-reverse": unref(a), "yk-icon__cart": true }),
                  color: "#c0c4cc",
                  name: "jiantou-xiangxia"
                }, null, 8, ["class"])
              ]),
              _: 1
            }, 8, ["placeholder", "modelValue"])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", dt2, [
              renderSlot(w.$slots, "default")
            ])
          ]),
          _: 3
        }, 512)
      ], 2);
    };
  }
});
var ft2 = defineComponent({
  __name: "option",
  props: {
    label: {},
    value: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const e = t, n = inject("selectProvide");
    function u() {
      n == null || n.changeValue(e.value), n == null || n.changeCompValue(e.label);
    }
    return (a, c) => {
      var s2;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("li", {
          class: normalizeClass(["yk-select-dropdown__item", { select: e.value == ((s2 = unref(n)) == null ? void 0 : s2.value) }]),
          onClick: u
        }, toDisplayString(e.label), 3)
      ]);
    };
  }
});
var mt2 = $(pt2);
var vt2 = $(ft2);
var ht2 = { name: "content" };
var yt = createBaseVNode("div", {
  id: "arrow",
  "data-popper-arrow": ""
}, null, -1);
var gt = defineComponent({
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
    const e = j("tooltip"), n = ref(), u = ref();
    let a = null;
    const c = t, s2 = o, i2 = ref(false);
    function r() {
      i2.value = true, s2("visible-change", i2.value);
    }
    function f() {
      i2.value = false, s2("visible-change", i2.value), console.log("value", i2.value);
    }
    watch(
      i2,
      (V2) => {
        if (V2)
          if (u.value && n.value) {
            const y2 = document.querySelector("#arrow");
            a = _r(u.value, n.value, {
              placement: c.placement,
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
                    element: y2
                  }
                }
              ]
            });
          } else
            a == null || a.destroy();
      },
      { flush: "post" }
    );
    const d = reactive({}), w = reactive({}), $2 = () => {
      c.trigger === "hover" ? (d.mouseenter = r, w.mouseleave = f) : d.click = () => {
      };
    };
    return c.manual || $2(), (V2, y2) => (openBlock(), createElementBlock("div", mergeProps({
      class: unref(e)(),
      ref: "popperContainNode"
    }, toHandlers(w, true)), [
      createBaseVNode("div", mergeProps({
        class: unref(e)("trigger"),
        ref_key: "triggerNode",
        ref: u
      }, toHandlers(d, true)), [
        renderSlot(V2.$slots, "default")
      ], 16),
      i2.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "popperNode",
        ref: n
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref(e)("popper"))
        }, [
          createBaseVNode("div", ht2, toDisplayString(V2.content), 1)
        ], 2),
        yt
      ], 512)) : createCommentVNode("", true)
    ], 16));
  }
});
var kt = $(gt);
var _t2 = ["x-placement"];
var bt2 = ["x-placement"];
var wt = ["x-placement"];
var $t2 = defineComponent({
  __name: "popover",
  props: {
    title: {},
    content: {},
    width: { default: "150px" },
    placement: { default: "top" },
    trigger: { default: "hover" }
  },
  emits: ["show", "hide"],
  setup(t, { expose: o, emit: e }) {
    const n = ref(), u = ref(), a = ref(), c = t;
    useSlots();
    const s2 = e, i2 = ref(false), r = reactive({});
    function f() {
      c.trigger == "hover" ? (r.mouseover = d, r.mouseleave = w) : c.trigger == "click" ? r.click = () => {
        i2.value = !i2.value, i2.value ? s2("show") : s2("hide");
      } : r.click = (y2) => {
        const N2 = y2.target;
        n.value.contains(N2) && (i2.value = !i2.value), i2.value ? s2("show") : s2("hide");
      };
    }
    f();
    function d() {
      i2.value = true, s2("show");
    }
    function w() {
      i2.value = false, s2("hide");
    }
    const { floatingStyles: $2, middlewareData: V2 } = ro(n, u, {
      placement: c.placement,
      middleware: [to(0), eo(), no({ element: a })]
    });
    return watch(
      V2,
      (y2) => {
        a.value.style.left = y2.arrow.x + "px";
      },
      { deep: true }
    ), o({
      show() {
        i2.value = true;
      },
      hide() {
        i2.value = false;
      }
    }), (y2, N2) => (openBlock(), createElementBlock("div", mergeProps({
      class: "main",
      "x-placement": c.placement
    }, toHandlers(r, true)), [
      createBaseVNode("div", {
        "data-reference": "reference",
        ref_key: "reference",
        ref: n
      }, [
        renderSlot(y2.$slots, "reference")
      ], 512),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            i2.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "yk-popper",
              ref_key: "floating",
              ref: u,
              style: normalizeStyle(unref($2))
            }, [
              createBaseVNode("div", {
                ref_key: "floatingArrow",
                ref: a,
                class: "arrow",
                "x-placement": c.placement,
                style: {
                  position: "absolute"
                }
              }, null, 8, bt2),
              createBaseVNode("div", {
                class: "content",
                "x-placement": c.placement,
                style: normalizeStyle({ width: c.width })
              }, [
                renderSlot(y2.$slots, "default")
              ], 12, wt)
            ], 4)) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]))
    ], 16, _t2));
  }
});
var Vt2 = $($t2);
var Ct2 = defineComponent({
  name: "YkMessage",
  __name: "message",
  props: {
    message: {},
    type: { default: "success" },
    icon: {},
    duration: { default: 3e3 },
    showClose: { type: Boolean, default: false },
    offset: { default: 10 },
    zIndex: {},
    onDestroy: {},
    id: {},
    transitionName: { default: "fade-up" }
  },
  setup(t, { expose: o }) {
    const e = j("message"), n = t, u = computed(() => y[n.type].name), a = computed(() => y[n.type].color), c = computed(() => ({ top: d.value + "px" })), s2 = ref(false), i2 = ref(), r = ref(0);
    function f() {
      r.value = i2.value.getBoundingClientRect().height;
    }
    watch(s2, (y2) => {
      y2 || (r.value = -n.offset);
    });
    const { topOffset: d, bottomOffset: w } = me({
      offset: n.offset,
      boxHeight: r,
      getLastBottomOffset: Rt2.bind(n)
    });
    function $2() {
      n.duration !== 0 && setTimeout(V2, n.duration);
    }
    function V2() {
      s2.value = false;
    }
    return onMounted(() => {
      s2.value = true, $2();
    }), o({
      close: V2,
      bottomOffset: w
    }), (y2, N2) => (openBlock(), createBlock(Transition, {
      name: y2.transitionName,
      onEnter: f,
      onAfterLeave: N2[0] || (N2[0] = (b) => !s2.value && y2.onDestroy())
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          ref_key: "messageRef",
          ref: i2,
          class: normalizeClass({
            "yk-message": true,
            [`yk-message--${y2.type}`]: y2.type,
            "is-close": y2.showClose
          }),
          role: "alert",
          style: normalizeStyle(c.value)
        }, [
          createVNode(unref(L), {
            class: normalizeClass(unref(e)("icon")),
            name: u.value,
            color: a.value
          }, null, 8, ["class", "name", "color"]),
          createBaseVNode("div", {
            class: normalizeClass(unref(e)("content"))
          }, [
            renderSlot(y2.$slots, "default", {}, () => [
              y2.message ? (openBlock(), createBlock(unref(m), {
                key: 0,
                vNode: y2.message
              }, null, 8, ["vNode"])) : createCommentVNode("", true)
            ])
          ], 2),
          y2.showClose ? (openBlock(), createBlock(unref(L), {
            key: 0,
            class: "yk-icon__close",
            name: "cha",
            color: a.value,
            onClick: V2
          }, null, 8, ["color"])) : createCommentVNode("", true)
        ], 6), [
          [vShow, s2.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Bt = [
  "info",
  "success",
  "warning",
  "danger",
  "error"
];
var xt2 = 0;
var z2 = [];
var Nt2 = {
  type: "success",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
};
var ve2 = (t) => {
  const o = !t || isVNode(t) || typeof t == "string" ? { message: t } : t;
  return { ...Nt2, ...o };
};
var Et2 = (t) => {
  const o = `message_${xt2++}`, e = document.createElement("div"), u = {
    ...t,
    id: o,
    onDestroy: () => {
      const i2 = z2.findIndex((r) => r.id === o);
      i2 != -1 && (z2.splice(i2, 1), render(null, e));
    },
    zIndex: 200
  }, a = h(Ct2, u);
  nextTick(() => {
    render(a, e), document.body.appendChild(e.firstElementChild);
  });
  const c = {
    close: () => a.component.exposed.close()
  }, s2 = {
    props: u,
    id: o,
    vm: a.component,
    vnode: a,
    handler: c
  };
  return z2.push(s2), s2;
};
var G = (t = "") => {
  const o = ve2(t);
  return Et2(o).handler;
};
Bt.forEach((t) => {
  G[t] = (o) => {
    const e = ve2(o);
    return G({ ...e, type: t });
  };
});
function St(t) {
  z2.forEach((o) => {
    t ? o.props.type === t && o.handler.close() : o.handler.close();
  });
}
G.closeAll = St;
function Rt2() {
  var o;
  const t = z2.findIndex((e) => e.id == this.id);
  return t <= 0 ? 0 : (o = z2[t - 1].vnode.component) == null ? void 0 : o.exposed.bottomOffset.value;
}
var Yt2 = [
  "info",
  "success",
  "warning",
  "danger"
];
var It = defineComponent({
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
    showClose: { type: Boolean, default: true },
    offset: { default: 20 },
    transitionName: { default: "fade-up" },
    icon: {},
    onClick: {},
    onClose: {},
    onDestroy: {}
  },
  setup(t, { expose: o }) {
    const e = j("notification"), n = t, u = computed(() => n.type && y[n.type].name), a = computed(() => n.type && y[n.type].color), c = computed(() => ({ top: d.value + "px" })), s2 = ref(false), i2 = ref(), r = ref(0);
    function f() {
      r.value = i2.value.getBoundingClientRect().height;
    }
    watch(s2, (b) => {
      b || (r.value = -n.offset);
    });
    const { topOffset: d, bottomOffset: w } = me({
      offset: n.offset,
      boxHeight: r,
      getLastBottomOffset: Mt2.bind(n)
    });
    let $2;
    function V2() {
      n.duration !== 0 && ($2 = setTimeout(N2, n.duration));
    }
    function y2() {
      clearTimeout($2);
    }
    function N2() {
      s2.value = false, y2();
    }
    return onMounted(() => {
      s2.value = true, V2();
    }), o({
      close: N2,
      bottomOffset: w
    }), (b, D) => (openBlock(), createBlock(Transition, {
      name: b.transitionName,
      onEnter: f,
      onAfterLeave: D[0] || (D[0] = (Q2) => !s2.value && b.onDestroy())
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          ref_key: "notifyRef",
          ref: i2,
          class: normalizeClass({
            "yk-notification": true,
            [`yk-notification--${b.type}`]: b.type,
            "is-close": b.showClose
          }),
          role: "alert",
          style: normalizeStyle(c.value)
        }, [
          b.type ? (openBlock(), createBlock(unref(L), {
            key: 0,
            class: normalizeClass(unref(e)("icon")),
            name: u.value,
            color: a.value
          }, null, 8, ["class", "name", "color"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(unref(e)("text"))
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(e)("title"))
            }, toDisplayString(b.title), 3),
            createBaseVNode("div", {
              class: normalizeClass(unref(e)("content"))
            }, [
              renderSlot(b.$slots, "default", {}, () => [
                b.message ? (openBlock(), createBlock(unref(m), {
                  key: 0,
                  vNode: b.message
                }, null, 8, ["vNode"])) : createCommentVNode("", true)
              ])
            ], 2)
          ], 2),
          b.showClose ? (openBlock(), createBlock(unref(L), {
            key: 1,
            class: "yk-notification__icon--close",
            name: "cha",
            color: "#909399",
            onClick: N2
          })) : createCommentVNode("", true)
        ], 6), [
          [vShow, s2.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var M2 = shallowReactive([]);
var Pt2 = 0;
var zt = {
  type: "info",
  duration: 3e3,
  message: "123",
  offset: 20,
  transitionName: "fade-up",
  showClose: true
};
var he = (t) => {
  const o = !t || isVNode(t) || typeof t == "string" ? { message: t } : t;
  return { ...zt, ...o };
};
var Dt2 = (t) => {
  var i2;
  const o = `notification_${Pt2++}`, e = document.createElement("div"), u = {
    ...t,
    id: o,
    onDestroy: () => {
      const r = M2.findIndex((f) => f.id === o);
      r !== -1 && (M2.splice(r, 1), render(null, e));
    },
    zIndex: 200
  }, a = h(It, u);
  nextTick(() => {
    render(a, e), document.body.appendChild(e.firstElementChild);
  });
  const c = {
    close: (i2 = a.component) == null ? void 0 : i2.exposed.close()
  }, s2 = {
    id: o,
    props: u,
    vnode: a,
    vm: a.component,
    handler: c
  };
  return M2.push(s2), s2;
};
var j3 = (t) => {
  const o = he(t);
  return Dt2(o).handler;
};
Yt2.forEach((t) => {
  j3[t] = (o) => {
    const e = he(o);
    return j3({ ...e, type: t });
  };
});
function Tt2() {
}
j3.closeAll = Tt2;
function Mt2() {
  var o;
  const t = M2.findIndex((e) => e.id == this.id);
  return t <= 0 ? 0 : (o = M2[t - 1].vnode.component) == null ? void 0 : o.exposed.bottomOffset.value;
}
var ce2 = {
  YkButton: Ye2,
  YkIcon: L,
  YkSelect: mt2,
  YkSwitch: Le2,
  YkRadio: We2,
  YkCheckbox: tt,
  YkInput: ut2,
  YkOption: vt2,
  YkTooltip: kt,
  YkPopover: Vt2
};
var Ft2 = {
  install(t) {
    Object.keys(ce2).forEach((o) => {
      t.component(o, ce2[o]);
    });
  }
};
export {
  G as Message,
  j3 as Notification,
  Ye2 as YkButton,
  tt as YkCheckbox,
  L as YkIcon,
  ut2 as YkInput,
  vt2 as YkOption,
  Vt2 as YkPopover,
  We2 as YkRadio,
  mt2 as YkSelect,
  Le2 as YkSwitch,
  kt as YkTooltip,
  Ft2 as default
};
//# sourceMappingURL=yk-design-zds.js.map
