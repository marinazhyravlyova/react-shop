import {
    SET_ID,
    SET_NAME,
    SET_DESCRIPTION,
    SET_PRICE,
    SET_URL,
    SET_VALIDATION_STATE_PRICE,
    SET_COMMENTS,
    ADD_COMMENT,
    SET_CALORIES,
    SET_PROTEIN,
    SET_FAT,
    SET_CARBOHYDRATES,
} from "../../../action-types";
import {updateProduct} from '../action';
import ProductService from '../../product/service';

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

export const setComments = comments => ({
    type: SET_COMMENTS,
    comments,
});

export const setCalories = calories => ({
    type: SET_CALORIES,
    calories,
});

export const setProtein = protein => ({
    type: SET_PROTEIN,
    protein,
});
export const setFat = fat => ({
    type: SET_FAT,
    fat,
});
export const setCarbohydrates = carbohydrates => ({
    type: SET_CARBOHYDRATES,
    carbohydrates,
});

export const addComment = comment => (dispatch, getState) => {
    const state = getState();
    const product = state.editProduct;
    const comments = [
        ...product.comments,
        comment,
    ];

    dispatch(updateProduct({
        ...product,
        comments,
    }));

    dispatch({
        type: ADD_COMMENT,
        comment,
    })
};

export const validatePrice = (price) => (dispatch) => {
    const isValid = isNumeric(price);

    dispatch({
        type: SET_VALIDATION_STATE_PRICE,
        isValid,
    })
};

export const fetchProduct = (productId) => async (dispatch) => {
    const response = await ProductService.getProduct(productId);
    const {
        id,
        name,
        description,
        price,
        url,
        calories,
        protein,
        fat,
        carbohydrates,
        comments,
    } = response.data;
    
    dispatch(setId(id));
    dispatch(setName(name));
    dispatch(setDescription(description));
    dispatch(setPrice(price));
    dispatch(setUrl(url));
    dispatch(setComments(comments));
    dispatch(setCalories(calories));
    dispatch(setProtein(protein));
    dispatch(setFat(fat));
    dispatch(setCarbohydrates(carbohydrates));
};

export const saveProduct = () => (dispatch, getState) => {
    const state = getState();
    const {
        id,
        name,
        description,
        price,
        url,
        comments,
        calories,
        protein,
        fat,
        carbohydrates,
    } = state.editProduct;
    const product = {
        id,
        name,
        description,
        price,
        url,
        comments,
        calories,
        protein,
        fat,
        carbohydrates,
    };

    ProductService.updateProduct(product.id, product);
};