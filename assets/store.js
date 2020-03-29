import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "../assets/store/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(reducer, enhancer);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
