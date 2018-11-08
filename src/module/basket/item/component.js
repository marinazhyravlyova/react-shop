import React, {Component} from 'react';

export default class BasketComponent extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render() {
        return (
            <div className="all-comments">
                <span>Basket ({this.props.productsInBasket.length})</span>
            </div>
        );
    }
}