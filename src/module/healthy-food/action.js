import {
    HEALTHY_FOOD_SET_SELECTED_DAY,
    HEALTHY_FOOD_SET_SELECTED_EATING_TIME_ITEM,
    HEALTHY_FOOD_SET_NEW_EATING_TIME_ITEM_NAME,
    HEALTHY_FOOD_SET_NEW_PRODUCT_NAME,
    HEALTHY_FOOD_SET_NEW_PRODUCT_WEIGHT,
    HEALTHY_FOOD_UPDATE_DAY,
    HEALTHY_FOOD_ADD_DAY,
} from '../../action-types';

let id = 0;
const getId = () => id++;

export const selectDay = day => (dispatch) => {
    dispatch({
        type: HEALTHY_FOOD_SET_SELECTED_DAY,
        day,
    });
};

export const updateDay = day => (dispatch) => {
    dispatch({
        type: HEALTHY_FOOD_UPDATE_DAY,
        day,
    });
};

export const addNewDay = () => (dispatch) => {
    const day = {
        id: getId(),
        date: new Date(),
        eatingTimes: [],
    };
    
    dispatch({
        type: HEALTHY_FOOD_ADD_DAY,
        day,
    });
    
    dispatch(selectDay(day));
    
    if (day.eatingTimes.length > 0) {
        dispatch(selectEatingTimeItem(day.eatingTimes[0]));
    }
};

export const selectEatingTimeItem = eatingTimeItem => (dispatch) => {
    dispatch({
        type: HEALTHY_FOOD_SET_SELECTED_EATING_TIME_ITEM,
        eatingTimeItem,
    });
};

export const addEatingTimeItem = () => (dispatch, getState) => {
    const state = getState();
    const { selectedDayId, newEatingTimeName, days } = state.healthyFood;
    const selectedDay = (days || []).find(({ id }) => id === selectedDayId);
    const eatingTime = {
        id: getId(),
        name: newEatingTimeName,
        products: [],
    };
    
    dispatch(updateDay({
        ...selectedDay,
        eatingTimes: [
            ...(selectedDay.eatingTimes || []),
            eatingTime,
        ],
    }));
    
    dispatch(selectEatingTimeItem(eatingTime));
};

export const setNewEatingTimeItemName = name => (dispatch) => {
    dispatch({
        type: HEALTHY_FOOD_SET_NEW_EATING_TIME_ITEM_NAME,
        name,
    });
};

export const addNewProduct = () => (dispatch, getState) => {
    const state = getState();
    const {
        selectedDayId,
        selectedEatingTimeId,
        days,
        newProductName,
        newProductWeight,
    } = state.healthyFood;
    const product = {
        id: getId(),
        name: newProductName,
        weight: newProductWeight,
    };
    const selectedDay = (days || []).find(({ id }) => id === selectedDayId);
    
    dispatch(updateDay({
        ...selectedDay,
        eatingTimes: (selectedDay.eatingTimes || []).map(eatingTime => {
            if (selectedEatingTimeId === eatingTime.id) {

                return {
                    ...eatingTime,
                    products: [
                        ...eatingTime.products,
                        product,
                    ],
                };
            }
            
            return eatingTime;
        }),
    }));
};

export const deleteProduct = (productId) => (dispatch, getState) => {
    const state = getState();
    const {
        days,
        selectedDayId,
        selectedEatingTimeId,
    } = state.healthyFood;
    const selectedDay = (days || []).find(({ id }) => id === selectedDayId);
    
    dispatch(updateDay({
        ...selectedDay,
        eatingTimes: (selectedDay.eatingTimes || []).map(eatingTime => {
            if (selectedEatingTimeId === eatingTime.id) {
                return {
                    ...eatingTime,
                    products: (eatingTime.products || []).filter(({ id }) => id !== productId),
                };
            }

            return eatingTime;
        }),
    }));
};

export const setNewProductName = (name) => (dispatch) => {
    dispatch({
        type: HEALTHY_FOOD_SET_NEW_PRODUCT_NAME,
        name,
    });
};

export const setNewProductWeight = (weight) => (dispatch) => {
    dispatch({
        type: HEALTHY_FOOD_SET_NEW_PRODUCT_WEIGHT,
        weight,
    });
};


