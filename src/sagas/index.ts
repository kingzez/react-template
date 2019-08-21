import { all, put, takeEvery } from 'redux-saga/effects'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// Register all your watchers
export default function* rootSagas() {
  yield all([watchIncrementAsync()])
}
