import React, { Component } from 'react';
import './style.scss';

export default class SortTollBarComponent extends Component {
    constructor() {
        super();
        this.state = {
            sortingType: '',
        };

        this.onSortingType = this.onSortingType.bind(this);
    }

    onSortingType(typeButton){
        const sortingType = typeButton;

        this.setState({
            sortingType,
        });
        this.props.onSortingType(sortingType);
    }

    render() {
        return(<div className="toggle">
            <button
                className="toggle-button"    
                onClick={() => this.onSortingType(true)}
            ><img src="https://png.icons8.com/ios/40/999/up3.png"/></button>
            <button
                className="toggle-button"
                onClick={() => this.onSortingType(false)}
            ><img src="https://png.icons8.com/ios/40/999/down2.png"/></button>
        </div>);
    }
}
