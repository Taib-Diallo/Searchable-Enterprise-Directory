import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkUser = async () => {
        if (username && password) {
            const user = {username, password};
            const response = await axios.post('/login', user);
            return response.data;
		} else {
            alert('Missed a field');
		}
    }

	const login = event => {
		event.preventDefault();
        checkUser()
        .then(response => {
            if (response.length === 0) {
                alert('No one goes by that language round here')
                setUsername('')
                setPassword('')
            } else {
                dispatch({
                    type: 'LOGIN_SAGA',
                    payload: response,
                });
                navigate(`/home/${response[0].employee_no}`)
            }
        })
	}; // end login

	return (
        <form style={{backgroundColor: '#DEDEDE', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='formPanel' onSubmit={login}>
			<h2>Login</h2>
			<div>
				<label htmlFor='username'>
					Username:
					<input
						type='text'
						name='username'
						required
						value={username}
						onChange={event => setUsername(event.target.value)}
					/>
				</label>
			</div>
			<div>
				<label htmlFor='password'>
					Password:
					<input
						type='password'
						name='password'
						required
						value={password}
						onChange={event => setPassword(event.target.value)}
					/>
				</label>
			</div>
            <div>
				<button
                    m={3}
                    onClick={login}
                    sx={{width: 120}}
                    variant='contained'
				>
                    Login
                </button>
            </div>
		</form>
	);
}

export default LoginForm;