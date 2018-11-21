import {
    HEALTHY_FOOD_SET_HEALTHY_FOOD,
    HEALTHY_FOOD_SET_PRODUCTS,
} from '../../action-types';
import HealthyFoodService from './service';
import ProductService from '../product/service';

export const fetchData = () => async (dispatch, getState) => {
    const state = getState();
    const id = state.authReducer.authorizedUser.healthyFood;
    const { id: userId  } = state.authReducer.authorizedUser;
    let products = state.main.products;
    
    if (id) {
        const { data: healthyFood } = await HealthyFoodService.getHealthyFood(id);
        
        if (!products) {
            const { data } = await ProductService.getProducts();

            products = data;
        }

        dispatch(setHealthyFood(healthyFood));
        dispatch(setProducts(products));
    } else {
        await HealthyFoodService.createHealthyFood(userId, { days: [] });
    }
};

export const setProducts = (products) => (dispatch) => {
    dispatch({
        type: HEALTHY_FOOD_SET_PRODUCTS,
        products,
    });
};

export const setHealthyFood = (healthyFood) => (dispatch) => {
    dispatch({
        type: HEALTHY_FOOD_SET_HEALTHY_FOOD,
        healthyFood,
    });
};

export const addDay = (day) => async (dispatch, getState) => {
    const { healthyFood } = getState();
    
    try {
        const { data: updatedHealthyFood } = await HealthyFoodService.addDay(healthyFood, day);

        dispatch(setHealthyFood(updatedHealthyFood));
    } catch (error) {
        console.log(error);
    }
};

export const changeDay = (day) => async (dispatch, getState) => {
    const { healthyFood } = getState();

    try {
        const { data: updatedHealthyFood } = await HealthyFoodService.changeDay(healthyFood, day);

        dispatch(setHealthyFood(updatedHealthyFood));
    } catch (error) {
        console.log(error);
    }
};

export const deleteDay = (day) => async (dispatch, getState) => {
    const { healthyFood } = getState();

    try {
        const { data: updatedHealthyFood } = await HealthyFoodService.deleteDay(healthyFood, day);

        dispatch(setHealthyFood(updatedHealthyFood));
    } catch (error) {
        console.log(error);
    }
};

export const addEatingTime = (day, eatingTime) => async (dispatch, getState) => {
    const { healthyFood } = getState();

    try {
        const { data: updatedHealthyFood } = await HealthyFoodService.addEatingTime(healthyFood, day, eatingTime);

        dispatch(setHealthyFood(updatedHealthyFood));
    } catch (error) {
        console.log(error);
    }
};

export const changeEatingTime = (day, eatingTime) => async (dispatch, getState) => {
    const { healthyFood } = getState();

    try {
        const { data: updatedHealthyFood } = await HealthyFoodService.changeEatingTime(healthyFood, day, eatingTime);

        dispatch(setHealthyFood(updatedHealthyFood));
    } catch (error) {
        console.log(error);
    }
};

export const deleteEatingTime = (day, eatingTime) => async (dispatch, getState) => {
    const { healthyFood } = getState();

    try {
        const { data: updatedHealthyFood } = await HealthyFoodService.deleteEatingTime(healthyFood, day, eatingTime);

        dispatch(setHealthyFood(updatedHealthyFood));
    } catch (error) {
        console.log(error);
    }
};

export const addProduct = (day, eatingTime, product) => async (dispatch, getState) => {
    const { healthyFood } = getState();

    try {
        const { data: updatedHealthyFood } = await HealthyFoodService.addProductDescription(healthyFood, day, eatingTime, product);

        dispatch(setHealthyFood(updatedHealthyFood));
    } catch (error) {
        console.log(error);
    }
};

export const changeProduct = (day, eatingTime, product) => async (dispatch, getState) => {
    const { healthyFood } = getState();

    try {
        const { data: updatedHealthyFood } = await HealthyFoodService.changeProductDescription(healthyFood, day, eatingTime, product);

        dispatch(setHealthyFood(updatedHealthyFood));
    } catch (error) {
        console.log(error);
    }
};

export const deleteProduct = (day, eatingTime, product) => async (dispatch, getState) => {
    const { healthyFood } = getState();

    try {
        const { data: updatedHealthyFood } = await HealthyFoodService.deleteProductDescription(healthyFood, day, eatingTime, product);

        dispatch(setHealthyFood(updatedHealthyFood));
    } catch (error) {
        console.log(error);
    }
};
