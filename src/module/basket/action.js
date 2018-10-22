import {
    BASKET_SET_PRODUCT_IDS,
    BASKET_SET_PRODUCTS,
} from '../../action-types';
import ProductService from '../product/service';
import BasketService from './service';

export const setProductIdsToBasket = productIds => ({
    type: BASKET_SET_PRODUCT_IDS,
    productIds,
});

export const setProductsInBasket = products => ({
    type: BASKET_SET_PRODUCTS,
    products,
});

export const addProductToBasket = product => (dispatch) => {
    BasketService.addProductId(product.id);
    dispatch(fetchProducts());
};

export const deleteProduct = (product) => (dispatch) => {
    BasketService.deleteProductId(product.id);
    dispatch(fetchProducts());
};

export const fetchProducts = () => (dispatch) => {
    const products = ProductService.getProducts();
    const productIds = BasketService.getProductIds();

    
    const productsInBasket = productIds.reduce((currentProductsInBasket, productId) => {
        const product = products.find((product) => product.id === productId);

        return [
            ...currentProductsInBasket,
            product,
        ];
    }, []);
    
    dispatch(setProductsInBasket(productsInBasket));
    dispatch(setProductIdsToBasket(productIds));
};