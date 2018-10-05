import React, { Component } from 'react';
import store from '../../store';
import './style.scss';

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
        return(<div className="edit-product">
            <div className="title">Edit product</div>
            <div className="edit-container">
                <div className="edit-field">
                    <span>Edit product id: </span>
                    <input
                        value={this.state.product.id}
                    />
                </div>
                <div className="edit-field">
                    <span>Edit name: </span>
                    <input
                        value={this.state.product.name}
                        onChange={(event) => this.onProductPropertyChange(event, 'name')}
                    />
                </div>
                <div className="edit-field">
                    <span>Edit price: </span>
                    <input
                        value={this.state.product.description}
                        onChange={(event) => this.onProductPropertyChange(event, 'description')}
                    />
                </div>
                <div className="edit-field">
                    <span>Edit price: </span>
                    <input
                        value={this.state.product.price}
                        onChange={(event) => this.onProductPropertyChange(event, 'price')}
                    />
                </div>
                <div className="edit-field">
                    <span>Edit url of image: </span>
                    <input
                        value={this.state.product.url}
                        onChange={(event) => this.onProductPropertyChange(event, 'url')}
                    />
                </div>
            </div>
            <button className="edit-product" onClick={this.editProduct}>Edit product</button>
        </div>);
    }
}
