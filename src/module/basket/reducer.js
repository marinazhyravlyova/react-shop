import {
    BASKET_ADD_PRODUCT,
    BASKET_ADD_PRODUCT_ID,
    BASKET_SET_PRODUCTS,
    BASKET_SET_PRODUCT_IDS,
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
                productIds: [...state.productIds, action.productId],
            }
        }

        case BASKET_ADD_PRODUCT: {
            return {
                ...state,
                productIds: [...state.productIds, action.product.id],
            }
        }

        case BASKET_SET_PRODUCT_IDS: {
            return {
                ...state,
                productIds: action.productIds,
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
