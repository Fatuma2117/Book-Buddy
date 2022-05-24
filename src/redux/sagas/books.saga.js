
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchBooks(action) {
    const currentKidId = localStorage.getItem('current_kid_id')
    parseInt(currentKidId)
            try {
        const response = yield axios({
            method: 'GET',
            url:'/books',
            headers: {currentKidId}
          

        });
        console.log('currentKidId---->',currentKidId)
        console.log('get all books:', response.data);
        yield put({ type: 'SET_BOOKS', payload: response.data });

    } catch {
        console.log('get all books error');
    }
        
}

function* createBooks(action) {
    const currentKidId = localStorage.getItem('current_kid_id')

    try{
    const response = yield axios({
      method: 'POST',
      url: '/books',
      data: action.payload
    })
    console.log(response)

    yield put({
      type: 'FETCH_BOOKS'
    })
}catch{

    console.log('ERROR/POST Books');
}
  }







function* booksSaga() {
    yield takeLatest('FETCH_BOOKS', fetchBooks);
    yield takeLatest('CREATE_BOOKS', createBooks);

 
  };

  export default booksSaga;