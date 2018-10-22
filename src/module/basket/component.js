import React, {Component} from 'react';
import './style.scss';
import ProductBasket from "./product/component";

export default class BasketComponent extends Component{
    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render(){
        return(
            <div className="basket">
                {(this.props.productsInBasket || []).map((product, index) =>
                    <ProductBasket
                        product={product}
                        deleteProduct={() => this.props.deleteProduct(product)}
                        key={index}
                    />
                )}
            </div>
        )
    };
}