import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ProductBasket extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className='product-basket'>
                <div className='container-basket'>
                    <Link to={`/product/${product.id}`}>
                        <div className='product-name'>
                            <span>{product.name}</span>
                        </div>
                        <img className='product-img' src={product.url}/>
                    </Link>
                    <div className='product-description'>
                        <span>{product.description}</span>
                    </div>
                    <div>
                        <span className="product-price">{product.price}</span>
                    </div>
                    <button className="delete-product" onClick={this.props.deleteProduct}>X</button>
                </div>
            </div>
        );
    }
}
