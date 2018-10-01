import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Products from '../public/product';
import SearchComponent from './search-component';
import ProductListComponent from './product-list';
import AddPropertiesComponent from './add-properties';
import AddProductComponent from './add-product';
import './task';

class ProductsEditPage extends Component {
    constructor(...rest) {
        super(...rest);

        this.state = {
            searchValue: '',
            products: Products,
            filteredProducts: Products,
        };
        this.onSearchValueChange = this.onSearchValueChange.bind(this);
        this.onPropertiesChange = this.onPropertiesChange.bind(this);
        this.onProductAdd = this.onProductAdd.bind(this);
    }

    onSearchValueChange(searchValue) {
        const filteredProducts = this.getFilteredProducts(searchValue);

        this.setState({
            searchValue,
            filteredProducts,
        });
    }

    getFilteredProducts(criterionSearch) {
        return (this.state.products || []).filter(product => {
            const productPropertyNames = Object.keys(product);
            const propertyName = (productPropertyNames || []).find(
                productPropertyName => {
                    const productPropertyValue = product[productPropertyName];

                    return productPropertyValue.toString().indexOf(criterionSearch) !== -1;
                });

            return !!propertyName;
        });
    }
    
    onPropertiesChange({ propertyName, propertyValue }) {
        const products = this.state.products.map(product => {
                    return {
                        ...product,
                        [propertyName]: propertyValue,
                    };
                });
        this.setState({
            products,
            filteredProducts: products,
        });
    }

    onProductAdd(product){
        const products = [...this.state.products, product];
        
        this.setState({
            products: products,
            filteredProducts: products,
        });
    };
    
    render() {
        return (
            <div className='application'>
                <SearchComponent
                    searchValue={this.state.searchValue}
                    searchValueChange={this.onSearchValueChange}
                />
                <AddPropertiesComponent
                    propertiesChange={this.onPropertiesChange}
                />
                <ProductListComponent
                    products={this.state.filteredProducts}
                />
                <AddProductComponent
                    addProduct={this.onProductAdd}
                />
            </div>
        );
    }
}

ReactDOM.render(<ProductsEditPage/>, document.getElementById('root'));
