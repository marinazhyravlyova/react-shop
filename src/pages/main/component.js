import React, {Component} from 'react';
import SearchComponent from '../../components/search-component';
import ProductListComponent from '../../components/product-list';
import SortTollBarComponent from '../../components/sort-tool-bar';
import './style.scss';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchValue: '',
            filteredProducts: props.products,
            property: '',
            sortingType: true,
        };
        this.onSearchValueChange = this.onSearchValueChange.bind(this);
        this.onClickProduct = this.onClickProduct.bind(this);
        this.sortProducts = this.sortProducts.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchProducts();
    }

    componentWillReceiveProps(props) {
        this.setState({
            filteredProducts: props.products,
        });
    }

    onSearchValueChange(searchValue) {
        const filteredProducts = this.getFilteredProducts(searchValue);

        this.setState({
            searchValue,
            filteredProducts,
        });
    }

    getFilteredProducts(criterionSearch) {
        return (this.props.products || []).filter(product => {
            const productPropertyNames = Object.keys(product);
            const propertyName = (productPropertyNames || []).find(
                productPropertyName => {
                    const productPropertyValue = product[productPropertyName];

                    return productPropertyValue.toString().indexOf(criterionSearch) !== -1;
                });

            return !!propertyName;
        });
    }

    onClickProduct(product) {};

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
                <div className="title">All products</div>
                <SearchComponent
                    searchValue={this.state.searchValue}
                    searchValueChange={this.onSearchValueChange}
                />
                <SortTollBarComponent
                    properties={Object.keys(this.props.products[0] || {})}
                    sortProducts={this.sortProducts}
                />
                <ProductListComponent
                    products={this.state.filteredProducts}
                    onDeleteProduct={this.props.onDeleteProduct}
                    onClickProduct={this.onClickProduct}
                />
            </div>
        );
    }
}

