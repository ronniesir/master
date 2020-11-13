import Vue from 'vue'
import App from './App.vue'
import router from './router';
Vue.config.productionTip = false


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import NoContent from '@/components/NoContent';
window.commonComponent = { NoContent }


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

import { registerMicroApps } from "qiankun";

let apps = [
  {
    name: 'sub-app-1',
    entry: '//localhost:9090',
    container: '#contentView',
    activeRule:['/subApp1','/mulApp'],
    props: { params: { title: '我是主应用props传过来的标题' } }
  },
  {
    name: 'sub-app-2',
    entry: '//localhost:7070',
    container: '#contentView2',
    activeRule:['/sub2','/mulApp'],
    props: {}
  }
]

registerMicroApps(apps, {
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  beforeUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: red;', app.name);
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: red;', app.name);
    },
  ],
});
// start();
