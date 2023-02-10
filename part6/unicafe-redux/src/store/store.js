import { createStore, combineReducers } from "redux";
import amauntReducer from '../reducers/reducer';

const reducers = combineReducers({
    amauntReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
