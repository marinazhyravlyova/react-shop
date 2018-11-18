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

const initialState = {
    id: '',
    name: '',
    description: '',
    price: '',
    url: '',
    comments: '',
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0,
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


        case SET_CALORIES: {
            return {
                ...state,
                calories: action.calories,
            }
        }

        case SET_PROTEIN: {
            return {
                ...state,
                protein: action.protein,
            }
        }

        case SET_FAT: {
            return {
                ...state,
                fat: action.fat,
            }
        }

        case SET_CARBOHYDRATES: {
            return {
                ...state,
                carbohydrates: action.carbohydrates,
            }
        }

        case SET_COMMENTS: {
            return {
                ...state,
                comments: action.comments,
            }
        }

        case ADD_COMMENT: {
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.comment,
                ]
            }
        }

        default:
            return state;
    }
};
