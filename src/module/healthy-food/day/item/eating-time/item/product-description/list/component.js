import React, { Component, Fragment } from 'react';
import ProductItem from '../item/component';

export default class ProductListComponent extends Component {
    render() {
        const {
            products,
            onProductChange,
            onProductDelete,
        } = this.props;

        return (
            <Fragment>
                {(products || []).map((productDescription, index) => (
                    <ProductItem
                        key={index}
                        productDescription={productDescription}
                        onProductChange={onProductChange}
                        onProductDelete={onProductDelete}
                    />
                ))}
            </Fragment>
        );
    }
}