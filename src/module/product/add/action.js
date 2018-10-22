import {
    ADD_ID,
    ADD_NAME,
    ADD_DESCRIPTION,
    ADD_PRICE,
    ADD_URL,
    ADD_VALIDATION_STATE_PRICE,
} from "../../../action-types";
import ProductService from '../../product/service';

const isNumeric = (str) => /^\d+$/.test(str);

export const addId = id => ({
    type: ADD_ID,
    id,
});

export const addName = name => ({
    type: ADD_NAME,
    name,
});

export const addDescription = description => ({
    type: ADD_DESCRIPTION,
    description,
});

export const addPrice = price => (dispatch, getState) => {
    dispatch({
        type: ADD_PRICE,
        price,
    });
    dispatch(validatePrice(price));
};

export const addUrl = url => ({
    type: ADD_URL,
    url,
});

export const validatePrice = (price) => (dispatch) => {
    const isValid = isNumeric(price);

    dispatch({
        type: ADD_VALIDATION_STATE_PRICE,
        isValid,
    })
};

export const createProduct = () => (dispatch, getState) => {
    const state = getState();
    const {
        id,
        name,
        description,
        price,
        url,
    } = state.addProduct;
    const product = {
        id,
        name,
        description,
        price,
        url,
    };

    ProductService.createProduct(product)
};