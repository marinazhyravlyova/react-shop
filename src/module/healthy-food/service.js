import axios from 'axios';

export const backendUrl = 'http://localhost:3000';

export default class ProductService {
    static getHealthyFood(id) {
        return axios.get(`${backendUrl}/healthyFood/${id}`);
    }

    static createHealthyFood(userId, healthyFood) {
        return axios.post(`${backendUrl}/healthyFood/${userId}`, { healthyFood });
    }

    static addDay(healthyFood, day) {
        return axios.post(`${backendUrl}/healthyFood/${healthyFood.id}/day`, { day });
    }

    static changeDay(healthyFood, day) {
        return axios.put(`${backendUrl}/healthyFood/${healthyFood.id}/day/${day.id}`, { day });
    }

    static deleteDay(healthyFood, day) {
        return axios.delete(`${backendUrl}/healthyFood/${healthyFood.id}/day/${day.id}`);
    }

    static addEatingTime(healthyFood, day, eatingTime) {
        return axios.post(`${backendUrl}/healthyFood/${healthyFood.id}/day/${day.id}/eatingTime`, { eatingTime });
    }

    static changeEatingTime(healthyFood, day, eatingTime) {
        return axios.put(`${backendUrl}/healthyFood/${healthyFood.id}/day/${day.id}/eatingTime/${eatingTime.id}`, { eatingTime });
    }

    static deleteEatingTime(healthyFood, day, eatingTime) {
        return axios.delete(`${backendUrl}/healthyFood/${healthyFood.id}/day/${day.id}/eatingTime/${eatingTime.id}`);
    }

    static addProductDescription(healthyFood, day, eatingTime, productDescription) {
        return axios.post(`${backendUrl}/healthyFood/${healthyFood.id}/day/${day.id}/eatingTime/${eatingTime.id}/productDescription`, { productDescription });
    }

    static changeProductDescription(healthyFood, day, eatingTime, productDescription) {
        return axios.put(`${backendUrl}/healthyFood/${healthyFood.id}/day/${day.id}/eatingTime/${eatingTime.id}/productDescription/${productDescription.id}`, { productDescription });
    }

    static deleteProductDescription(healthyFood, day, eatingTime, productDescription) {
        return axios.delete(`${backendUrl}/healthyFood/${healthyFood.id}/day/${day.id}/eatingTime/${eatingTime.id}/productDescription/${productDescription.id}`);
    }
}