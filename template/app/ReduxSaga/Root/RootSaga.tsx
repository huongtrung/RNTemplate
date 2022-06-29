import {all, call, put, takeLatest} from 'redux-saga/effects'
import {rootActions} from '@/ReduxSaga/Root/RootRedux'
import ApiUtil from '@/Utils/ApiUtil'

export function* watchRootSaga() {
  yield all([takeLatest(rootActions.getUsers.type, handleGetUsers)])
  yield all([takeLatest(rootActions.setUsers.type, setUsers)])
}

function* handleGetUsers(): any {
  try {
    yield put(rootActions.displayLoading())
    const api = () => ApiUtil.fetch('users', {method: 'GET'})
    console.log({api})
    const response = yield call(api)
    yield put(rootActions.hideLoading())
    if (response?.status === 200 && response?.data) {
      yield put(rootActions.getUsersSuccess(response?.data))
      console.log('Success')
    } else {
      console.log('failed')
    }
  } catch (error) {
    console.log('err', error)
    yield put(rootActions.hideLoading())
  }
}

function* setUsers(action: any): any {
  try {
    yield put(rootActions.displayLoading())
    const {params} = action.payload
    const api = () =>
      ApiUtil.fetch('users', {method: 'POST', data: params})
    const response = yield call(api)
    yield put(rootActions.hideLoading())
    if (response && response?.status === 200) {
      console.log('set users success')
    } else {
      console.log('set users failed')
    }
  } catch (error) {
    console.log('err', error)
    yield put(rootActions.hideLoading())
  }
}
