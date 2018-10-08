import {
    SET_ID,
    SET_NAME,
    SET_DESCRIPTION,
    SET_PRICE,
    SET_URL,
    SET_VALIDATION_STATE_PRICE,
} from "../../action-types";

const initialState = {
    id: '',
    name: '',
    description: '',
    price: '',
    url: '',
    isValidPrice: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ID: {
            return {
                ...state,
                id: action.id,
            }
        }
        
        case SET_NAME: {
            return {
                ...state,
                name: action.name,
            }
        }

        case SET_DESCRIPTION: {
            return {
                ...state,
                description: action.description,
            }
        }
        
        case SET_PRICE: {
            return {
                ...state,
                price: action.price,
            }
        }
        
        case SET_URL: {
            return {
                ...state,
                url: action.url,
            }
        }
        
        case SET_VALIDATION_STATE_PRICE: {
            return {
                ...state,
                isValidPrice: action.isValid,
            }
        }

        default:
            return state;
    }
};
