import React, { Component } from 'react';

export default class AddPropertiesComponent extends Component{
    
    constructor() {
        super();
        this.state = {
            propertyName: '',
            propertyValue: '',
        };
        this.onPropertyNameChange = this.onPropertyNameChange.bind(this);
        this.onPropertyValueChange = this.onPropertyValueChange.bind(this);
        this.onAddButtonClick = this.onAddButtonClick.bind(this);
    }

    onPropertyNameChange(event) {
        const value = event.target.value;
        this.setState({
            propertyName: value,
        });
    }
    
    onPropertyValueChange(event) {
        const value = event.target.value;
        this.setState({
            propertyValue: value,
        });
    }

    onAddButtonClick(){
        const { propertyName, propertyValue } = this.state;
        this.props.propertiesChange({ propertyName, propertyValue });
    }
    
    render() {
        return(<div>
            <input value={this.state.propertyName} onChange={this.onPropertyNameChange}/>
            <input value={this.state.propertyValue} onChange={this.onPropertyValueChange}/>
            <button onClick={this.onAddButtonClick}>Add</button>
        </div>);
    }
}
