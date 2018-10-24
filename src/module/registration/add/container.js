import { connect } from 'react-redux';
import RegistrationComponent from './component';
import {
    createUser,
    addUserEmail,
    addUserName,
    addPassword,
    addRepeatPassword,
} from './action';

const mapStateToProps = state => ({
    email: state.addUser.email,
    name: state.addUser.name,
    password: state.addUser.password,
    repeatPassword: state.addUser.repeatPassword,
    isValidPassword: state.addUser.isValidPassword,
    users: state.addUser.users,
});

const mapDispatchToProps = dispatch => ({
    onAddButtonClick: () => dispatch(createUser()),
    onEmailChange: (event) => dispatch(addUserEmail(event.target.value)),
    onNameChange: (event) => dispatch(addUserName(event.target.value)),
    onPasswordChange: (event) => dispatch(addPassword(event.target.value)),
    onRepeatPasswordChange: (event) => dispatch(addRepeatPassword(event.target.value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegistrationComponent);