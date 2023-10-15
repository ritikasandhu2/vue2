import {createWebHistory,createRouter} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue';
const routes=[
    {
        name:'HomeComponent',
        path:'/',
        component:HomeComponent 

    }
   

];
const router =createRouter({
   history:createWebHistory(),

});
export default router;
