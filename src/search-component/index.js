import React, { Component } from 'react';

export default class SearchComponent extends Component {
    constructor(...rest) {
        super(...rest);
        
        this.onSearchValueChange = this.onSearchValueChange.bind(this);
        
        //TODO Оставил пример с прошлого кода, чтобы ты смогла понять как прошлый код преобразовался в реакт,
        //TODO тут раньше по кнопке производился поиск, я все же решил производить поиск спразу по вводу
        // const searchContainer = document.getElementById('search-component');
        //
        // searchContainer.innerHTML += `
        //         <input id="input-search" type="text"/>
        //         <button id="btn-search">Search</button></br>
        //     `;
        // this.onClick = onClick;
        // this.button = document.getElementById('btn-search');
        // this.criterionSearch = document.getElementById('input-search');
        //
        // this.button.onclick = () => {
        //     const criterionSearch = this.criterionSearch.value;
        //
        //     this.onClick(criterionSearch);
        // };
    }

    onSearchValueChange(event) {
        //TODO Тут event обычный объект JS, чтобы взять значени, нужно сделать так:
        const value = event.target.value;
        
        //TODO А теперь пробрасываем это значение наверх.
        //TODO В main.js сработает метод onSearchValueChange
        //      <SearchComponent
        //          ...
        //          searchValueChange={this.onSearchValueChange}
        //      />
        this.props.searchValueChange(value);
    }
    
    render() {
        return (
            <div className='search-component'>
                <label>Search:</label>
                <input
                    //TODO Почитай что такое props в реакте, но тут это searchValue 
                    //TODO и оно связано с searchValue, которое в main.js
                    //      <SearchComponent
                    //          searchValue={this.state.searchValue}
                    //          ...
                    //      />
                    value={this.props.searchValue}
                    onChange={this.onSearchValueChange}
                    placeholder='type for search'
                />
            </div>
        );
    }
}