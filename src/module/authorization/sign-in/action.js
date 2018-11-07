import {
    SET_USER_EMAIL,
    SET_USER_PASSWORD,
    EMAIL_OR_PASSWORD_NOT_EXIST,
    SET_SIGN_UP_ERROR,
} from "../../../action-types";
import { authorize } from '../action'; 

import AuthService from '../../authorization/service';

export const setUserEmail = email => ({
    type: SET_USER_EMAIL,
    email,
});

export const setUserPassword = password => ({
    type: SET_USER_PASSWORD,
    password,
});

export const setSignUpError = error => ({
    type: SET_SIGN_UP_ERROR,
    error,
});

export const singIn = () => async (dispatch, getState) => {
    const state = getState();
    const { email, password } = state.signIn;
    const { data: userData } = await AuthService.signIn(email, password);

    if (userData === EMAIL_OR_PASSWORD_NOT_EXIST) {
        dispatch(setSignUpError('error'));
    } else {
        dispatch(authorize(userData));
    }
};