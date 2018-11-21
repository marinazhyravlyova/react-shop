import React, {Component, Fragment} from 'react';
import EatingTimeItem from "../item/component";

export default class EatingTimesList extends Component {
    state = {
        selectedEatingTimeId: null,
        newEatingTimeName: '',
    };

    setSelectedEatingTime = (eatingTimeId)  => this.setState({ selectedEatingTimeId: eatingTimeId });

    onEatingTimeClick = (eatingTime) => this.setSelectedEatingTime(eatingTime.id);

    onNewEatingTimeNameChange = (event) => {
        const newEatingTimeName = event.target.value;
        
        this.setState({ newEatingTimeName });
    };

    onEatingTimeAdd = () => {
        const name = this.state.newEatingTimeName;
        
        this.props.onEatingTimeAdd({
            name,
        });
    };

    render() {
        const {
            eatingTimes,
            allProducts,
            onEatingTimeDelete,
            onProductAdd,
            onProductChange,
            onProductDelete,
        } = this.props;
        const {
            selectedEatingTimeId,
            newEatingTimeName,
        } = this.state;
        const eatingTime = (eatingTimes || []).find(({ id }) => id === selectedEatingTimeId);
        
        return (
            <Fragment>
                <div className='eating-times'>
                    {(eatingTimes || []).map(eatingTime => (
                        <div
                            className={`eating-time-item selectable-item ${selectedEatingTimeId === eatingTime.id ? 'selected' : '' }`}
                            onClick={() => this.onEatingTimeClick(eatingTime)}
                        >
                            {eatingTime.name}
                            <span onClick={() => onEatingTimeDelete(eatingTime)}>X</span>
                        </div>
                    ))}
                    <div className='new eating-time-item'>
                        <input
                            value={newEatingTimeName}
                            onChange={this.onNewEatingTimeNameChange}
                        />
                        <button
                            onClick={this.onEatingTimeAdd}
                        >
                            Add new eating time item
                        </button>
                    </div>
                </div>
                {(() => {
                    if (eatingTime) {
                        return (
                            <EatingTimeItem
                                eatingTime={eatingTime}
                                allProducts={allProducts}
                                onProductAdd={(...args) => onProductAdd(eatingTime, ...args)}
                                onProductChange={(...args) => onProductChange(eatingTime, ...args)}
                                onProductDelete={(...args) => onProductDelete(eatingTime, ...args)}
                            />
                        );
                    }
                    
                    return null;
                })()}
            </Fragment>
        );
    }
}