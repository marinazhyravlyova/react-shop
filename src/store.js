import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import {
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    SET_PRODUCTS,
    DELETE_PRODUCT,
} from './action-types';
import editProductReducer  from './pages/edit-product/reducer';
import addProductReducer  from './pages/add-product/reducer';
import basketReducer  from './pages/basket/reducer';

let initialState = {
    products: [],
    product: {},
    comments: [
        {
             id: 0,
            productId: 3,
            content: 'This is a very good jacket. I am very pleased with the purchase.',
        },
        {
            id: 1,
            productId: 1,
            content: 'This is a very good jacket.',
        },
        {
            id: 2,
            productId: 3,
            content: 'This is a very nice jacket.',
        },
        {
            id: 3,
            productId: 4,
            content: 'This is a very beautiful jacket.',
        },
    ],
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products, action.product],
            };
        }

        case UPDATE_PRODUCT: {
            const productToUpdate = action.product;

            return {
                ...state,
                products: state.products.map(product => {
                    if (product.id === productToUpdate.id) {
                        return productToUpdate;
                    }

                    return product;
                }),
            };
        }
        
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.products,
            };
        }
        
        case DELETE_PRODUCT: {
            const product = action.product;

            return {
                ...state,
                products: state.products.filter((object) => object.id !== product.id),
            };
        }

        default:
            return state;
    }
};

export default createStore(
    combineReducers({
        editProduct: editProductReducer,
        addProduct: addProductReducer,
        basket: basketReducer,
        main: applicationReducer,     
    }),
    routerReducer,
    applyMiddleware(
        routerMiddleware(createHistory()),
        loggerMiddleware,
        thunkMiddleware,
    ),
);