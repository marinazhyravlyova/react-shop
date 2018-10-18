import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import './style.scss';

export default class BasketComponent extends Component{
    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render(){
        return(
            <div className="basket">
                {(this.props.productsInBasket || []).map((product, index) =>
                    <div className='product-basket' key={index}>
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
                        </div>
                    </div>
                )}
            </div>
        )
    };
}