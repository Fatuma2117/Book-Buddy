import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';




function* apiBooks(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url:  `https://magicblox.p.rapidapi.com/v1/book?title=${action.payload}`,
      headers: {
              'X-RapidAPI-Host': 'magicblox.p.rapidapi.com',
              'X-RapidAPI-Key': 'process.env.X-RapidAPI-Key'
            }
    });
   
    console.log('API RESPONSE-------------->', response.data);
    yield put({ type: 'SET_RESULTS', payload: response.data });

  } catch {
    console.log('API ERROR');
  }

}

function* apiSaga() {
  yield takeLatest('FETCH_API', apiBooks);


};






export default apiSaga;

