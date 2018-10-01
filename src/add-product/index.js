import React, { Component } from 'react';

export default class AddProductComponent extends Component{

    constructor() {
        super();
        this.state = {
            productId: '',
            productName: '',
            productPrice: '',
        };
        this.onProductIdChange = this.onProductIdChange.bind(this);
        this.onProductNameChange = this.onProductNameChange.bind(this);
        this.onProductPriceChange = this.onProductPriceChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    onProductIdChange(event) {
        const value = event.target.value;
        this.setState({
            productId: value,
        });
    }

    onProductNameChange(event) {
        const value = event.target.value;
        this.setState({
            productName: value,
        });
    }

    onProductPriceChange(event) {
        const value = event.target.value;
        this.setState({
            productPrice: value,
        });
    }

    addProduct(){
        const { productId, productName, productPrice } = this.state;
        this.props.addProduct({ productId, productName, productPrice });
    }

    render() {
        return(<div>
            <span>Product id: </span><input value={this.state.productId} onChange={this.onProductIdChange}/>
            <span>Product name: </span><input value={this.state.productName} onChange={this.onProductNameChange}/>
            <span>Product price: </span><input value={this.state.productPrice} onChange={this.onProductPriceChange}/>
            <button onClick={this.addProduct}>Add product</button>
        </div>);
    }
}
