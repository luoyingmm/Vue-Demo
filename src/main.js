import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from 'axios'
import { Button, Select, Radio, Container, Aside, Header, Main, Menu, MenuItem, MenuItemGroup, Submenu, Dropdown,DropdownItem,DropdownMenu,Row,Col,Card,Table,TableColumn,Tag,Breadcrumb,BreadcrumbItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.component(CollapseTransition.name, CollapseTransition)
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
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.prototype.$http = http

if (process.env.NODE_ENV === 'development') require('@/api/mock')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
