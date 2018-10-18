import {
    BASKET_ADD_PRODUCT_ID,
    BASKET_SET_PRODUCTS,
} from '../../action-types'

export const addProductIdToBasket = product => ({
    type: BASKET_ADD_PRODUCT_ID,
    product,
});

export const setProductsInBasket = products => ({
    type: BASKET_SET_PRODUCTS,
    products,
});

export const fetchProducts = () => (dispatch, getState) => {
    const state = getState();
    const {products} = state.main;
    const productIds = state.basket.productIds;
    const productsInBasket = productIds.reduce((currentProductsInBasket, productId) => {
        const product = products.find((product) => product.id === productId);

        return [
            ...currentProductsInBasket,
            product,
        ];
    }, []);

    dispatch(setProductsInBasket(productsInBasket));
};