import { createStore } from "vuex";
export default createStore ({
    state:{
        title: 'Minimal Look Bedrooms',
        description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        description2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
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