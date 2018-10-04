import React, { Component } from 'react';

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
        return(<div>
            <button 
                onClick={() => this.onSortingType(true)}
            >Sort by decrease</button>
            <button
                onClick={() => this.onSortingType(false)}
            >Sort by increase</button>
        </div>);
    }
}
