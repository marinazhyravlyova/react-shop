import React, {Component} from 'react';
import './style.scss';
import ProductBasket from "../../components/product-basket/component";

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
                        onDeleteProductInBasket={() => this.props.onDeleteProductInBasket(product)}
                        key={index}
                    />
                )}
            </div>
        )
    };
}