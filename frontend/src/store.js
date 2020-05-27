import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer} from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const composeEnhancer = window.__RDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;