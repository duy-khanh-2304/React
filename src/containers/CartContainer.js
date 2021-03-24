import React, { Component } from 'react';
import Cart from './../component/Cart.js';
import CartItem from './../component/CartItem.js';
import CartResult from './../component/CartResult.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as Message from './../constants/Message.js';
import {changeMessage, deleteProductInCart} from './../actions/index.js';

class CartContainer extends Component {
    render() {
        var {cart} = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalPrice(cart)}  
            </Cart>
        );
    }
    showCartItem= (cart)=>{
        var result = Message.MSG_CART_EMPTY;
        if(cart.length > 0){
            result = cart.map((item,index)=>{
                return <CartItem key = {index}
                         item = {item}  
                        onDeleteInCart = {this.props.onDeleteInCart}
                        onChangeMessage={this.props.onChangeMessage}
                        />
            })
        }
        return result;
    }
    showTotalPrice= (cart)=>{
        var result = null;
        if(cart.length > 0){
            return (
                <CartResult cart={cart}/>
            )
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product:PropTypes.shape({
                id:PropTypes.number.isRequired,
                name:PropTypes.string.isRequired,
                image:PropTypes.string.isRequired,
                description:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                inventory:PropTypes.number.isRequired,
                rating:PropTypes.number.isRequired,
            }).isRequired,
            quantity:PropTypes.number.isRequired,

        })
    ).isRequired
}

const stateMapToProps = (state) =>{
    return {
        cart:state.cart
    }
}

const dispatchMapTpProps = (dispatch,props)=>{
    return {
        onDeleteInCart: (product)=>{
            dispatch(deleteProductInCart(product))
        },
        onChangeMessage:(message)=>{
            dispatch(changeMessage(message));
        }
    }
}

export default connect(stateMapToProps, dispatchMapTpProps)(CartContainer);
