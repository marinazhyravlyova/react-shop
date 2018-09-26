import AddPropertiesComponent from './add-properties';
import SearchComponent from './search-component';
import Products from "../public/product";

class ProductList {
    constructor(products) {
        this.products = products;
        this.productsContainer = document.getElementById('result');
        this.filteredProducts = products;
        this.addPropertiesComponent = new AddPropertiesComponent((property) => {
            this.addNewProperty(property);
            this.filterProducts('');
            this.render();
        });
        this.search = new SearchComponent((criterionSearch) => {
            this.filterProducts(criterionSearch);
            this.render();
        })
    }

    addNewProperty({ propertyName, value }) {
        this.products = this.products.map(product => {
            return {
                ...product,
                [propertyName]: value,
            };
        });
    }

    filterProducts(criterionSearch) {
        this.filteredProducts = (this.products || []).filter(product => {
            const productPropertyNames = Object.keys(product);
            const propertyName = (productPropertyNames || []).find(productPropertyName => {
                const productPropertyValue = product[productPropertyName];

                return productPropertyValue.toString().indexOf(criterionSearch) !== -1;
            });

            return !!propertyName;
        });
    }

    render() {
        this.productsContainer.innerHTML = '';

        (this.filteredProducts || []).forEach((product) => {
            const resultProductHtml = Object.keys(product).reduce((resultProductHtml, productPropertyKey) => {
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

document.addEventListener("DOMContentLoaded", async () => {
    const productList = new ProductList(Products);
    productList.render();
    getSortedObjectPropertyNames(object);
    const newArray = removeElementFilter(array, object2);
    console.log(newArray);
    const newArray2 = removeElementReduce(array, object2);
    console.log(newArray2);
});

//Написать функицю на вход принимающую объект а на выход выдающую массив
//с названиями свойств в алфавитом порядке
const object = {
    name: 'Marina',
    description: 'clever',
    years: '17',
    growth: '171',
    weight: '51',
    big: 'no',
    aisle: 'no'
};
const object2 = {
    name: 'Marina2',
    description: 'clever',
    years: '17',
    growth: '171',
    weight: '51',
    big: 'no',
    aisle: 'no'
};
const object3 = {
    name: 'Marina3',
    description: 'clever',
    years: '17',
    growth: '171',
    weight: '51',
    big: 'no',
    aisle: 'no'
};

const array = [object2, object, object3];

const getSortedObjectPropertyNames = (object) => {
        const arrayProperties = Object.keys(object).sort();
        console.log(arrayProperties);
};

const removeElementFilter = (array, deletableObject) => {
    return array.filter((object) => { return (object !== deletableObject); });
};

const removeElementReduce = (array, deletableObject) => {
    const result = [];
    array.reduce((newArray, currentObject) => {
        if(currentObject !== deletableObject){ return result.push(currentObject); }
    });

    return result;
};

