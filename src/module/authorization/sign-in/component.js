import React, {Component} from 'react';
import './style.scss';

export default class AuthorizationComponent extends Component {
    render() {
        const { signInError } = this.props;
        
        return (
            <div className="sign-in">
                <div className="title">Sign in</div>
                <div className={`sign-in-container ${signInError}`}>
                    <div className="">
                        <span>Email:</span>
                        <input
                            value={this.props.email}
                            onChange={this.props.onEmailChange}
                        />
                    </div>
                    <div className="">
                        <span>Password:</span>
                        <input
                            value={this.props.password}
                            onChange={this.props.onPasswordChange}
                        />
                    </div>
                </div>
                <button className="edit-product" onClick={this.props.onSingInButtonClick}>Sign in</button>
            </div>
        );
    }
}
