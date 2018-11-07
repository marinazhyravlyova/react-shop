import {
    SET_SIGN_UP_ERROR,
    SET_USER_EMAIL,
    SET_USER_PASSWORD,
    SET_AUTHORIZED_USER_DATA,
} from "../../../action-types";

const initialState = {
    email: '',
    password: '',
    signInError: '',
    authorizationUser: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_EMAIL: {
            return {
                ...state,
                email: action.email,
                signInError: '',
            }
        }

        case SET_USER_PASSWORD: {
            return {
                ...state,
                password: action.password,
                signInError: '',
            }
        }
        
        case SET_SIGN_UP_ERROR: {
            return {
                ...state,
                signInError: action.error,
            }
        }

        default:
            return state;
    }
};
