import React, { Component } from 'react';
import DayListComponent from "./day/list/component";
import './style.scss';

class HealthyFoodComponent extends Component {
    componentDidMount() {
        this.props.fetchData();
    }
    
    render() {
        const {
            days,
            allProducts,
            onDayAdd,
            onDayChange,
            onDayDelete,
            onEatingTimeAdd,
            onEatingTimeChange,
            onEatingTimeDelete,
            onProductAdd,
            onProductChange,
            onProductDelete,
        } = this.props;

        return (
            <div className='healthy-food-container'>
                <DayListComponent
                    days={days}
                    allProducts={allProducts}
                    onDayAdd={onDayAdd}
                    onDayChange={onDayChange}
                    onDayDelete={onDayDelete}
                    onEatingTimeAdd={onEatingTimeAdd}
                    onEatingTimeChange={onEatingTimeChange}
                    onEatingTimeDelete={onEatingTimeDelete}
                    onProductAdd={onProductAdd}
                    onProductChange={onProductChange}
                    onProductDelete={onProductDelete}
                />
            </div>
        )
    }
}

export default HealthyFoodComponent;