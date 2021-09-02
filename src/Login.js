import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				history.push('/');
			})
			.catch((error) => alert(error.message));
		//firebase login logic
	};
	const register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				console.log(auth);
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => alert(error.message));
		//firebase registration logic
	};
	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login__logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
				/>
			</Link>

			<div className='login__container'>
				<h1>Sign In</h1>
				<form action=''>
					<h5>Email</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type='submit'
						onClick={signIn}
						className='login__signInButton'
					>
						Sign In
					</button>
				</form>

				<p>
					By continuing, you agree to FAKE AMAZON CLONE'S Conditions of Use and
					Privacy Notice
				</p>
			</div>
			<div className='create__container'>
				<div className='divider'>
					<h5>
						<span>New to Amazon?</span>
					</h5>
				</div>
				<button
					type='submit'
					onClick={register}
					className='login__registerButton'
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
