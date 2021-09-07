import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import Checkout from './Checkout';
import { useHistory } from 'react-router-dom';
import { getCartTotal } from './reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

function Payment() {
	const [{ cart, user }, dispatch] = useStateValue();
	const history = useHistory();

	const stripe = useStripe();
	const elements = useElements();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		// generate special stripe secret to allow us to utilize the API

		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				url: '/payments/create?total=${getCartTotal(cart) *  100}',
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [cart]);

	console.log('The secret is:', clientSecret);

	const handleSubmit = async (e) => {
		// stripe logic
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				//paymentIntent = payment confirmation
				setSucceeded(true);
				setError(null);
				setProcessing(false);

				history.replace('/orders');
			});
	};

	const handleChange = (e) => {
		// listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	};

	return (
		<div className='payment'>
			<div className='payment__container'>
				{/* Payment section - delivery address */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>1 Shipping address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>

				{/* Payment section -  payment method */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment__details'>
						{/* Stripe API goes here */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
						</form>
					</div>
				</div>

				{/* Payment section - review items */}
				<div className='payment__section' id='review__items'>
					<div className='payment__title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment__items'>
						{cart.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
					<div className='payment__priceContainer'>
						<div className='inline__containerLeft'>
							<button disabled={processing || disabled || succeeded}>
								<span>
									{processing ? <p>Processing</p> : 'Place your order'}
								</span>
							</button>
						</div>
						<div className='inline__containerRight'>
							<CurrencyFormat
								renderText={(value) => <h3>Order Total: {value}</h3>}
								decimalScale={2}
								value={getCartTotal(cart)}
								displayType={'text'}
								thousandSeparator={true}
								prefix={'$'}
							/>
							<p>
								By placing your order, you agree to FAKE AMAZON CLONE's
								<a href='#'> privacy notice</a> and{' '}
								<a href='#'>conditions of use</a>.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='order__summary'>
				<button>Place your order</button>
				<p className='disclaimer'>
					By placing your order, you agree to FAKE AMAZON CLONE's
					<a href='#'> privacy notice</a> and <a href='#'>conditions of use</a>.
				</p>
				<div className='summary__details'>
					<h3>Order Summary</h3>
					<table>
						<tbody>
							<tr>
								<td>
									<span>Items:</span>
								</td>
								<td>
									<span>$54.99</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Shipping & handling:</span>
								</td>
								<td>
									<span>$2.99</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Free Shipping:</span>
								</td>
								<td>
									<span>-$2.99</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Total before tax:</span>
								</td>
								<td>
									<span>$54.99</span>
									{/* get cart total */}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Payment;
