import  { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AuthorizationComponent from './component';
import {
    setUserEmail,
    setUserPassword,
    singIn,
} from './action';

const mapStateToProps = state => ({
    email: state.signIn.email,
    password: state.signIn.password,
    signInError: state.signIn.signInError,
});

const mapDispatchToProps = dispatch => ({
    onSingInButtonClick: () => dispatch(singIn()),
    onEmailChange: (event) => dispatch(setUserEmail(event.target.value)),
    onPasswordChange: (event) => dispatch(setUserPassword(event.target.value)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthorizationComponent));