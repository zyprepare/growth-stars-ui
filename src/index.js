import Toast from "./components/toast";
import Loading from "./components/loading";
import Popup from "./components/popup";
import Exception from "./components/exception";

// 全局组件
const gobalComponents = {
  Toast,
  Loading,
  Exception
};

// 普通组件
const components = {
  Popup
};

const install = function(Vue, opts = {}) {
  if (install.installed) return;

  // 注册全局组件
  for (let key in gobalComponents) {
    let component = gobalComponents[key];
    Vue.prototype[`$${key}`] = component;
  }

  // 注册普通组件
  for (let key in components) {
    let component = components[key];
    Vue.component(component.name, component);
  }
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const version = "0.0.1";

export default {
  install,
  version,
  ...components
};
