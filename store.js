import { createStore } from "redux";

import appReducers from './store/reducers/inbdex';


const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);