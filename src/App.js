import React, { Component } from 'react';
import Header from './component/Header.js';
import ProductsContainer from './containers/ProductsContainer.js';
import MessageContainer from './containers/MessageContainer.js';
import CartContainer from './containers/CartContainer.js';
import Footer from './component/Footer.js';
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main id="mainContainer">
                    <div className="container">

                        <ProductsContainer/>

                        <MessageContainer/>
                        
                        <CartContainer/>
                    </div>
                </main>

                <Footer/>
                
            </div>
        );
    }
}



export default App;
