import React, {Component} from 'react';
import SearchComponent from '../../components/search-component';
import ProductListComponent from '../../components/product-list';
import SortTollBarComponent from '../../components/sort-tool-bar';
import store from '../../store';

export default class MainPage extends Component {
    constructor(...rest) {
        super(...rest);
        
        const { products } = store.getState();

        this.state = {
            searchValue: '',
            products,
            filteredProducts: products,
            selectedProduct: {
                id: '',
                name: '',
                price: '',
            },
            property: '',
            sortingType: true,
        };
        this.onSearchValueChange = this.onSearchValueChange.bind(this);
        this.onPropertiesChange = this.onPropertiesChange.bind(this);
        this.onProductAdd = this.onProductAdd.bind(this);
        this.onDeleteProduct = this.onDeleteProduct.bind(this);
        this.onClickProduct = this.onClickProduct.bind(this);
        this.onEditProduct = this.onEditProduct.bind(this);
        this.sortProducts = this.sortProducts.bind(this);
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

    onPropertiesChange({propertyName, propertyValue}) {
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

    onProductAdd(product) {
        const products = [...this.state.products, product];

        this.setState({
            products,
            filteredProducts: products,
        });
    };

    onDeleteProduct(product) {
        const products = this.state.products.filter((object) => object.id !== product.id);

        this.setState({
            products,
            filteredProducts: products,
        });
    };

    onClickProduct(product) {
    };

    onEditProduct(selectedProduct) {
        const products = this.state.products.map(product => {
            if (product.id === selectedProduct.id) {
                return selectedProduct;
            }
            return {
                ...product
            };
        });
        this.setState({
            selectedProduct: '',
            products,
            filteredProducts: products,
        });
    }

    sortProducts(property, sortingType) {
        let sortedProducts;
        const { products } = this.state;

        if (sortingType) {
            sortedProducts = products.sort((current, next) => (current[property] > next[property]));
        } else {
            sortedProducts = products.sort((current, next) => (current[property] < next[property]));
        }

        this.setState({
            property,
            filteredProducts: sortedProducts,
            sortingType
        });
    }

    render() {
        return (
            <div className='application'>
                <SearchComponent
                    searchValue={this.state.searchValue}
                    searchValueChange={this.onSearchValueChange}
                />
                <ProductListComponent
                    products={this.state.filteredProducts}
                    onDeleteProduct={this.onDeleteProduct}
                    onClickProduct={this.onClickProduct}
                />
                <SortTollBarComponent
                    properties={Object.keys(this.state.products[0])}
                    sortProducts={this.sortProducts}
                />
            </div>
        );
    }
}

