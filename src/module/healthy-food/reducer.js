import {
    HEALTHY_FOOD_SET_SELECTED_DAY,
    HEALTHY_FOOD_SET_SELECTED_EATING_TIME_ITEM,
    HEALTHY_FOOD_SET_SELECTED_PRODUCT,
    HEALTHY_FOOD_SET_NEW_EATING_TIME_ITEM_NAME,
    HEALTHY_FOOD_UPDATE_DAY,
    HEALTHY_FOOD_SET_NEW_PRODUCT_NAME,
    HEALTHY_FOOD_SET_NEW_PRODUCT_WEIGHT,
    HEALTHY_FOOD_ADD_DAY,
} from "../../action-types";

const initialState = {
    days: [],
    selectedDayId: null,
    selectedEatingTimeId: null,
    selectedProductId: null,
    newEatingTimeName: '',
    newProductName: '',
    newProductWeight: 100,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HEALTHY_FOOD_SET_SELECTED_DAY: {
            return {
                ...state,
                selectedDayId: action.day.id,
            };
        }

        case HEALTHY_FOOD_SET_SELECTED_EATING_TIME_ITEM: {
            return {
                ...state,
                selectedEatingTimeId: action.eatingTimeItem.id,
            };
        }

        case HEALTHY_FOOD_SET_SELECTED_PRODUCT: {
            return {
                ...state,
                selectedProductId: action.product.id,
            };
        }

        case HEALTHY_FOOD_SET_NEW_EATING_TIME_ITEM_NAME: {
            return {
                ...state,
                newEatingTimeName: action.name,
            };
        }

        case HEALTHY_FOOD_UPDATE_DAY: {
            return {
                ...state,
                days: (state.days || []).map(day => {
                    if (day.id !== action.day.id) {
                        return day;
                    }
                    
                    return action.day;
                }),
            };
        }
        
        case HEALTHY_FOOD_ADD_DAY: {
            return {
                ...state,
                days: [
                    ...state.days,
                    action.day,
                ],
            };
        }

        case HEALTHY_FOOD_SET_NEW_PRODUCT_NAME: {
            return {
                ...state,
                newProductName: action.name,
            };
        }

        case HEALTHY_FOOD_SET_NEW_PRODUCT_WEIGHT: {
            return {
                ...state,
                newProductWeight: action.weight,
            };
        }

        default:
            return state;
    }
};
