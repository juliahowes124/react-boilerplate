import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

function* getStringsAsync() {
  async function getStrings() {
    const res = await axios.get('/api');
    return res.data.strings;
  }
  const strings = yield getStrings();
  yield put({ type: 'SET_STRINGS', strings });
}

function* addStringAsync(action) {
  async function addString() {
    const res = await axios.post('/api', { string: action.string });
    return res.data.strings;
  }
  const strings = yield addString();
  yield put({ type: 'SET_STRINGS', strings });
}

function* watchGetStringsAsync() {
  yield takeEvery('GET_STRINGS_ASYNC', getStringsAsync);
}

function* watchAddStringAsync() {
  yield takeEvery('ADD_STRING_ASYNC', addStringAsync);
}

export default function* rootSaga() {
  yield all([watchAddStringAsync(), watchGetStringsAsync()]);
}
