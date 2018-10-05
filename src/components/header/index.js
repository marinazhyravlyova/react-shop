import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class HeaderComponent extends Component{
    constructor() {
        super();
    }
    
    render() {
        return(<div className="header">
            <div className="main-link">
                <Link to='/'>Main</Link>
            </div>
            <div className="add-link">
                <Link to='/product/new'>Add new product</Link>
            </div>
            
        </div>);
    }
}
