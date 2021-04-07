import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/index'
import Details from '../components/details/index'
import My from '../components/my/index'
import Recomdetails from "../components/home/recommended/recomdetails";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            component: Home
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/Details',
            name: 'Details',
            component: Details,
            meta: {
                title: '详情'
            }
        },
        {
            path: '/My',
            name: 'My',
            component: My,
            meta: {
                title: '我的'
            }
        },
        {
            path:'/Recomdetails',
            name:'Recomdetails',
            component:Recomdetails
        }

    ]
})
