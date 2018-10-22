import React, { Component } from 'react';
import './style.scss';

export default class SearchComponent extends Component {
    constructor(...rest) {
        super(...rest);
        
        this.onSearchValueChange = this.onSearchValueChange.bind(this);
    }

    onSearchValueChange(event) {
        const value = event.target.value;
        
        this.props.searchValueChange(value);
    }
    
    render() {
        return (
            <div className='search-component'>
                <div>
                    <input
                        value={this.props.searchValue}
                        onChange={this.onSearchValueChange}
                        placeholder='Type for search'
                    />
                </div>
            </div>
        );
    }
}