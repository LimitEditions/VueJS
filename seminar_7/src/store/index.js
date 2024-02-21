import { createStore } from "vuex";
export default createStore ({
    state:{
        count: 0,
        cartItems: [],
        data: [],
    },
    getters:{
        cartItems(state){
            return state.cartItems;
        },
        totalItems(state){
            return state.cartItems.length;
        },
        totalPrice(state) {
            return state.cartItems.reduce((a, b) => a + b.price, 0)
        }
    },
    mutations:{
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        addItem(state, item) {
            state.cartItems.push(item);
        },
        setData(state, data) {
            state.data = data;
        }
    },
    actions:{
        addItemToCart(context, item){
            context.commit('addItem', item)
        },
        getData(context){
            setTimeout(() =>{
                const dataFromServer = ['data1', 'data2', 'data3'];
                context.commit('setData', dataFromServer );
            }, 1000)
        }
    },
    modules:{

    },
})