import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const home = () => import('views/home/home')
const profile = () => import('views/profile/profile')
const cart = () => import('views/cart/cart')
const shop = () => import('views/shop/shop')

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: "/home",
            component: home
        },
        {
            path: "/cart",
            component: cart
        },
        {
            path: "/shop",
            component: shop
        },
        {
            path: "/profile",
            component: profile
        }
    ],
    mode:'history'
})

export default router