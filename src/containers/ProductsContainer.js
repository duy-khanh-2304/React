import React, { Component } from 'react';
import Products from './../component/Products.js';
import Product from './../component/Product.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addToCart,changeMessage} from './../actions/index.js';

class ProductsContainer extends Component {
    render() {
        var {products} = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts = (products)=>{
        var result = null;
        if(products.length > 0){
            result = products.map((product,index)=>{
                return <Product 
                        key = {index} 
                        product={product} 
                        onAddToCart = {this.props.onAddToCart}
                        onChangeMessage = {this.props.onChangeMessage}
                        />
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired,

        })
    ).isRequired
}

const stateMapToProps = (state) =>{
    return {
        products:state.products
    }
}

const dispatchMapToProps = (dispatch,props)=>{
    return {
        onAddToCart:(product)=>{
            dispatch(addToCart(product,1));
        },
        onChangeMessage:(message)=>{
            dispatch(changeMessage(message));
        }
    }
}


export default connect(stateMapToProps,dispatchMapToProps)(ProductsContainer);
