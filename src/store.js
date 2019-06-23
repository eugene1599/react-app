import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import allReducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// import configureStore from './redux/configure-store'

// const store = configureStore({
//   reducer: allReducers,
//   middleware: [composeWithDevTools(applyMiddleware(thunk))]
// })
const store = createStore(allReducers, applyMiddleware(thunk));


// const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
