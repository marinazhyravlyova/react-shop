import React, { Component } from 'react';

export default class AddProductComponent extends Component{
    constructor() {
        super();
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
        this.props.addProduct({ ...this.state });
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
