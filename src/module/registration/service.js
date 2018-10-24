import axios from 'axios';

export default class ProductService {
    static getProducts() {
        return axios.get('http://localhost:3000/product/all');
    }

    static getProduct(productId) {
        return axios.get(`http://localhost:3000/product/${productId}`);
    }

    static createProduct(product) {
        return axios.post(`http://localhost:3000/product`, { product });
    }

    static updateProduct(productId, productToUpdate) {
        return axios.put(`http://localhost:3000/product/${productId}`, { product: productToUpdate });
    }

    static deleteProduct(productId) {
        return axios.delete(`http://localhost:3000/product/${productId}`);
    }
}