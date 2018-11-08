import { START_LOADING, STOP_LOADING } from '../../action-types';

export const startLoading = () => ({
    type: START_LOADING,
    loading: true,
});

export const stopLoading = () => ({
    type: STOP_LOADING,
    loading: false,
});
