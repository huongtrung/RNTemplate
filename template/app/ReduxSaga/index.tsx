import {all, fork} from 'redux-saga/effects'
import {watchRootSaga} from './Root/RootSaga'

export * from './Root'

export default function* reduxSaga() {
  yield all([fork(watchRootSaga)])
}
