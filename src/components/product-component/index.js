import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class ProductComponent extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className='product'>
                <div className='product-container'>
                    <Link to={`/product/${product.id}`}>
                        <button className="change-product" onClick={this.props.onClickProduct}>                        <img className='product-img' src={product.url}/>
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
                </div>
                
            </div>
        );
    }
}



/*
export default class ProductComponent extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className='product'>
                <div className='product-container'>
                    <img className='product-img' src={product.url}/>
                    {Object.keys(product).map((productPropertyKey, index) => {
                        return (
                            <div key={index}>
                                <span className="product-property-name">{productPropertyKey}: </span>
                                <span className="product-property-value">{product[productPropertyKey]}</span>
                            </div>
                        );
                    })}
                    <button className="delete-product" onClick={this.props.onDeleteProduct}>Delete product</button>
                    <Link to={`/product/${product.id}`}>
                        <button className="change-product" onClick={this.props.onClickProduct}>Change product</button>
                    </Link>
                </div>

            </div>
        );
    }
}*/
