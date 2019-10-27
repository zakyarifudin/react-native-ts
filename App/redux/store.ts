import { createStore, combineReducers, Store, applyMiddleware, compose } from "redux";
// import { reducer as formReducer } from "redux-form";
// import { routerReducer, routerMiddleware } from "react-router-redux";
//import createSagaMiddleware from "redux-saga";
import reducers from "../redux/rootReducers";
import { stateTypes } from "../redux/stateTypes"
//import rootSaga from "../redux/rootSagas";

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [ sagaMiddleware];



const store: Store<stateTypes> = createStore(
  combineReducers({
    ...reducers,
  }),
  //compose(applyMiddleware(...middlewares))
  //composeEnhancers(applyMiddleware(...middlewares))
);
//sagaMiddleware.run(rootSaga);
export { store };