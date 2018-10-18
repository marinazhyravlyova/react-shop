import {
    BASKET_ADD_PRODUCT,
    BASKET_ADD_PRODUCT_ID,
    BASKET_SET_PRODUCTS,
} from "../../action-types";

const initialState = {
    productIds: [],
    productsInBasket: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case BASKET_ADD_PRODUCT_ID: {
            return {
                ...state,
                productIds: [...state.productIds, action.product.id],
            }
        }

        case BASKET_ADD_PRODUCT: {
            return {
                ...state,
                productsInBasket: [...state.productsInBasket, action.product],
            }
        }

        case BASKET_SET_PRODUCTS: {
            return {
                ...state,
                productsInBasket: action.products,
            }
        }

        default:
            return state;
    }
};
