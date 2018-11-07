import { push } from "react-router-redux";
import {
    START_AUTHORIZATION_PROCESS,
    STOP_AUTHORIZATION_PROCESS,
    SET_AUTHORIZED_USER_DATA,
} from '../../action-types';
import AuthService from "./service";

export const startAuthorizationProcess = () => ({
    type: START_AUTHORIZATION_PROCESS,
});

export const stopAuthorizationProcess = () => ({
    type: STOP_AUTHORIZATION_PROCESS,
});

export const authorize = authorizedData => async (dispatch) => {
    dispatch(startAuthorizationProcess());

    try {
        if (typeof authorizedData === 'string') {
            const { data: authorizedUser } = await AuthService.authorize(authorizedData);

            AuthService.setToken(authorizedUser.token);
            dispatch({
                type: SET_AUTHORIZED_USER_DATA,
                authorizedUser,
            });
            dispatch(push('/'));
        } else {
            AuthService.setToken(authorizedData.token);

            dispatch({
                type: SET_AUTHORIZED_USER_DATA,
                authorizedUser: authorizedData,
            });

            dispatch(push('/'));
        }
    } catch ({ message }) {
        console.log(message);
    } finally {
        dispatch(stopAuthorizationProcess());
    }
};