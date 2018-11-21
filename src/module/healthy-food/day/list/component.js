import React, { Component, Fragment } from 'react';
import DayComponent from '../item/component';
import './style.sass';

export default class DaysComponent extends Component {
    state = {
        selectedDayId: null,
    };
    
    setSelectedDay = (dayId)  => this.setState({ selectedDayId: dayId });

    onDayClick = (day) => this.setSelectedDay(day.id);

    onDayAdd = () => {
        const { onDayAdd } = this.props;

        onDayAdd({
            date: Date.now(),
        })
    };
    
    render() {
        const {
            days,
            allProducts,
            onDayChange,
            onDayDelete,
            onEatingTimeAdd,
            onEatingTimeChange,
            onEatingTimeDelete,
            onProductAdd,
            onProductChange,
            onProductDelete,
        } = this.props;
        const { selectedDayId } = this.state;
        const selectedDay = (days || []).find(({ id }) => id === selectedDayId);

        return (
            <Fragment>
                <div className='day-tabs'>
                    {(days || []).map(day => (
                        <div className={`day-tab selectable-item ${selectedDayId === day.id ? 'selected' : '' } `}
                             onClick={() => this.onDayClick(day)}
                        >
                            {new Date(day.date || Date.now()).getDay()}
                            <span className="action-item" onClick={() => onDayDelete(day)}>X</span>
                        </div>
                    ))}
                    <div className='new day-tab'>
                        <button
                            onClick={this.onDayAdd}
                        >
                            Add new day
                        </button>
                    </div>
                </div>
                {(() => {
                    if (selectedDay) {
                        return (
                            <DayComponent
                                allProducts={allProducts}
                                day={selectedDay}
                                onDayChange={onDayChange}
                                onEatingTimeAdd={onEatingTimeAdd}
                                onEatingTimeChange={onEatingTimeChange}
                                onEatingTimeDelete={onEatingTimeDelete}
                                onProductAdd={onProductAdd}
                                onProductChange={onProductChange}
                                onProductDelete={onProductDelete}
                            />
                        ); 
                    }
                    
                    return null;
                })()}
            </Fragment>
        );
    }
}