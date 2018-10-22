import React, {Component} from 'react';
import ToggleComponent from '../toggle/component';
import './style.scss';

export default class SortTollBarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: '',
            sortingType: true,
            property: props.properties[0],
        };

        this.changeOption = this.changeOption.bind(this);
        this.onSortingType = this.onSortingType.bind(this);
    }

    changeOption(event) {
        const property = event.target.value;
        this.setState({
            property,
        });

        this.props.sortProducts(property, this.state.sortingType);
    }

    onSortingType(sortingType) {
        this.setState({
            sortingType,
        });
        this.props.sortProducts(this.state.property, sortingType);
    }

    render() {
        return (
            <div className="sort-products">
                <select className='sorting-name' onChange={this.changeOption}>
                    {(this.props.properties || []).map((property, index) => (
                        <option
                            value={property}
                            key={index}
                        >
                            {property}
                        </option>)
                    )}
                </select>
                <ToggleComponent
                    onSortingType={this.onSortingType}
                />
            </div>
        );
    }
}
