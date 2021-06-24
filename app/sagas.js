import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

function* getStringsAsync() {
  async function getStrings() {
    const res = await axios.get('/api');
    return res.data.strings;
  }
  const strings = yield getStrings();
  yield put({ type: 'GET_STRINGS_ASYNC', strings });
}

function* addStringAsync(action) {
  async function addString() {
    const res = await axios.post('/api', { string: action.string });
    return res.data.strings;
  }
  try {
    const strings = yield addString();
    yield put({ type: 'ADD_STRING_ASYNC', strings });
  } catch (error) {
    yield put({ type: 'ADD_REQUEST_FAILED', error });
  }
}

function* watchGetStringsAsync() {
  yield takeEvery('GET_STRINGS', getStringsAsync);
}

function* watchAddStringAsync() {
  yield takeEvery('ADD_STRING', addStringAsync);
}

export default function* rootSaga() {
  yield all([watchAddStringAsync(), watchGetStringsAsync()]);
}
