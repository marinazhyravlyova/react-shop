import { connect } from 'react-redux';
import RegistrationComponent from './component';
import {
    signUp,
    addUserEmail,
    addUserName,
    addPassword,
    addRepeatPassword,
} from './action';

const mapStateToProps = state => ({
    email: state.signUp.email,
    name: state.signUp.name,
    password: state.signUp.password,
    repeatPassword: state.signUp.repeatPassword,
    isValidPassword: state.signUp.isValidPassword,
});

const mapDispatchToProps = dispatch => ({
    onAddButtonClick: () => dispatch(signUp()),
    onEmailChange: (event) => dispatch(addUserEmail(event.target.value)),
    onNameChange: (event) => dispatch(addUserName(event.target.value)),
    onPasswordChange: (event) => dispatch(addPassword(event.target.value)),
    onRepeatPasswordChange: (event) => dispatch(addRepeatPassword(event.target.value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegistrationComponent);