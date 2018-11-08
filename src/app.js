import React, {Component, Fragment} from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import MainPage from './module/main/container';
import AddProductPage from './module/product/add/container';
import EditProductPage from './module/product/edit/container';
import BasketPage from "./module/basket/container";
import SignUpPage from "./module/authorization/sign-up/container";
import SignInPage from "./module/authorization/sign-in/container";
import Header from "./common/header/container";
import Spinner from "./common/loader/component";

const ProtectedRoute = ({ component: Component, canAccess, ...rest }) => (
    <Route {...rest} render={props => (canAccess ? <Component {...props} /> : <Redirect to='/'/>)}/>
);

class App extends Component {
    render() {
        const {
            authorizedUser,
            authorizationProcessInProgress,
        } = this.props;
        const isAuthorized = authorizedUser;
        
        return (
            <div>
                {(() => {
                    if (authorizationProcessInProgress) {
                        return <Spinner/>;
                    }
                    
                    return (
                        <Fragment>
                            <Header/>
                            <Switch>
                                <Route exact path='/main' component={MainPage}/>
                                <Route exact path='/product/new' component={AddProductPage}/>
                                <Route exact path='/product/:productId' component={EditProductPage}/>
                                <Route exact path='/basket' component={BasketPage}/>
                                <Route exact path='/sign-up' component={SignUpPage}/>
                                <Route exact path='/sign-in' component={SignInPage}/>
                                <Redirect exact from='/' to='/main'/>
                                <ProtectedRoute
                                    exact
                                    path='/product/:productId'
                                    component={isAuthorized ? EditProductPage : EditProductPage}
                                />
                            </Switch>
                        </Fragment>
                    )
                })()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authorizationProcessInProgress: state.authReducer.authorizationProcessInProgress,
});

export default withRouter(connect(
    mapStateToProps,
)(App));