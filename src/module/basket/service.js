import axios from 'axios';

export default class BasketService {
    static getProductIds(userId) {
        return axios.post(`http://localhost:3000/basket`, { userId });
    }

    static getBasketProducts(userId) {
        return axios.post(`http://localhost:3000/basket`, { userId });
    }
    
    static addProduct(productId, userId) {
        return axios.post(`http://localhost:3000/basket/add`, { productId, userId });
    }

    static deleteProduct(productId, userId) {
        return axios.post(`http://localhost:3000/basket/delete`, { productId, userId });
    }
}