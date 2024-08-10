import { Y as a, a as n, b as i, c, d as e, e as k, f as r, g as m, h as p, i as Y } from "./components-0f652b12.js";
import { m as g, n as I } from "./components-0f652b12.js";
import "vue";
import "./vendor-e30ab939.js";
import "./index.mjs";
const t = {
  YkButton: a,
  YkIcon: n,
  YkSelect: i,
  YkSwitch: c,
  YkRadio: e,
  YkCheckbox: k,
  YkInput: r,
  YkOption: m,
  YkTooltip: p,
  YkPopconfirm: Y
}, h = {
  install(s) {
    Object.keys(t).forEach((o) => {
      s.component(o, t[o]);
    });
  }
};
export {
  g as Message,
  I as Notification,
  a as YkButton,
  k as YkCheckbox,
  n as YkIcon,
  r as YkInput,
  m as YkOption,
  Y as YkPopconfirm,
  e as YkRadio,
  i as YkSelect,
  c as YkSwitch,
  p as YkTooltip,
  h as default
};
