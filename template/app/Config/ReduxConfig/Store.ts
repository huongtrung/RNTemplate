import {configureStore, MiddlewareArray} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'
import reduxSaga, {rootReducer} from '@/ReduxSaga'

const sagaMiddleware = createSagaMiddleware()

const reducers = {
  root: rootReducer
}

const logger = createLogger({
  // ...options
})

export const store = configureStore({
  reducer: reducers,
  middleware: new MiddlewareArray().concat(sagaMiddleware, logger)
})

sagaMiddleware.run(reduxSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
