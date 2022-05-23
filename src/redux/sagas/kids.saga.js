import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
function* fetchKids(action) {
    // const currentKidId = localStorage.getItem('current_kid_id')
    try {
        const response = yield axios({
            method: 'GET',
            url:'/kids'
        });
        console.log('get all kids:------>', response.data);
        yield put({ type: 'SET_KIDS', payload: response.data });

    } catch {
        console.log('get Kids error');
    }
        
}

function* kidsSaga() {
    yield takeLatest('FETCH_KIDS', fetchKids);
 
  };
  export default kidsSaga;