import React, { Component } from 'react';
import './style.scss';

export default class Spinner extends Component {
    render() {
        return (
            <div className='showbox'>
                <div className="ng-loader">
                    <svg className="ld-circular"
                        viewBox="25 25 50 50"
                    >
                        <circle
                            className="ld-path"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                        />
                    </svg>
                </div>
            </div>
        );
    }
}
