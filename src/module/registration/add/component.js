import React, { Component } from 'react';
import './style.scss';

export default class RegistrationComponent extends Component{
    render() {
        return(<div className="new-user">
            <div className="title">Registration</div>
            <div className="user-container">
                <div className="field-fill">
                    <span>Your email: </span>
                    <input
                        value={this.props.email}
                        onChange={this.props.onEmailChange}
                    />
                </div>
                <div className="field-fill">
                    <span>Your name: </span>
                    <input
                        value={this.props.name}
                        onChange={this.props.onNameChange}
                    />
                </div>
                <div className="field-fill">
                    <span>Password: </span>
                    <input
                        value={this.props.password}
                        onChange={this.props.onPasswordChange}
                    />
                </div>
                <div className="field-fill">
                    <span>Repeat Password: </span>
                    <input
                        value={this.props.repeatPassword}
                        onChange={this.props.onRepeatPasswordChange}
                    />
                </div>
            </div>
            <button className="btn-add-user" onClick={this.props.onAddButtonClick}>Registration</button>
        </div>);
    }
}