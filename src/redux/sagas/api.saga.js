import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// const apiSaga = {
//     method: 'GET',
//     url: 'https://magicblox.p.rapidapi.com/v1/book?',
//     headers: {
//       'X-RapidAPI-Host': 'magicblox.p.rapidapi.com',
//       'X-RapidAPI-Key': 'f010151a61msh66accc926c221e8p1a12a0jsn507a180bd783'
//     }
//   };
  
//   axios.request(apiSaga).then(function (response) {
//       console.log('API RESPONSE-------------->',response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });


function* apiBooks(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url:  'https://magicblox.p.rapidapi.com/v1/book?',
      headers: {
              'X-RapidAPI-Host': 'magicblox.p.rapidapi.com',
              'X-RapidAPI-Key': 'f010151a61msh66accc926c221e8p1a12a0jsn507a180bd783'
            }
    });
   
    console.log('API RESPONSE-------------->', response.data);
    // yield put({ type: 'SET_BOOKS', payload: response.data });

  } catch {
    console.log('API ERROR');
  }

}

function* apiSaga() {
  yield takeLatest('FETCH_API', apiBooks);


};






export default apiSaga;

