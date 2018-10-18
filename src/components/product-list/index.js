import React, {Component} from 'react';
import ProductComponent from '../product-component';
import './style.scss';

export default class ProductListComponent extends Component {
    render() {
        const {products, onDeleteProduct, onClickProduct, addProductIdToBasket} = this.props;

        return (
            <div className='product-list'>
                {(products || []).map((product, index) => (
                        <ProductComponent
                            product={product}
                            onDeleteProduct={() => onDeleteProduct(product)}
                            onClickProduct={() => onClickProduct(product)}
                            addProductIdToBasket={() => addProductIdToBasket(product)}
                            key={index}
                        />
                    )
                )}
            </div>
        )
    }
}