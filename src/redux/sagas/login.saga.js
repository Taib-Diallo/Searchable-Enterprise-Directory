import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Worker Saga: will be fired on "LOGIN" actions
// Worker Saga: will be fired on "LOGOUT" actions
function* loginSaga() {
	yield takeLatest('LOGIN_SAGA', loginUser);
	yield takeLatest('LOGOUT_SAGA', logoutUser);
}

function* loginUser(action) {
	try {
		console.log(action.payload)
		yield put({ type: 'SET_USER', payload: action.payload });
	} catch (error) {
		console.log('Error with user login:', error);
	}
}

function* logoutUser(action) {
	try {
		yield axios.post('/api/user/logout');
		yield put({ type: 'UNSET_USER' });
	} catch (error) {
		console.log('Error with user logout:', error);
	}
}

export default loginSaga;
