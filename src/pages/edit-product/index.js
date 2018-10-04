import React, { Component } from 'react';
import store from '../../store';

export default class EditProductComponent extends Component {
    constructor(props) {
        super(props);
        const { productId } = props.match.params;
        const { products } = store.getState();
        const product = products.find(product => product.id == productId);
        
        this.state = {
            product,
        };

        this.onProductPropertyChange = this.onProductPropertyChange.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            product: {...props.product}
        });
    }

    onProductPropertyChange(event, propertyName) {
        const value = event.target.value;

        this.setState({
            product: {
                ...this.state.product,
                [propertyName]: value,
            },
        });
    }

    editProduct() {
        const selectedProduct = this.state.product;
        const { products } = store.getState();
        const updatedProducts = products.map(product => {
            if (product.id === selectedProduct.id) {
                return selectedProduct;
            }
            return {
                ...product
            };
        });
        store.setState({ products: updatedProducts });
    }

    render() {
        return(<div>
            <span>Edit product id: </span>
            <input
                value={this.state.product.id}
            />
            <span>Edit product name: </span>
            <input
                value={this.state.product.name}
                onChange={(event) => this.onProductPropertyChange(event, 'name')}
            />
            <span>Edit product price: </span>
            <input
                value={this.state.product.price}
                onChange={(event) => this.onProductPropertyChange(event, 'price')}
            />
            <button onClick={this.editProduct}>Edit product</button>
        </div>);
    }
}
