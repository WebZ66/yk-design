const l = (t) => (t.install = (e) => {
  e.component(t.name, t);
}, t);
export {
  l as withInstall
};
