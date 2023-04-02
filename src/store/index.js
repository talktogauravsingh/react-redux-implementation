import { applyMiddleware, combineReducers, createStore } from "redux";
import { snackBarReducer } from "./snackbar/reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    snackBarData : snackBarReducer
});

const configureStore = () => {
    const middleware = [thunkMiddleware];
    
    const middlewareEnhancer = applyMiddleware(...middleware);
    
    const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));
    
    return store;
    
}

export default configureStore;