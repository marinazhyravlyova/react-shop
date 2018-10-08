import {
    SET_ID,
    SET_NAME,
    SET_DESCRIPTION,
    SET_PRICE,
    SET_URL,
    SET_VALIDATION_STATE_PRICE,
} from "../../action-types";

const isNumeric = (str) => /^\d+$/.test(str);

export const setId = id => ({
    type: SET_ID,
    id,
});

export const setName = name => ({
    type: SET_NAME,
    name,
});

export const setDescription = description => ({
    type: SET_DESCRIPTION,
    description,
});

export const setPrice = price => (dispatch, getState) => {
    dispatch({
        type: SET_PRICE,
        price,
    });
    dispatch(validatePrice(price));
};

export const setUrl = url => ({
    type: SET_URL,
    url,
});

export const validatePrice = (price) => (dispatch) => {
    const isValid = isNumeric(price);

    dispatch({
        type: SET_VALIDATION_STATE_PRICE,
        isValid,
    })
};

export const fetchProduct = (productId) => (dispatch, getState) => {
    const state = getState();
    const { products } = state.main;
    const {
        id,
        name,
        description,
        price,
        url
    } = products.find(({ id }) => id == productId);

    dispatch(setId(id));
    dispatch(setName(name));
    dispatch(setDescription(description));
    dispatch(setPrice(price));
    dispatch(setUrl(url));
};

export const saveProduct = () => (dispatch, getState) => {
    
};