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
            </div>
        );
    }
}