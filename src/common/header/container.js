import {connect} from 'react-redux';
import HeaderComponent from './component';
import { signOut } from '../../module/authorization/action';

const mapStateToProps = state => ({
    user: state.authReducer.authorizedUser,
});

const mapDispatchToProps = dispatch => ({
    onSignOutClick: () => dispatch(signOut()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderComponent);