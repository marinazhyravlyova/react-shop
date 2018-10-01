import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Products from '../public/product';
import SearchComponent from './search-component';
import './task';

class ProductsEditPage extends Component {
    constructor(...rest) {
        super(...rest);

        this.state = {
            searchValue: '',
            properties: [{
                propertyName: '',
                propertyValue: '',
            }],
            products: Products,
            filteredProducts: Products,
        };
        this.onSearchValueChange = this.onSearchValueChange.bind(this);
        this.onPropertiesChange = this.onPropertiesChange.bind(this);
    }

    onSearchValueChange(searchValue) {
        this.setState({ searchValue });
        console.log(searchValue);
        //TODO нужно тут что-то еще (смотри в 'product-list/index.js')
        //TODO чтобы получить обновленный filteredProducts и потом его(filteredProducts) обновить в этом компоненте
    }

    onPropertiesChange(properties) {
        // TODO need to set state (see onSearchValueChange method)
        // TODO and then update products
    }

    render() {
        return (
            <div className='application'>
                <SearchComponent
                    searchValue={this.state.searchValue}
                    searchValueChange={this.onSearchValueChange}
                />
                {/*<AddPropertiesComponent
                    properties={this.state.properties}
                    propertiesChange={this.onPropertiesChange}
                />*/}
                {/*<ProductListComponent
                    products={this.state.filteredProducts}
                />*/}
            </div>
        );
    }
}

ReactDOM.render(<ProductsEditPage/>, document.getElementById('root'));

//TODO ПОРЯДОК ДЕЙСТВИЙ: (Как только выполняешь один пункт, коммитишь,  пушишь и показываешь мне)
//TODO 1. Сделать компонент ProductComponent (который просто отображает продукт): <ProductComponent product={product} />

//TODO 2. Сделать компонент ProductListComponent который 
//TODO 2. выводит массив ProductComponent: {(products || []).map(product, index) => <ProductComponent product={product} key={index} />}

//TODO 3. Подключить поиск, (чтобы когда меняется строка в поиске, менялся и массив this.state.filteredProducts)

//TODO 4. Переписать и подключить компонент AddPropertiesComponent
