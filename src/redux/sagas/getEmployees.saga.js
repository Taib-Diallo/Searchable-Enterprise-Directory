import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getEmployeesSaga() {
	yield takeLatest('GET_EMPLOYEES_SAGA', getEmployees);
}

// worker Saga: will be fired on "GET_VIDEOS_SAGA" actions
function* getEmployees(action) {
  try {
    // get all employees
    const employees = yield axios.get('/employees');
    // send videos to reducer
    yield put({ type: 'GET_EMPLOYEES', payload: employees.data });
  } catch (error) {
    console.log('Error with getEmployeesSaga:', error);
  }
}

export default getEmployeesSaga;
