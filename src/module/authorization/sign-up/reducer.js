import {
    ADD_USER_EMAIL,
    ADD_USER_NAME,
    ADD_USER_PASSWORD,
    ADD_USER_REPEAT_PASSWORD,
} from "../../../action-types";

const initialState = {
    email: '',
    name: '',
    password: '',
    repeatPassword: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_EMAIL: {
            return {
                ...state,
                email: action.email,
            }
        }

        case ADD_USER_NAME: {
            return {
                ...state,
                name: action.name,
            }
        }

        case ADD_USER_PASSWORD: {
            return {
                ...state,
                password: action.password,
            }
        }

        case ADD_USER_REPEAT_PASSWORD: {
            return {
                ...state,
                repeatPassword: action.repeatPassword,
            }
        }

        default:
            return state;
    }
};