

function* fetchBooks(action) {
    const currentKidId = localStorage.getItem('current_kid_id')
    try {
        const response = yield axios({
            method: 'GET',
            url:'/books',
            headers:{currentKidId}

        });
        console.log('get all books:', response.data);
        yield put({ type: 'SET_BOOKS', payload: response.data });

    } catch {
        console.log('get all books error');
    }
        
}


function* booksSaga() {
    yield takeEvery('FETCH_BOOKS', fetchBooks);
 
  };
  export default booksSaga;