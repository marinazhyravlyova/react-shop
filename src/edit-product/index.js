import React, { Component } from 'react';

export default class EditProductComponent extends Component {
    constructor() {
        super();
        
        this.state = {
            product: {
                id: '',
                name: '',
                price: '',
            }
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
        this.props.editProduct(this.state.product);
    }

    render() {
        return(<div>
            <span>Edit product id: </span>
            <input
                value={this.props.product.id}
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
