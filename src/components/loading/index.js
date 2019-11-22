import Vue from 'vue';
import Loading from './loading.vue';

function getInstance(props) {
  const Instance = new Vue({
    render(h) {
      return h(Loading, {
        props
      });
    }
  });

  return Instance;
}

let instance = null;

const show = props => {
  if (!instance) {
    instance = getInstance(props);

    let div = document.createElement('div');
    instance.$mount(document.body.appendChild(div));
  }

  instance.$children[0].show();
};

const hide = () => {
  instance.$children[0].hide();
};

export default { show, hide };
