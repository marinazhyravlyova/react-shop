import axios from 'axios';

export default class ProductService {
    static getUsers() {
        return axios.get('http://localhost:3000/registration/all');
    }

    static getUser(userId) {
        return axios.get(`http://localhost:3000/user/${userId}`);
    }

    static createUser(user) {
        return axios.post(`http://localhost:3000/registration`, { user });
    }

    static updateUser(userId, UserToUpdate) {
        return axios.put(`http://localhost:3000/product/${userId}`, { product: UserToUpdate });
    }

    static deleteProduct(userId) {
        return axios.delete(`http://localhost:3000/product/${userId}`);
    }
}