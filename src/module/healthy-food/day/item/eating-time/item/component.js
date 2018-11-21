import React, { Component } from 'react';
import ProductDescriptionList from './product-description/list/component';
import NewProductDescriptionForm from "./product-description/new/component";

export default class EatingTimeItem extends Component {
    render() {
        const {
            eatingTime,
            allProducts,
            onProductAdd,
            onProductChange,
            onProductDelete,
        } = this.props;

        return (
            <div className='selected-eating-time'>
                <div className='eating-time-product-list'>
                    <ProductDescriptionList
                        products={eatingTime.productsDescription}
                        onProductChange={onProductChange}
                        onProductDelete={onProductDelete}
                    />
                    <NewProductDescriptionForm
                        allProducts={allProducts}
                        onProductAdd={onProductAdd}
                    />
                </div>
            </div>
        );
    }
}