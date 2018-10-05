import React, { Component } from 'react';
import store from "../../store";
import './style.scss';

export default class AddProductComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            price: '',
            url: ''
        };
        this.onProductPropertyChange = this.onProductPropertyChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    onProductPropertyChange(event, propertyName) {
        const value = event.target.value;

        this.setState({
            [propertyName]: value,
        });
    }

    addProduct(){
        const { products } = store.getState();
        const productsWithNewProduct = [...products, this.state];
        
        store.setState({ products: productsWithNewProduct });
    }
    
    render() {
        return(<div className="new-product">
            <div className="title">Add new product</div>
            <div className="product-container">
                <div className="field-fill">
                    <span>Product id: </span>
                    <input
                        value={this.state.id}
                        onChange={(event) => this.onProductPropertyChange(event, 'id')}
                    />
                </div>
                
                <div className="field-fill">
                    <span>Product name: </span>
                    <input
                        value={this.state.name}
                        onChange={(event) => this.onProductPropertyChange(event, 'name')}
                    />
                </div>
                <div className="field-fill">
                    <span>Product description: </span>
                    <input
                        value={this.state.description}
                        onChange={(event) => this.onProductPropertyChange(event, 'description')}
                    />
                </div>
                <div className="field-fill">
                    <span>Product price: </span>
                    <input
                        value={this.state.price}
                        onChange={(event) => this.onProductPropertyChange(event, 'price')}
                    />
                </div>
                <div className="field-fill">
                    <span>Product img(url): </span>
                    <input
                        value={this.state.url}
                        onChange={(event) => this.onProductPropertyChange(event, 'url')}
                    />
                </div>
                
               
            </div>
            <button className="btn-add-product" onClick={this.addProduct}>Add product</button>
        </div>);
    }
}
