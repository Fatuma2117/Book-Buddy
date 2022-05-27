function* fetchPoints() {
    const currentKidId = localStorage.getItem('current_kid_id')
    
    try {
      const response = yield axios({
        method: 'GET',
        url: `/books`,
        headers: { currentKidId }
      });
      console.log('GET SUM POINTS----->:', response.data);
      yield put({ type: 'SET_POINTS', payload: response.data });
  
    } catch {
      console.log('GET/POINTS error');
    }
  
  }

  function* pointsSaga() {
    yield takeLatest('FETCH_POINTS', fetchPoints);
 
  };

  export default pointsSaga;