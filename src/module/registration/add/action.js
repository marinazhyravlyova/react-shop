import {
    ADD_USER_EMAIL,
    ADD_USER_NAME,
    ADD_USER_PASSWORD,
    ADD_USER_REPEAT_PASSWORD,
} from "../../../action-types";
import RegistrationService from '../../registration/service';

//const isNumeric = (str) => /^\d+$/.test(str);

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

export const createUser = () => (dispatch, getState) => {
    const state = getState();
    const {
        email,
        name,
        password,
        repeatPassword,
    } = state.addUser;
    const user = {
        email,
        name,
        password,
        repeatPassword,
    };

    RegistrationService.createUser(user)
};






/*export const addPassword = password => (dispatch, getState) => {
    dispatch({
        type: ADD_USER_PASSWORD,
        password,
    });
    dispatch(validatePassword(password));
};*/


// export const validatePassword = (password) => (dispatch) => {
//    
//     const isValid = isNumeric(price);
//
//     dispatch({
//         type: ADD_VALIDATION_STATE_PRICE,
//         isValid,
//     })
// };