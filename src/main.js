import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import HomeComponent from './components/HomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'

import HomeBodyComponent from './components/HomeBodyComponent.vue'
import RegistrationComponent from './components/RegistrationComponent.vue'
Vue.use(VueRouter);
const routes=[
{path:'/',component:HomeComponent},
{name:"About",path:"/AboutUs",component:AboutComponent},
{name:"HomeBodyComponent",path:"/Login",component:HomeBodyComponent},
{name:"RegistrationComponent",path:"/Registration",component:RegistrationComponent}
]
const router=new VueRouter({
    routes})



// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
 Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
  vuetify,
   router:router,
  render: h => h(App)
}).$mount('#app')
