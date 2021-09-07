import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import firebase from './firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import ScrollButton from './ScrollButton';
import Payment from './Payment';
import Paymentheader from './Paymentheader';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
	'pk_test_51JWZsLF7mzhhDN9XuBwIkz2IeacNwrL3ReIxisHWR6GizSXtYIIVjFanfRo2g9cg2We6eehMaZIHAuAKSro2H6H100L77IePaQ'
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		//will only run once whent the app component loads
		auth.onAuthStateChanged((authUser) => {
			console.log('The user is >>> ', authUser);

			if (authUser) {
				// the user just logged in / the user was logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		// BEM
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/checkout'>
						<Header />
						<Checkout />
						<ScrollButton />
						<Footer />
					</Route>
					<Route path='/payment'>
						<Paymentheader />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
						<ScrollButton />
						<Footer />
					</Route>
					<Route path='/'>
						<Header />
						<Home />
						<ScrollButton />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
