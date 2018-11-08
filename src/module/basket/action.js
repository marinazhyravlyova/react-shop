import {
    BASKET_SET_PRODUCTS,
} from '../../action-types';
import BasketService from './service';

export const setProductsInBasket = products => ({
    type: BASKET_SET_PRODUCTS,
    products,
});

export const addProductToBasket = product => async (dispatch, getState) => {
    const state = getState();
    const userId = state.authReducer.authorizedUser.id;

    await BasketService.addProduct(product.id, userId);
    dispatch(fetchProducts());
};

export const deleteProduct = (product) => async (dispatch, getState) => {
    const state = getState();
    const userId = state.authReducer.authorizedUser.id;
    
    await BasketService.deleteProduct(product.id, userId);
    dispatch(fetchProducts());
};

export const fetchProducts = () => async (dispatch, getState) => {
    const state = getState();
    const userId = state.authReducer.authorizedUser.id;

    const { data: products } = await BasketService.getBasketProducts(userId);

    dispatch(setProductsInBasket(products));
};