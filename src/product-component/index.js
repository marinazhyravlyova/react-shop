import React, { Component } from 'react';

export default class ProductComponent extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className='product'>
                {Object.keys(product).map((productPropertyKey, index) => {
                    return (
                        <div key={index}>
                            <span className="product-property-name">{productPropertyKey}: </span>
                            <span className="product-property-value">{product[productPropertyKey]}</span>
                        </div>
                    );
                })}
                <button className="delete-product" onClick={this.props.onDeleteProduct}>Delete product</button>
                <button className="change-product" onClick={this.props.onClickProduct}>Change product</button>
            </div>
        );
    }
}