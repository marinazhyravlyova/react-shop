import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import BasketItemsContainer from "../../module/basket/item/container";
import './style.scss';

export default class HeaderComponent extends Component {
    render() {
        const { user, onSignOutClick } = this.props;

        return (
            <div className="header">
                <div className="main-link">
                    <Link to='/'>Main</Link>
                </div>
                {(() => {
                    if (!user) {
                        return (
                            <Fragment>
                                <div className="main-link">
                                    <Link to='/sign-up'>Sign Up</Link>
                                </div>
                                <div className="main-link">
                                    <Link to='/sign-in'>Sign In</Link>
                                </div>
                            </Fragment>
                        )
                    }
                    
                    return (
                        <div className="main-link">
                            <button onClick={onSignOutClick}>Sign out</button>
                        </div>
                    )
                })()}
                <div className="add-link">
                    <Link to='/product/new'>Add new product</Link>
                </div>
                {(() => {
                    if (user) {
                        return (
                            <div className="user-name">
                                Hello, {user.name}
                            </div>
                        );
                    }
                    
                    return null;
                })()}
                <div>
                    <Link to='/basket'>
                        <BasketItemsContainer/>
                    </Link>
                    <Link to='/healthy-food'>Healthy Food</Link>
                </div>
            </div>
        );
    }
}
