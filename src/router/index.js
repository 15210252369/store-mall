import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const home = () => import('views/home/home')
const profile = () => import('views/profile/profile')
const cart = () => import('views/cart/cart')
const shop = () => import('views/shop/shop')
const detail = () => import('views/detail/deatil')

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
            meta: {
                show: true
            }
        },
        {
            path: "/home",
            component: home,
            meta: {
                show: true
            }
        },
        {
            path: "/cart",
            component: cart,
            meta: {
                show: true
            }
        },
        {
            path: "/shop",
            component: shop,
            meta: {
                show: true
            }
        },
        {
            path: "/profile",
            component: profile,
            meta: {
                show: true
            }
        },
        {
            path: '/detail:iid',
            component: detail,
            meta: {
                show: false
            }
        }
    ],
    mode: 'history'
})

export default router