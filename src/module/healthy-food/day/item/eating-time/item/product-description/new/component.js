import React, { Component } from 'react';
import Select from 'react-select';

export default class NewProductForm extends Component {
    state = {
        product: null,
        productWeight: null,
    };

    onProductIdChange = (product) => this.setState({ product });

    onProductWeightChange = (event) => {
        const productWeight = event.target.value;
        
        this.setState({ productWeight });
    };

    onProductAdd = () => {
        const { onProductAdd } = this.props;
        const { product, productWeight } = this.state;

        onProductAdd({
            product: { id: product.value },
            weight: productWeight,
        });
    };
    
    render() {
        const {
            allProducts,
        } = this.props;
        const { product, productWeight } = this.state;
        
        return (
            <div className='new eating-time-product-item'>
                <Select
                    className='select-product'
                    value={product}
                    isSearchable
                    onChange={this.onProductIdChange}
                    options={(allProducts || []).map(({id, name}) => ({value: id, label: name}))}
                />
                <input
                    value={productWeight}
                    onChange={this.onProductWeightChange}
                />
                <button
                    onClick={this.onProductAdd}
                >
                    Add new product
                </button>
            </div>
        );
    }
}