import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCounter(state, oldPrice) {
            oldPrice.count++
        },
        addToCart(state, product) {
            state.cartList.push(product)
        }
    },
    actions: {
        addCart(context, product) {
            let oldPrice = context.state.cartList.find(item => item.iid === product.iid)

            if (oldPrice) {
                context.commit('addCounter', oldPrice)
            } else {
                product.count = 1
                context.commit('addToCart', product)
            }
        }
    }
})
export default store