import * as types from './../constants/ActionType.js';
var data = JSON.parse(localStorage.getItem('cart'));
var initialState =  data ? data : [];

const cart = (state = initialState, action) => {

    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state,action.product);
            if(index !== -1){
                state[index].quantity += action.quantity;
            }else{
                state.push({
                    product : action.product,
                    quantity :action.quantity
                })
            }
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state,action.product);
            if(index !== -1){
                state.splice(index,1)
            }
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
};

var findProductInCart = (cart,product)=>{
    var index = -1;
    for(var i = 0; i < cart.length;i++){
        if(cart[i].product.id === product.id){
            index = i;
            break;
        }
    }
    return index;
}

export default cart;