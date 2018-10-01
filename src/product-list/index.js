import React, { Component } from 'react';
import ProductComponent from '../product-component';

export default class ProductListComponent extends Component {
    render() {
        const products = this.props.products;
        
        return (
            <div className='product-list'>
                {(products || []).map((product, index) => {
                    return <ProductComponent product={product} key={index} />
                })}
            </div>
        )
    }
}