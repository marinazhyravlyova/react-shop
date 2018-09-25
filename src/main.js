import AddPropertiesComponent from './add-properties';
import Products from "../public/product";

class ProductList {
    constructor(products) {
        this.products = products;
        this.productsContainer = document.getElementById('result');
        this.addPropertiesComponent = new AddPropertiesComponent((property) => {
            this.addNewProperty(property);
            this.render();
        });
    }

    addNewProperty({ propertyName, value }) {
        this.products = this.products.map(product => {
            return {
                ...product,
                [propertyName]: value,
            };
        });
    }

    render() {
        this.productsContainer.innerHTML = '';

        (this.products || []).forEach((product) => {
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
});