import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

export default class ProductComponent extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className='product'>
                <div className='product-container'>
                    <Link to={`/product/${product.id}`}>
                        <button className="change-product" onClick={this.props.onClickProduct}><img
                            className='product-img' src={product.url}/>
                            <div className='product-name'>
                                <span>{product.name}</span>
                            </div>
                        </button>
                    </Link>
                    <div className='product-description'>
                        <span>{product.description}</span>
                    </div>
                    <div>
                        <span className="product-price">{product.price}</span>
                        <button className="delete-product" onClick={this.props.onDeleteProduct}>X</button>
                    </div>
                    <div>
                        <button className="delete-product" onClick={this.props.addProductIdToBasket}>Add to basket
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
