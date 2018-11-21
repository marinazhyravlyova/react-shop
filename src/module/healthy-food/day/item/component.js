import React, { Component, Fragment } from 'react';
import EatingTimesList from './eating-time/list/component';
import TableComponent from './table/component';

export default class DayComponent extends Component {
    render() {
        const {
            day,
            allProducts,
            onEatingTimeAdd,
            onEatingTimeChange,
            onEatingTimeDelete,
            onProductAdd,
            onProductChange,
            onProductDelete,
        } = this.props;

        return (
            <Fragment>
                <div className='selected-day'>
                    <EatingTimesList
                        allProducts={allProducts}
                        eatingTimes={day.eatingTimes}
                        onEatingTimeAdd={(...args) => onEatingTimeAdd(day, ...args)}
                        onEatingTimeChange={(...args) => onEatingTimeChange(day, ...args)}
                        onEatingTimeDelete={(...args) => onEatingTimeDelete(day, ...args)}
                        onProductAdd={(...args) => onProductAdd(day, ...args)}
                        onProductChange={(...args) => onProductChange(day, ...args)}
                        onProductDelete={(...args) => onProductDelete(day, ...args)}
                    />
                </div>
                <TableComponent
                    day={day}
                />
            </Fragment>
        );
    }
}