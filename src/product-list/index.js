import SearchComponent from '../search-component';
import AddPropertiesComponent from '../add-properties';

// TODO Перенес с файла main.js
// TODO По итогу этот компонент должен выводить ТОЛЬКО список продуктов и больше ничего не делать
class ProductList {
    constructor(products) {
        this.products = products;
        this.productsContainer = document.getElementById('result');
        this.filteredProducts = products;
        this.addPropertiesComponent = new AddPropertiesComponent((property) => {
            //TODO вот это нужно делать когда меняются properties
            this.addNewProperty(property);
            this.filterProducts('');
            
            //Это не надо уже делать
            this.render();
        });
        this.search = new SearchComponent((criterionSearch) => {
            //TODO вот это нужно делать когда меняется searchValue
            this.filterProducts(criterionSearch);

            //Это не надо уже делать
            this.render();
        });
    }

    addNewProperty({propertyName, value}) {
        //TODO Это должно быть ВНУТРИ компонента AddPropertiesComponent
        this.products = this.products.map(product => {
            return {
                ...product,
                [propertyName]: value,
            };
        });
    }

    filterProducts(criterionSearch) {
        //TODO Это должно быть ВНУТРИ компонента ProductsEditPage
        this.filteredProducts = (this.products || []).filter(product => {
            const productPropertyNames = Object.keys(product);
            const propertyName = (productPropertyNames || []).find(
                productPropertyName => {
                    const productPropertyValue = product[productPropertyName];

                    return productPropertyValue.toString().
                            indexOf(criterionSearch) !==
                        -1;
                });

            return !!propertyName;
        });
    }

    render() {
        this.productsContainer.innerHTML = '';

        (this.filteredProducts || []).forEach((product) => {
            const resultProductHtml = Object.keys(product).
                reduce((resultProductHtml, productPropertyKey) => {
                    return resultProductHtml + `
                    <div>
                        <span class="product-property-name">${productPropertyKey}: </span>
                        <span class="product-property-value">${product[productPropertyKey]}</span>
                    </div>
                `;
                }, '');

            this.productsContainer.innerHTML += `
                <div class="product">${resultProductHtml}</div></br>
            `;
        });
    }
}