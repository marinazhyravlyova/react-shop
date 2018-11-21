import {
    HEALTHY_FOOD_SET_HEALTHY_FOOD,
    HEALTHY_FOOD_SET_PRODUCTS,
} from "../../action-types";

const initialState = {
    id: null,
    days: [],
    products: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HEALTHY_FOOD_SET_HEALTHY_FOOD: {
            return {
                ...state,
                days: action.healthyFood.days,
                id: action.healthyFood.id,
            };
        }

        case HEALTHY_FOOD_SET_PRODUCTS: {
            return {
                ...state,
                products: action.products,
            };
        }

        default:
            return state;
    }
};
