
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchBooks(action) {
  const currentKidId = localStorage.getItem('current_kid_id')
  parseInt(currentKidId)
  try {
    const response = yield axios({
      method: 'GET',
      url: '/books',
      headers: { currentKidId }
    });
    console.log('currentKidId---->', currentKidId)
    console.log('get all books:', response.data);
    yield put({ type: 'SET_BOOKS', payload: response.data });

  } catch {
    console.log('get all books error');
  }

}

function* fetchCompleted() {
  const currentKidId = localStorage.getItem('current_kid_id')
  
  try {
    const response = yield axios({
      method: 'GET',
      url: `/books`,
      headers: { currentKidId }
    });
    console.log('GET Completed Books:', response.data);
    yield put({ type: 'SET_COMPLETED_BOOKS', payload: response.data });

  } catch {
    console.log('GET/COMPLETED books error');
  }

}


















function* createBooks(action) {
  const currentKidId = localStorage.getItem('current_kid_id')
  try {
    const response = yield axios({
      method: 'POST',
      url: '/books',
      headers: { currentKidId },
      data: action.payload
    })
    console.log(response)
    yield put({
      type: 'FETCH_BOOKS'
    })
  } catch {
    console.log('ERROR/POST Books');
  }
}

function* deleteBooks(action) {
  const currentKidId = localStorage.getItem('current_kid_id')
  try {
    const response = yield axios({
      method: 'DELETE',
      url: `/books/${action.payload}`,
      headers: { currentKidId }
    })
    yield put({
      type: 'FETCH_BOOKS'
    })
  } catch {
    console.log('ERROR/DELETE Books');
  }
}

function* completeBook(action) {
  const currentKidId = localStorage.getItem('current_kid_id')
  try {
    const response = yield axios({
      method: 'PUT',
      url: `/books/${action.payload}`,
      headers: { currentKidId }
    })
    yield put({
      type: 'FETCH_BOOKS'
    })
  } catch {
    console.log('ERROR/COMPLETE Books');
  }
}




function* booksSaga() {
  yield takeLatest('FETCH_BOOKS', fetchBooks);
  yield takeLatest('CREATE_BOOKS', createBooks);
  yield takeLatest('DELETE_BOOKS', deleteBooks);
  yield takeLatest('COMPLETED_BOOK', completeBook);
  yield takeLatest('FETCH_COMPLETED_BOOKS',fetchCompleted)


};

export default booksSaga;