import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    SET_PRODUCTS,
    UPDATE_PRODUCT,
} from "../../action-types";
import Products from '../../../public/product.json';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    products,
});

export const addProduct = product => ({
    type: ADD_PRODUCT,
    product,
});

export const updateProduct = product => ({
    type: UPDATE_PRODUCT,
    product,
});

export const deleteProduct = product => ({
    type: DELETE_PRODUCT,
    product,
});


export const fetchProducts = () => (dispatch, getState) => {
    const state = getState();
    const { products } = state.main;

    if (products.length === 0) {
        dispatch(setProducts(Products));
    }
};