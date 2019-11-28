import Toast from './components/toast';
import Loading from './components/loading';
import Popup from './components/popup';
import Exception from './components/exception';

// 全局组件
const gobalComponents = {
  Toast,
  Loading,
  Exception
};

// 局部组件
const components = {
  Popup
};

// 注册全局组件
let gobal = {
  install(Vue, opts = {}) {
    if (install.installed) return;

    for (let key in gobalComponents) {
      let component = gobalComponents[key];
      Vue.prototype[`$${key}`] = component;
    }
  }
};

// 注册局部组件
let local = {
  install(Vue, opts = {}) {
    if (install.installed) return;

    for (let key in components) {
      let component = components[key];
      Vue.component(component.name, component);
    }
  }
};

const install = function(Vue, opts = {}) {
  gobal.install(Vue, opts);
  local.install(Vue, opts);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const version = '0.0.1';

export default {
  install,
  gobal,
  local,
  version,
  ...components
};
