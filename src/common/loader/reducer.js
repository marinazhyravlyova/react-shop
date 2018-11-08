import { START_LOADING, STOP_LOADING } from '../../action-types';

const initialState = false;

export default (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
        case STOP_LOADING: {
            return action.loading;
        }
        default: return state;
    }
};
