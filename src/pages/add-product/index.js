import React, { Component } from 'react';
import store from "../../store";

export default class AddProductComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
        };
        this.onProductPropertyChange = this.onProductPropertyChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    onProductPropertyChange(event, propertyName) {
        const value = event.target.value;

        this.setState({
            [propertyName]: value,
        });
    }

    addProduct(){
        const { products } = store.getState();
        const productsWithNewProduct = [...products, this.state];
        
        store.setState({ products: productsWithNewProduct });
    }
    
    render() {
        return(<div>
            <span>Product id: </span>
            <input
                value={this.state.id}
                onChange={(event) => this.onProductPropertyChange(event, 'id')}
            />
            <span>Product name: </span>
            <input
                value={this.state.name}
                onChange={(event) => this.onProductPropertyChange(event, 'name')}
            />
            <span>Product price: </span>
            <input
                value={this.state.price}
                onChange={(event) => this.onProductPropertyChange(event, 'price')}
            />
            <button onClick={this.addProduct}>Add product</button>
        </div>);
    }
}
