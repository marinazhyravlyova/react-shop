import React, {Component, Fragment} from 'react';
import './style.scss';

class HealthyFoodComponent extends Component {
    render() {
        const {
            days,
            newEatingTimeName,
            onNewEatingTimeNameChange,
            selectedDayId,
            selectedEatingTimeId,
            selectedProductId,
            onDayTabClick,
            onEatingTimeClick,
            onNewEatingTimeItemClick,
            onProductDelete,
            newProductName,
            onNewProductNameChange,
            newProductWeight,
            onNewProductWeightChange,
            onNewProductAdd,
            addNewDay,
            onSelectedProductNameChange,
            onSelectedProductWeightChange,
            onSelectedProductSaveClick,
            onProductEditClick,
        } = this.props;

        return (
            <div className='healthy-food-container'>
                <div className='day-tabs'>
                    {(days || []).map(day => (
                        <div className={`day-tab selectable-item ${selectedDayId === day.id ? 'selected' : '' } `}
                             onClick={() => onDayTabClick(day)}
                        >
                            {day.date.getDay()}
                        </div>
                    ))}
                    <div className='new day-tab'>
                        <button
                            onClick={addNewDay}
                        >
                            Add new day
                        </button>
                    </div>
                </div>
                {(() => {
                    const selectedDay = (days || []).find(({id}) => id === selectedDayId);

                    if (selectedDay) {
                        return (
                            <div className='selected-day'>
                                <div className='eating-times'>
                                    {(selectedDay.eatingTimes || []).map(eatingTime => (
                                        <div
                                            className={`eating-time-item selectable-item ${selectedEatingTimeId === eatingTime.id ? 'selected' : '' }`}
                                            onClick={() => onEatingTimeClick(eatingTime)}
                                        >
                                            {eatingTime.name}
                                        </div>
                                    ))}
                                    <div className='new eating-time-item'>
                                        <input
                                            value={newEatingTimeName}
                                            onChange={onNewEatingTimeNameChange}
                                        />
                                        <button
                                            onClick={onNewEatingTimeItemClick}
                                        >
                                            Add new eating time item
                                        </button>
                                    </div>
                                </div>
                                <div className='selected-eating-time'>
                                    {(() => {
                                        const selectedEatingTime = (selectedDay.eatingTimes || []).find(({id}) => id === selectedEatingTimeId);

                                        if (selectedEatingTime) {
                                            return (
                                                <div className='eating-time-product-list'>
                                                    {(selectedEatingTime.products || []).map(product => {
                                                        if (selectedProductId === product.id) {
                                                            return (
                                                                <Fragment>
                                                                    <input
                                                                        value={product.name}
                                                                        onChange={onSelectedProductNameChange}
                                                                    />
                                                                    <input
                                                                        value={product.weight}
                                                                        onChange={onSelectedProductWeightChange}
                                                                    />
                                                                    <button
                                                                        onClick={onSelectedProductSaveClick}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </Fragment>
                                                            );
                                                        }
                                                            
                                                        return (
                                                            <div className='eating-time-product-item'>
                                                                <div className='product-name'>{product.name}</div>
                                                                <div className='product-weight'>{product.weight}</div>
                                                                <div className='action-bar'>
                                                                    <div className='action-item'
                                                                         onClick={() => onProductEditClick(product)}>
                                                                        Edit
                                                                    </div>
                                                                    <div className='action-item'
                                                                         onClick={() => onProductDelete(product)}>
                                                                        Delete
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                    <div className='new eating-time-product-item'>
                                                        <input
                                                            value={newProductName}
                                                            onChange={onNewProductNameChange}
                                                        />
                                                        <input
                                                            value={newProductWeight}
                                                            onChange={onNewProductWeightChange}
                                                        />
                                                        <button
                                                            onClick={onNewProductAdd}
                                                        >
                                                            Add new product
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return null;
                                    })()}
                                </div>
                            </div>
                        );
                    }

                    return null;
                })()}
                <div className='result-table'>
                    Table
                </div>
            </div>
        )
    }
}

export default HealthyFoodComponent;