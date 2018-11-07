import {
    SET_PRODUCTS,
    UPDATE_PRODUCT,
} from "../../action-types";
import ProductService from "./service";

export const setProducts = products => ({
    type: SET_PRODUCTS,
    products,
});

export const updateProduct = product => ({
    type: UPDATE_PRODUCT,
    product,
});

export const deleteProduct = product => (dispatch) => {
    ProductService.deleteProduct(product.id).then(() => {
        dispatch(fetchProducts());
    });
};

export const fetchProducts = () => (dispatch) => {
    ProductService.getProducts().then(response => {
        const products = response.data;
        dispatch(setProducts(products));
    });
};