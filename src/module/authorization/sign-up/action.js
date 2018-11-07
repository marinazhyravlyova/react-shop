import {
    ADD_USER_EMAIL,
    ADD_USER_NAME,
    ADD_USER_PASSWORD,
    ADD_USER_REPEAT_PASSWORD,
} from "../../../action-types";
import AuthService from '../../authorization/service';
import {authorize} from "../action";

export const addUserEmail = email => ({
    type: ADD_USER_EMAIL,
    email,
});

export const addUserName = name => ({
    type: ADD_USER_NAME,
    name,
});

export const addPassword = password => ({
    type: ADD_USER_PASSWORD,
    password,
});

export const addRepeatPassword = repeatPassword => ({
    type: ADD_USER_REPEAT_PASSWORD,
    repeatPassword,
});

export const signUp = () => async (dispatch, getState) => {
    const state = getState();
    const { email, name, password } = state.signUp;
    const { data: userData } = await AuthService.signUp({email, name, password });

    dispatch(authorize(userData));
};