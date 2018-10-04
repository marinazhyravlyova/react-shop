import React, { Component } from 'react';

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
                <label>Search:</label>
                <input
                    value={this.props.searchValue}
                    onChange={this.onSearchValueChange}
                    placeholder='type for search'
                />
            </div>
        );
    }
}