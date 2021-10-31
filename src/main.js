import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Button, Select, Radio, Container, Aside, Header, Main, Menu, MenuItem, MenuItemGroup, Submenu } from 'element-ui'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Radio.name, Radio)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
