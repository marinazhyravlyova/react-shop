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

const initialState = {
    id: '',
    name: '',
    description: '',
    price: '',
    url: '',
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0,
    isValidPrice: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ID: {
            return {
                ...state,
                id: action.id,
            }
        }

        case ADD_NAME: {
            return {
                ...state,
                name: action.name,
            }
        }

        case ADD_DESCRIPTION: {
            return {
                ...state,
                description: action.description,
            }
        }

        case ADD_PRICE: {
            return {
                ...state,
                price: action.price,
            }
        }

        case ADD_URL: {
            return {
                ...state,
                url: action.url,
            }
        }
        
        case ADD_CALORIES: {
            return {
                ...state,
                calories: action.calories,
            }
        }
        
        case ADD_PROTEIN: {
            return {
                ...state,
                protein: action.protein,
            }
        }
        
        case ADD_FAT: {
            return {
                ...state,
                fat: action.fat,
            }
        }
        
        case ADD_CARBOHYDRATES: {
            return {
                ...state,
                carbohydrates: action.carbohydrates,
            }
        }

        case ADD_VALIDATION_STATE_PRICE: {
            return {
                ...state,
                isValidPrice: action.isValid,
            }
        }

        default:
            return state;
    }
};