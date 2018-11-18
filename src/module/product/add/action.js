import {
    ADD_ID,
    ADD_NAME,
    ADD_DESCRIPTION,
    ADD_PRICE,
    ADD_URL,
    ADD_VALIDATION_STATE_PRICE,
    ADD_CALORIES,
    ADD_PROTEIN,
    ADD_FAT,
    ADD_CARBOHYDRATES,
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

export const addCalories = calories => ({
    type: ADD_CALORIES,
    calories,
});

export const addProtein = protein => ({
    type: ADD_PROTEIN,
    protein,
});
export const addFat = fat => ({
    type: ADD_FAT,
    fat,
});
export const addСarbohydrates = carbohydrates => ({
    type: ADD_CARBOHYDRATES,
    carbohydrates,
});

export const createProduct = () => (dispatch, getState) => {
    const state = getState();
    const {
        name,
        description,
        price,
        url,
        calories,
        protein,
        fat,
        carbohydrates,
    } = state.addProduct;
    const product = {
        name,
        description,
        price,
        url,
        calories,
        protein,
        fat,
        carbohydrates,
    };

    ProductService.createProduct(product)
};