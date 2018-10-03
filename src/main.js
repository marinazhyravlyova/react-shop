import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Products from '../public/product';
import SearchComponent from './search-component';
import ProductListComponent from './product-list';
import AddPropertiesComponent from './add-properties';
import AddProductComponent from './add-product';
import EditProductComponent from './edit-product';
import SortTollBarComponent from './sort-tool-bar';
import './task';

class ProductsEditPage extends Component {
    constructor(...rest) {
        super(...rest);

        this.state = {
            searchValue: '',
            products: Products,
            filteredProducts: Products,
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
        this.setState({
            selectedProduct: product,
        });
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
                <AddPropertiesComponent
                    propertiesChange={this.onPropertiesChange}
                />
                <ProductListComponent
                    products={this.state.filteredProducts}
                    onDeleteProduct={this.onDeleteProduct}
                    onClickProduct={this.onClickProduct}
                />
                <AddProductComponent
                    addProduct={this.onProductAdd}
                />
                <EditProductComponent
                    product={this.state.selectedProduct}
                    editProduct={this.onEditProduct}
                />
                <SortTollBarComponent
                    properties={Object.keys(this.state.products[0])}
                    sortProducts={this.sortProducts}
                />
            </div>
        );
    }
}

ReactDOM.render(<ProductsEditPage/>, document.getElementById('root'));
