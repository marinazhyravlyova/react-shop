import {
    ADD_ID,
    ADD_NAME,
    ADD_DESCRIPTION,
    ADD_PRICE,
    ADD_URL,
    ADD_VALIDATION_STATE_PRICE,
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