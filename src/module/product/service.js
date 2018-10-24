import Products from '../../../public/product.json';
let products = Products;

export default class ProductService {
    static getProducts() {
        return products;
    }

    static getProduct(productId) {
        return products.find(({ id }) => id == productId);
    }

    static createProduct(product) {
        products = [...products, product];
    }

    static updateProduct(id, productToUpdate) {
        products = products.map(product => {
            if (id === product.id) {
                return productToUpdate;
            }
            
            return product;
        });
    }

    static deleteProduct(productId) {
        products = products.filter(({ id }) => id !== productId);
    }
}