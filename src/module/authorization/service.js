import axios from 'axios';

export default class AuthService {
    static getUsers() {
        return axios.get('http://localhost:3000/registration/all');
    }

    static getUser(id) {
        return axios.get(`http://localhost:3000/user/${id}`);
    }

    static createUser(user) {
        return axios.post(`http://localhost:3000/user`, { user });
    }
    
    static signIn(email, password) {
        return axios.post(`http://localhost:3000/user/sign-in`, { email, password });
    }

    static signUp(signUpData) {
        return axios.post(`http://localhost:3000/user/sign-up`, signUpData);
    }
    
    static signOut() {
        localStorage.removeItem('token');

        return axios.get(`http://localhost:3000/user/sign-out`);
    }

    static authorize(token) {
        return axios.post(`http://localhost:3000/user/authorize`, { token });
    }
    
    static setToken(token) {
        localStorage.setItem('token', token);
    }
    
    static isAuthenticated() {
        const token = localStorage.getItem('token');

        return !!token;
    }
}