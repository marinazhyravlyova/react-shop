import {
    SET_AUTHORIZED_USER_DATA,
    SIGN_OUT,
    START_AUTHORIZATION_PROCESS,
    STOP_AUTHORIZATION_PROCESS,
} from '../../action-types';

const initialState = {
    authorizedUser: null,
    isUserAuthorised: false,
    authorizationProcessInProgress: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORIZED_USER_DATA: {
            return {
                ...state,
                isUserAuthorised: true,
                authorizedUser: action.authorizedUser,
            };
        }

        case SIGN_OUT: {
            return {
                ...state,
                authorizedUser: null,
                isUserAuthorised: false,
            };
        }

        case START_AUTHORIZATION_PROCESS: {
            return {
                ...state,
                authorizationProcessInProgress: true,
            };
        }

        case STOP_AUTHORIZATION_PROCESS: {
            return {
                ...state,
                authorizationProcessInProgress: false,
            };
        }

        default: return state;
    }
};

