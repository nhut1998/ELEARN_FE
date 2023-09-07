import createSagaMiddleware from "@redux-saga/core";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import rootSaga from "./saga";
const sagaMiddleware = createSagaMiddleware()

const middlewares:Middleware[] = [sagaMiddleware];

const store = configureStore({
reducer,
middleware: (gd) => gd({ serializableCheck: false}).concat(...middlewares)

});

sagaMiddleware.run(rootSaga);

export default store;